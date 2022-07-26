/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory,useParams } from 'react-router';
import { Spinner } from '../../../components';
import "../Dashboard/dashboard.css" ;
import * as action from "../../../store/actions/index"


const Bookings = () => {
  const role = localStorage.getItem('role')
   const params = useParams();
   const history = useHistory();
    const dispatch= useDispatch();
    const {bookings,loader} = useSelector(state=>state.catagory);
    const [booking,setBooking] = useState([]);
    useEffect(()=>{
        if(bookings[0]){
            setBooking(bookings)
        }
    },[bookings])
    const getTime = (st,et) => `${Math.floor(st/60)}:${st%60} - ${Math.floor(et/60)}:${et%60}`
    
    return(
        loader?<Spinner/>:(
            <div className='itemflex'>
              {
                booking[0] && booking.map((item)=>(
              
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div className='catagory' key={item.id}  >
                  <div
                   key={item.id}
                   >
                  <div>
                      service tme : {getTime(item.starttime,item.endtime)}
                  </div>
                  <div>
                      Service : {item.service}
                      </div>
                      <div>
                        Price : {item.price}
                      </div>
                </div>
               </div>
                )) 
              }
             {booking[0] && <div>
                  Total : {booking.reduce((s,n)=>s+n.price,0)}
              </div>} 
            </div>
             )
    )
}

export default Bookings