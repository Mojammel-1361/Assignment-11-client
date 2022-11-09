import React from 'react';

const ReviewRow = ({ review }) => {
    const { name, email, massages, dept } = review;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar"></div>
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
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
    </tr>
  );
};

export default ReviewRow;