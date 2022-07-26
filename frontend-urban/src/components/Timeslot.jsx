/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import './component.css';

const Timeslot = ({ previous, next, vendor }) => {
  const [, setTime] = useState('');
  const [date, setDate] = useState(new Date());
  const booked = [780, 810];
  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 10 * 60 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const getTimeSlot = (time, duration) => {
    console.log(time);
    setTime([time, time + duration]);
    setDate(new Date());
  };
  const getTimeSlots = vendor.timeslots?.map(
    time =>
      date.getHours() * 60 + date.getMinutes() + vendor.duration < time && (
        <div
          onClick={() => getTimeSlot(time, vendor.duration || 60)}
          key={time}
          // eslint-disable-next-line no-useless-concat
          className={`timeslot${booked.includes(time) ? ' booked' : ''}`}
        >
          {Math.floor(time / 60)}:{time % 60} -{Math.floor((time + (vendor.duration || 60)) / 60)}:
          {(time + (vendor.duration || 60)) % 60}
          {booked.includes(time) && <span> booked </span>}
        </div>
      ),
  );
  // console.log(getTimeSlots[getTimeSlots.length - 1]);
  return (
    <div>
      <div className="timeslotcontainer">
        {console.log('date', date)}
        {vendor.timeslots && getTimeSlots}
      </div>
      {getTimeSlots[getTimeSlots.length - 1] ? (
        <div className="setbuttons">
          <button className="btn btn-success" type="button" onClick={previous}>
            Previous
          </button>
          <button className="btn btn-success" type="button" onClick={next}>
            Next
          </button>
        </div>
      ) : (
        'No timeslots available now'
      )}
    </div>
  );
};

export default Timeslot;
