import React from 'react';

const AllComentRow = (service) => {
    
    const { name, email, massages } = service.service;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar"></div>
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