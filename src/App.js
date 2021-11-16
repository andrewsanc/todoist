import React, { useState } from "react";
import Card from "./Card";
import Form from "./Form";

const initialState = [
  { title: "My first todo", description: "Weeee!" },
  { title: "My second todo", description: "WEEEEEE!" },
];

const App = () => {
  const [toDoList, setToDoList] = useState(initialState);

  const renderToDoList = toDoList.map((toDoObj) => {
    return <Card title={toDoObj.title} description={toDoObj.description} />;
  });

  const showCreateNewToDo = () => {};

  return (
    <div className='bg-gray-100 flex flex-col items-center h-screen'>
      <div className='container'>
        <Form />
        <div>{renderToDoList}</div>
      </div>
    </div>
  );
};

export default App;
