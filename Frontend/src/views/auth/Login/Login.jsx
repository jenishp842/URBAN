import React, { useEffect, useState } from 'react'
import "./login.scss"
import { useDispatch ,useSelector} from "react-redux";
import * as action from "../../../store/actions/index"
import { AlertMessageModal } from '../../../components';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [,setError] = useState("");
    const {errorMsg}=useSelector(state=>state.auth);
    const {open} = useSelector(state=>state.modal)
    const dispatch = useDispatch();
    const login =async(e)=>{
        e.preventDefault();
        dispatch(action.login({email,password}))
    }
    useEffect(()=>{
      if(errorMsg){
        dispatch(action.showModal({message:errorMsg,notifyType:3,title:"Error"}))
         setError(errorMsg)
      }
    },[errorMsg])
  return(
    <div className='maindiv'>
       <form  onSubmit={login} >
      <h2>
        Login
      </h2>
      <div>
        <label >Username</label> <br />
        <input
          type="text"
          id="userId"
          name="userName"
          placeholder="user@example.com"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div>
        <label > Password </label><br />
        <input 
        type="password" 
        id="pass"
        name="parola" 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)} 
        required />
      </div>
      <input type="checkbox" id="checkbox" name="checkAccount" />
      <label >Remember me</label>
      <br />
      <button type="submit" className='mb-2'>LOG IN</button>
    </form>
   {
     open?<AlertMessageModal/>:null
   }
</div> 
  )
}

export default Login