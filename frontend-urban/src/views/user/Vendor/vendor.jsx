/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router';
import { Spinner } from '../../../components';
import "../Dashboard/dashboard.css" ;
import * as action from "../../../store/actions/index"


const Vendors = () => {
   const params = useParams();
    const dispatch= useDispatch();
    const history = useHistory();
    const {vendors,loader} = useSelector(state=>state.catagory);
    const [vendor,setVendor] = useState([]);
    useEffect(()=>{
        if(vendors[0]){
            setVendor(vendors)
        }
    },[vendors])
    useEffect(()=>{
        dispatch(action.vendor({serviceId:params.id}))
    },[])
   const vendorDetail = id => {
     history.push(`/vendor/${id}`)
   }
    return(
        loader?<Spinner/>:(
            <div className='itemflex'>
              {
                vendor[0] && vendor.map((item)=>(
              
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div className='vendor' key={item._id} onClick={()=>vendorDetail(item._id)} >
                    <h2>
                        {item.service.name}
                    </h2>
                  <div
                   key={item._id}
                   >
                  {item.shopname}
                </div>
                <div>
                    {item.address.city}
                 </div>
               </div>
                )) 
              }
            </div>
             )
    )
}

export default Vendors;