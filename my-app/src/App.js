import React, { Component } from "react";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<Home2/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;