import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contex/AuthProvidor/AuthProvidor';

const Review = () => {
    const {user } = useContext(AuthContext)
    return (
      <div>
        <h1>Review</h1>
      </div>
    );
};

export default Review;