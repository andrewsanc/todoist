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

  const submitToDoHandler = (e, newToDoItem, setNewToDoItem) => {
    e.preventDefault();
    if (newToDoItem === "") return;
    let newToDoList = [...toDoList];
    newToDoList.push(newToDoItem);
    setToDoList(newToDoList);
    setNewToDoItem("");
  };

  const renderToDoList = toDoList.map((item, i) => {
    return (
      <Card
        key={`ToDo Item-${i}`}
        id={item._id}
        name={item.name}
        fetchToDoList={fetchToDoList}
      />
    );
  });

  return (
    <div className='container w-7/12'>
      <Form submitToDoHandler={submitToDoHandler} />
      <div>{renderToDoList}</div>
    </div>
  );
};

export default Home;
