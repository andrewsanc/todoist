import React, { useState, useEffect } from "react";

const EditCard = () => {
  const [taskID, setTaskID] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskCompleted, setTaskCompleted] = useState(false);

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

  return (
    <div className='bg-white py-4 px-14 my-4 border rounded-md shadow-sm flex flex-col items-center'>
      <h2 className='text-xl font-normal text-gray-800'>Edit Task</h2>
      <div className='ml-auto'>
        <div className='flex'>
          <span>Task ID</span>
          <span>{taskID}</span>
        </div>
      </div>
    </div>
  );
};

export default EditCard;
