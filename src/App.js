import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import EditCard from "./EditCard";

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-gray-100 flex flex-col items-center min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='tasks/:id' element={<EditCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
