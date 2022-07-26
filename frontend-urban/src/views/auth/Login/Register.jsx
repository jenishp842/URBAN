import React, { useEffect } from 'react'
import "./login.scss";
import { Formik } from "formik";
import * as Yup from "yup"
import { useDispatch,useSelector } from 'react-redux';
import { AlertMessageModal } from '../../../components';
import * as action from "../../../store/actions/index"

const Register = () => {
    const {errorMsg,isRegistered}=useSelector(state=>state.auth);
    const {open}= useSelector(state=>state.modal)
    const dispatch = useDispatch();

    useEffect(()=>{
    if(errorMsg){
      dispatch(action.showModal({message:errorMsg,notifyType:3,title:"Error"}))
    }
    if(isRegistered){
      dispatch(action.showModal({message:"Registered Successfuly",notifyType:2,
      redirectURL:"/signin",title:"Success"}))
    }
    },[errorMsg,isRegistered])
    const SignupSubmit =(values)=>{
        console.log(values)
        dispatch(action.register(values))
    }

    const authenticationFormSchema = Yup.object({
           email:Yup.string().email().required("email is required"),
           password:Yup.string().min(4).required("password is required"),
           confirmpassword:Yup.string().required(),
    })
  return(
    <div className='maindiv'>
      <div>
        <Formik
        initialValues={{email:"",password:"",confirmpassword:"",role:"user"}}
        onSubmit={SignupSubmit}
        validationSchema={authenticationFormSchema}
        validate={
          (values)=>{
            const errors={}
            if(values.password!==values.confirmpassword){
              errors.confirmpassword="confirm password doesn't match with password"
            }
            return errors
          }
        }>
         {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit
         })=>(
          <form  onSubmit={handleSubmit} style={{height:"600px"}}>
            <h2> Register</h2>
            <div>
        <label >User email</label> <br />
        <input
          type="text"
          id="userId"
          name="email"
          placeholder="user@example.com"
          value={values.email}
          onChange={handleChange}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label > Password </label><br />
        <input 
        type="password" 
        id="pass"
        name="password" 
        value={values.password} 
        onChange={handleChange} 
         />
         {touched.password && errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label >Confirm Password </label><br />
        <input 
        type="password" 
        id="conpass"
        name="confirmpassword" 
        value={values.confirmpassword} 
        onChange={handleChange} 
       />
        {touched.confirmpassword && errors.confirmpassword && <span>{errors.confirmpassword}</span>}
      </div>
      <div>
      <label > Register As </label><br />
      <select id="select" onChange={handleChange} name="role" value={values.role}>
            <option value="user">User</option>
            <option value="vendor">Vendor(Service Provider)</option>
     </select>
     </div>
    
      <br />
      <button type="submit" className='mb-2'>Register</button>
     </form>
    )}
  </Formik>
        </div>
        {
     open?<AlertMessageModal/>:null
   }
</div> 
  )
}

export default Register;