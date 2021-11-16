import React, { useState } from "react";

const Form = ({ submitToDoHandler }) => {
  const [newToDoItem, setNewToDoItem] = useState("");

  return (
    <div className='bg-white my-10 p-2 border rounded-md shadow-s flex flex-col items-center'>
      <h1 className='text-2xl font-medium my-3'>Task Manager</h1>
      <div className='container mb-8 flex items-center justify-center'>
        <form
          onSubmit={(e) => submitToDoHandler(e, newToDoItem, setNewToDoItem)}
        >
          <input
            onChange={(e) => setNewToDoItem(e.target.value)}
            value={newToDoItem}
            className='shadow border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-8/12 rounded-l-md'
            type='text'
            placeholder='e.g. pick up groceries'
          />
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
