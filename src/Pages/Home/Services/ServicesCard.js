import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const {_id, img, title, description } = service;
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div>
            {description.length > 220 ? (
              <p>
                {description.slice(0, 220) + "..."}
                <Link className="text-sky-500" to={`/description/${_id}`}>
                  Readmore
                </Link>
              </p>
            ) : (
              <p>{description}</p>
            )}
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm">Review</button>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;