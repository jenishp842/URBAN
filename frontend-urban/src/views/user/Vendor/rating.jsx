/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Reviewbox from './reviewbox';

const rating = ({ reviews, id }) => {
  console.log(reviews);
  const [rating, setRating] = useState(2);
  return (
    <div>
      {reviews.map((review, index) => (
        <Reviewbox review={review} />
      ))}
    </div>
  );
};

export default rating;
