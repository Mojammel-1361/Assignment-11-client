import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const SeeAllCard = ({ service }) => {
  const { _id, img, title, description, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-53" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="text-justify">
          {description.length > 220 ? (
            <p>
              {description.slice(0, 220) + "..."}
              <Link className=" btn btn-primary btn-xs" to={`/details/${_id}`}>
                Read More
              </Link>
            </p>
          ) : (
            <p>{description}</p>
          )}
        </div>
        <div className="card-actions justify-between">
          <div>Visiting price: {price} $</div>
          <>
            Rating: {price} <FaStar />
            <FaStar /> <FaStarHalfAlt />
          </>
        </div>
      </div>
    </div>
  );
  
};

export default SeeAllCard;
