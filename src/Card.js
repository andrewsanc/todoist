import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Card = ({ title, index, removeToDoHandler }) => {
  return (
    <div className='bg-white py-4 px-14 my-4 border rounded-md shadow-sm flex items-center'>
      <h2 className='text-xl font-normal text-gray-800'>{title}</h2>
      <div className='ml-auto flex'>
        <FaEdit size='20' className='mx-6 cursor-pointer hover:opacity-30' />
        <FaTrashAlt
          onClick={(index) => removeToDoHandler(index)}
          size='20'
          className='cursor-pointer hover:opacity-30'
        />
      </div>
    </div>
  );
};

export default Card;
