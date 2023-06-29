
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import { resetPasswordValidation } from '../helper/validate';

import Styles from '../Components/Styles/Username.module.css'


const Reset= () => {

const formik = useFormik({
  initialValues: {
    password: 'admin@123',
    confirm_pwd:'admin@123',
    },
    validate : resetPasswordValidation,
    validateOnBlur : false ,
    validateOnChange : false,
    onSubmit : async values => {
      console.log(values)
    }
});



  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className={Styles.glass}>
          <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Reset</h4>
              <span className="py-4 text-xl w--2/3 text-center text-gray-500">Enter new password</span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <Toaster position='top-center'></Toaster>
                <input {...formik.getFieldProps('password')} className={Styles.textbox} type="text" placeholder="New Password"></input>
                <input {...formik.getFieldProps('confirm_pwd')} className={Styles.textbox} type="text" placeholder="Repeat Password"></input>
                <button className={Styles.btn} type="submit">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reset;