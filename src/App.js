import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Example from "./Components/Example/Example";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/example" element={<Example />} />
    </Routes>
  );
}

export default App;
