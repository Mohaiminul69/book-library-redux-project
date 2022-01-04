import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Example from "./Components/Example/Example";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import NotFound from "./Components/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import BooksHome from "./Components/Books/BooksHome/BooksHome";
import DiscoverBooks from "./Components/Books/DiscoverBooks/DiscoverBooks";
import Payment from "./Components/Books/Payment/Payment";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<PrivateRoute><BooksHome /></PrivateRoute>} />
        <Route path="/payment/:price" element={<PrivateRoute><Payment /></PrivateRoute>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
