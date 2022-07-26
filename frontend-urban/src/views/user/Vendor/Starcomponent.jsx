import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Starcomponent = ({ rating }) => (
  <div>
    <StarRatingComponent name="star" starCount={5} value={Math.round(rating)} editing={false} />
  </div>
);

export default Starcomponent;
