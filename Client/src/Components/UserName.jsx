import {Link} from 'react-router-dom';
import avatar from '../assets/profile.png'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import { usernameValidate } from '../helper/validate';

import Styles from '../Components/Styles/Username.module.css'


const Username = () => {

const formik = useFormik({
  initialValues: {
    username: '',
    },
    validate : usernameValidate,
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
              <h4 className="text-5xl font-bold">Hello Again !</h4>
              <span className="py-4 text-xl w--2/3 text-center text-gray-500">Explore More by connecting with us</span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img src={avatar} className={Styles.profile_img} alt="avatar"></img>

            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <Toaster position='top-center'></Toaster>
                <input {...formik.getFieldProps('username')} className={Styles.textbox} type="text" placeholder="Username"></input>
                
                <button className={Styles.btn} type="submit">Lets Go</button>
            </div>

            <div className="text-center py-4">
                <span className="text-gray-500">Not a member<Link className='text-red-500' to="/register">Register Now</Link></span>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Username