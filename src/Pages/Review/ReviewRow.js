import React from 'react';

const ReviewRow = ({ review, hendelDelete }) => {
  const { _id, name, email, massages, dept,images } = review;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={images}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>

          <div>
            <div className="font-bold">{name}</div>
            {/* <div className="text-sm opacity-50">{email}</div> */}
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{dept}</td>
      <th>{massages}</th>
      <th>
        <label>
          <button onClick={() => hendelDelete(_id)} className="btn btn-xs">
            X
          </button>
        </label>
      </th>
    </tr>
  );
};

export default ReviewRow;