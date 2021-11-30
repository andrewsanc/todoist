import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Card = ({ name, id, completed, fetchToDoList }) => {
  let navigate = useNavigate();
  const editCardHandler = (id) => {
    navigate(`tasks/${id}`);
  };

  const deleteTaskHandler = async (id) => {
    const response = await fetch(`http://localhost:4000/api/v1/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });

    const { success } = await response.json();
    if (success) {
      fetchToDoList();
    }
  };

  return (
    <div className='bg-white py-4 px-14 my-4 border rounded-md shadow-sm flex items-center'>
      <h2
        className={
          completed
            ? "line-through text-xl font-normal text-gray-800"
            : "text-xl font-normal text-gray-800"
        }
      >
        {name}
      </h2>
      <div className='ml-auto flex'>
        <FaEdit
          onClick={() => editCardHandler(id)}
          size='20'
          className='mx-6 cursor-pointer hover:opacity-30'
        />
        <FaTrashAlt
          onClick={() => deleteTaskHandler(id)}
          size='20'
          className='cursor-pointer hover:opacity-30'
        />
      </div>
    </div>
  );
};

export default Card;
