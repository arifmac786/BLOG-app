import React, { useEffect, useState } from "react";
import Signup from "./pages/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { login, logout } from "./store/authSlice";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user", { withCredentials: true })
      .then((userData) => {
        if (userData) {
          console.log(userData);
          dispatch(login(userData.data.data));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => {
        console.log("Get user error", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <h1 className="min-h-screen w-full text-white bg-black m-auto">
        Loading...
      </h1>
    );
  }
  return (
    <div className="w-full min-h-screen flex   ">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default App;
