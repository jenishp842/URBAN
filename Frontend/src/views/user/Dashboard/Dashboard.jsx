/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import * as action from "../../../store/actions/index"
import "./dashboard.css" ;
import { Spinner } from '../../../components';


const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [catg,setCatagory] = useState([]);
  const {catagory,loader} = useSelector(state=>state.catagory)
  useEffect(()=>{
      dispatch(action.catagory())
  },[])
  useEffect(()=>{
   if( catagory[0]){
 setCatagory(catagory)
   }
  },[catagory])
  const handleClick = (id) =>{
   history.push(`/services/${id}`)
  }
   return(
     loader?<Spinner/>:(
    <div className='itemflex'>
      {
        catg[0] && catg.map((item)=>(
      
        <div className='catagory' key={item._id}  onClick={()=>handleClick(item._id)}>
          <div
           key={item._id}
           >
          {item.name}
        </div>
       </div>
        )) 
      }
    </div>
     )
    )
}

export default Dashboard