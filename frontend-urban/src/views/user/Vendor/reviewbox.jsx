import React from 'react';

const reviewbox = ({ review }) => (
  <>
    <div>{review.name || review.email}</div>
    <div>{review.comment}</div>
    <div>
      {[...Array(review.rating).keys()].map(() => (
        <i className="fa fa-star" style={{ color: 'yellow' }} />
      ))}
    </div>
  </>
);

export default reviewbox;
