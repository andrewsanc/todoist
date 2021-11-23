import React, { useState, useEffect } from "react";

const EditCard = () => {
  const [taskID, setTaskID] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [inRequest, setInRequest] = useState(false);
  const [successfulUpdate, setSuccessfulUpdate] = useState(false);

  // Get task id from URL, make request to backend to retrieve task data
  useEffect(() => {
    const fetchTask = async () => {
      const taskID = window.location.pathname.split("/")[2];
      const response = await fetch(
        `http://localhost:4000/api/v1/tasks/${taskID}`
      );
      const { task } = await response.json();
      setTaskID(task._id);
      setTaskName(task.name);
      setTaskCompleted(task.completed);
    };

    fetchTask();
  }, []);

  const submitButtonHandler = async (e) => {
    e.preventDefault();
    setInRequest(true);
    const response = await fetch(
      `http://localhost:4000/api/v1/tasks/${taskID}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: taskName,
          completed: taskCompleted,
        }),
      }
    );

    const { task } = await response.json();
    setTaskID(task._id);
    setTaskName(task.name);
    setTaskCompleted(task.completed);
    setInRequest(false);
    setSuccessfulUpdate(true);
  };

  return (
    <div className='bg-white py-4 px-14 my-4 border rounded-md shadow-sm flex flex-col items-center'>
      <h2 className='text-xl font-normal text-gray-800'>Edit Task</h2>
      <div className='flex'>
        <span>Task ID</span>
        <span>{taskID}</span>
      </div>
      <div className='flex items-center'>
        <span>Name</span>
        <input
          className='shadow border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-8/12 rounded-l-md'
          type='text'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className='flex items-center'>
        <span>Completed</span>
        <input
          type='checkbox'
          className='form-checkbox'
          checked={taskCompleted}
          onChange={(e) => setTaskCompleted(e.target.checked)}
        />
      </div>
      <button
        onClick={submitButtonHandler}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        {inRequest ? "Submitting..." : "Submit"}
      </button>
      <div>{successfulUpdate && "Edit Successful"}</div>
    </div>
  );
};

export default EditCard;
