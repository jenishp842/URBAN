/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory,useParams } from 'react-router';
import { Spinner } from '../../../components';
import "../Dashboard/dashboard.css" ;
import * as action from "../../../store/actions/index"


const Services = () => {
  const role = localStorage.getItem('role')
   const params = useParams();
   const history = useHistory();
    const dispatch= useDispatch();
    const {services,loader} = useSelector(state=>state.catagory);
    const [service,setService] = useState([]);
    useEffect(()=>{
        if(services[0]){
            setService(services)
        }
    },[services])
    useEffect(()=>{
        dispatch(action.services({catagoryId:params.id}))
    },[])
    const handleClick = id => {
      if(role==='user'){
      history.push(`/vendors/${id}`)
      }
      if(role==='vendor'){
        history.push(`/regVenderservice/${id}`)
      }
    }
    return(
        loader?<Spinner/>:(
            <div className='itemflex'>
              {
                service[0] && service.map((item)=>(
              
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div className='catagory' key={item._id} onClick={()=>handleClick(item._id)} >
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

export default Services