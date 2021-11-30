import React, { useState, useEffect } from "react";
import Form from "./Form";
import Card from "./Card";

const Home = () => {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    fetchToDoList();
  }, []);

  const fetchToDoList = async () => {
    const response = await fetch("http://localhost:4000/api/v1/tasks");
    const { tasks } = await response.json();
    setToDoList(tasks);
  };

  const createNewTask = async (newToDoItem) => {
    const response = await fetch("http://localhost:4000/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newToDoItem,
      }),
    });

    const { task } = await response.json();
    if (task) {
      fetchToDoList();
    }
  };

  const renderToDoList = toDoList.map((item, i) => {
    return (
      <Card
        key={`ToDo Item-${i}`}
        id={item._id}
        name={item.name}
        fetchToDoList={fetchToDoList}
        completed={item.completed}
      />
    );
  });

  return (
    <div className='container w-7/12'>
      <Form createNewTask={createNewTask} />
      <div>{renderToDoList}</div>
    </div>
  );
};

export default Home;
