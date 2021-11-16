import React from "react";

const Card = ({ title }) => {
  return (
    <div className='bg-white p-4 my-4 border rounded-md shadow-sm flex items-center'>
      <h2 className='text-2xl font-bold mb-2 text-gray-800'>{title}</h2>
      <div className='flex items-center'>
        <button>Add</button>
        <button>Add</button>
      </div>
    </div>
  );
};

export default Card;
