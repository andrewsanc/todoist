import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";

const initialState = ["Pick up groceries", "Order new mouse", "Feed Luci"];

const Home = () => {
  const [toDoList, setToDoList] = useState(initialState);

  const removeToDoHandler = (index) => {
    let newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDoList(newToDoList);
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
        removeToDoHandler={removeToDoHandler}
        key={`ToDo Item-${i}`}
        index={i}
        title={item}
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
