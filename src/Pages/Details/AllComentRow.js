import React from 'react';

const AllComentRow = (service) => {
    
    const { name, email, massages, images } = service.service;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={images} alt="img" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>

      <td>{massages}</td>
    </tr>
  );
};

export default AllComentRow;