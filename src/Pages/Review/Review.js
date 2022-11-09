import React, { useContext } from 'react';
import { AuthContext } from '../../contex/AuthProvidor/AuthProvidor';
import { useState, useEffect } from 'react';
import ReviewRow from './ReviewRow';

const Review = () => {
    const {user } = useContext(AuthContext)
    const [reviews, setReviews] = useState({})
    
    
    useEffect(() =>{
        fetch(`http://localhost:6600/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [user?.email])

    return (
      <div>
        <div>{reviews.length}</div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Review/Massages</th>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <ReviewRow key={review._id} review={review}></ReviewRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Review;