/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Spinner } from '../../../components';
import '../Dashboard/dashboard.css';
import * as action from '../../../store/actions/index';
import Timeslot from '../../../components/Timeslot';
import Rating from './rating';
import Starcomponent from './Starcomponent';

const Vendors = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { vendorDetail, loader } = useSelector(state => state.catagory);
  const [vendor, setVendor] = useState('');
  const [comments, setComments] = useState(false);
  const [timeslot, setTimeslot] = useState([]);
  const [newreview, setNewreview] = useState(false);
  const booked = [780];
  useEffect(() => {
    if (vendorDetail) {
      setVendor(vendorDetail);
    }
  }, [vendorDetail]);
  useEffect(() => {
    dispatch(action.getVendor({ id: params.id }));
  }, [params.id]);
  const getTimeSlot = (time, duration) => {
    setTimeslot([time, time + duration]);
  };
  const addReview = () => {
    newreview(true);
  };
  const addtoBook = () => {
    //    if(timeslot.length===0){
    //        alert("please select time slot")
    //        return;
    //    }
    history.push('/servicebooking');
    localStorage.setItem('step', 1);
    dispatch(
      action.addtoBook({
        vendor: vendor._id,
        vendorDetail: vendor,
        // starttime: timeslot[0],
        // endtime: timeslot[1],
        // service: vendor.service.name,
        // price: vendor.price,
      }),
    );
  };
  return loader ? (
    <Spinner />
  ) : (
    <div className="itemflex">
      {vendor ? (
        <div>
          <button type="button" className="btn btn-success" onClick={addtoBook}>
            add to book
          </button>
          <Starcomponent rating={vendor.rating} />
          {/* Address : {vendor.address.area} */}
          <div>City : {vendor.address.city}</div>
          <div>State : {vendor.address.state}</div>
          <div>Shop name : {vendor.shopname}</div>
          <div>Name : {vendor.name}</div>
          <div>Contact : {vendor.contact}</div>
          <div>Price : {vendor.price}</div>
          <div>Holiday : {vendor.holiday}</div>
          <div>
            <button type="button" onClick={addReview}>
              add review
            </button>
          </div>
          <div>
            <div
              onClick={() => setComments(!comments)}
              style={{ cursor: 'pointer', color: 'blue' }}
            >
              {comments ? 'hide' : 'view'} comments
            </div>
            {comments && <Rating id={vendor._id} reviews={vendor.review} />}
            {/* <Timeslot timeslot={vendor} />
            {vendor.timeslots &&
              vendor.timeslots.map(
                time =>
                  new Date().getHours() * 60 + new Date().getMinutes() + vendor.duration < time && (
                    <div onClick={() => getTimeSlot(time, vendor.duration || 60)} key={time}>
                      {Math.floor(time / 60)}:{time % 60} -
                      {Math.floor((time + (vendor.duration || 60)) / 60)}:
                      {(time + (vendor.duration || 60)) % 60}
                      {booked.includes(time) && <span> booked </span>}
                    </div>
                  ),
              )} */}
          </div>
        </div>
      ) : (
        <div> Vendor not found</div>
      )}
    </div>
  );
};

export default Vendors;
