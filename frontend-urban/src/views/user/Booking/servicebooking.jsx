/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Addressform from '../../../components/Addressform';
import Timeslot from '../../../components/Timeslot';
import Payment from '../../../components/Payment';
import '../../../components/component.css';

const servicebooking = () => {
  const [step, setStep] = useState(localStorage.getItem('step') * 1 || 1);
  const { bookings } = useSelector(state => state.catagory);
  const next = () => {
    setStep(step + 1);
  };
  const previous = () => {
    setStep(step - 1);
  };
  useEffect(() => {
    localStorage.setItem('step', step);
  }, [step]);
  switch (step) {
    case 1: {
      return <Addressform next={next} previous={previous} />;
    }
    case 2: {
      return <Timeslot next={next} previous={previous} vendor={bookings[0].vendorDetail} />;
    }
    case 3: {
      return <Payment next={next} previous={previous} />;
    }
    default: {
      return <Addressform />;
    }
  }
};

export default servicebooking;
