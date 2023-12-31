import { useState } from 'react';
import {Link} from 'react-router-dom';
import avatar from '../assets/profile.png'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {registerValidation  } from '../helper/validate';
import convertToBase64 from '../helper/convert';

import Styles from '../Components/Styles/Username.module.css'


const Profile = () => {

  const [file ,setFile] = useState();

const formik = useFormik({
  initialValues: {
    firstname:'',
    lastname: '',
    email: 'hello@world.com',
    mobile:'', 
    address: ''
    },
    validate :registerValidation ,
    validateOnBlur : false ,
    validateOnChange : false,
    onSubmit : async values => {
      values = await Object.assign(values,{profile : file || ''})
      console.log(values)
    }
});


const onUpload = async e => {
  const base64 = await convertToBase64(e.target.files[0]);
  setFile(base64);
}



  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className={Styles.glass} style={{height:'95vh',width:'40%'}}>
          <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Profile</h4>
              <span className="py-4 text-xl w--2/3 text-center text-gray-500">You can update with details.</span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor='profile'>
              <img src={ avatar || File}  className={Styles.profile_img} alt="avatar"></img>
              </label>
              <input onChange={onUpload} type='file' id='profile' name='profile'></input>
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <Toaster position='top-center'></Toaster>
              <div className='name flex w-3/4 gap-10' >
              <input {...formik.getFieldProps('firstname')} className={Styles.textbox} type="text" placeholder="First name*"></input>
              <input {...formik.getFieldProps('lastname')} className={Styles.textbox} type="text" placeholder="Last name*"></input>
              </div>
              <div className='name flex w-3/4 gap-10' >
              <input {...formik.getFieldProps('mobile')} className={Styles.textbox} type="text" placeholder="Mobile*"></input>
              <input {...formik.getFieldProps('email')} className={Styles.textbox} type="text" placeholder="Email*"></input>
              </div>
              
                <input {...formik.getFieldProps('address')} className={Styles.textbox} type="text" placeholder="Address*"></input>
      
                
                <button className={Styles.btn} type="submit">Update</button>
            </div>

            <div className="text-center py-4">
                <span className="text-gray-500">Come back later? <Link className='text-red-500' to="/recovery"> Logout</Link></span>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile;