import React, { useState } from "react";
import Card from "./Card";
import Form from "./Form";

const initialState = ["Pick up groceries", "Order new mouse", "Feed Luci"];

const App = () => {
  const [toDoList, setToDoList] = useState(initialState);

  const renderToDoList = toDoList.map((item, i) => {
    return <Card key={`ToDo Item-${i}`} title={item} />;
  });

  const submitToDoHandler = (e, newToDoItem, setNewToDoItem) => {
    e.preventDefault();
    if (newToDoItem === "") return;
    let newToDoList = [...toDoList];
    newToDoList.push(newToDoItem);
    setToDoList(newToDoList);
    setNewToDoItem("");
  };

  return (
    <div className='bg-gray-100 flex flex-col items-center h-screen'>
      <div className='container w-7/12'>
        <Form submitToDoHandler={submitToDoHandler} />
        <div>{renderToDoList}</div>
      </div>
    </div>
  );
};

export default App;
