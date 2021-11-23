import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Card = ({ name, id, removeToDoHandler }) => {
  let navigate = useNavigate();
  const editCardHandler = (id) => {
    navigate(`task/${id}`);
  };

  return (
    <div className='bg-white py-4 px-14 my-4 border rounded-md shadow-sm flex items-center'>
      <h2 className='text-xl font-normal text-gray-800'>{name}</h2>
      <div className='ml-auto flex'>
        <FaEdit
          onClick={() => editCardHandler(id)}
          size='20'
          className='mx-6 cursor-pointer hover:opacity-30'
        />
        <FaTrashAlt
          onClick={removeToDoHandler}
          size='20'
          className='cursor-pointer hover:opacity-30'
        />
      </div>
    </div>
  );
};

export default Card;
