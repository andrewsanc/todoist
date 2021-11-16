import React from "react";

const Form = () => {
  return (
    <div className='bg-white my-10 flex flex-col items-center'>
      <h1 className='text-2xl font-medium my-3'>Task Manager</h1>
      <div className='flex items-center'>
        <div className='relative'>
          <label class='block text-gray-700 text-sm font-bold mb-2' for='Title'>
            Title
          </label>
          <input
            class='shadow border roundedpy-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            placeholder='Title'
          />
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
