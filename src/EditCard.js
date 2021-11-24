import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

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

  let navigate = useNavigate();
  return (
    <div className='bg-white py-8 px-10 my-4 border rounded-md shadow-sm flex flex-col items-center w-5/12'>
      <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Edit Task</h2>
      <div className='container my-2 flex items-center'>
        <div className='mx-10 w-2/12'>Task ID</div>
        <div className=''>{taskID}</div>
      </div>
      <div className='container flex items-center'>
        <div className='mx-10 my-2 w-2/12'>Name</div>
        <input
          className='shadow border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-8/12 rounded-l-md'
          type='text'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className='container flex items-center'>
        <div className='mx-10 my-2 w-2/12'>Completed</div>
        <input
          type='checkbox'
          className='form-checkbox'
          checked={taskCompleted}
          onChange={(e) => setTaskCompleted(e.target.checked)}
        />
      </div>
      <div className='container flex justify-center'>
        <button
          onClick={() => navigate("/")}
          className='bg-white front-semibold py-2 px-4 mx-2 text-blue-500 border border-blue-500 rounded'
        >
          Back
        </button>
        <button
          onClick={submitButtonHandler}
          className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 mx-2 rounded'
        >
          {inRequest ? "Submitting..." : "Submit"}
        </button>
      </div>
      {successfulUpdate && <div className='mt-4'>Edit Successfull</div>}
    </div>
  );
};

export default EditCard;
