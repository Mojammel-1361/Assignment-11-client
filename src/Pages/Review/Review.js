import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const {_id, img, title, description } = useLoaderData();
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
};

export default Review;