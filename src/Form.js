import React from "react";

const Form = () => {
  return (
    <div className='bg-white my-10 p-2 border rounded-md shadow-s flex flex-col items-center'>
      <h1 className='text-2xl font-medium my-3'>Task Manager</h1>
      <div className='container mb-8 flex items-center justify-center'>
        <input
          class='shadow border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-8/12 rounded-l-md'
          type='text'
          placeholder='Title'
        />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
