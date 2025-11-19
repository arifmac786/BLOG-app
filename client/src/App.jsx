import React, { useEffect, useState } from "react";
import Signup from "./pages/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { login, logout } from "./store/authSlice";
import ProtectedRoutes from "./ProtectedRoutes";
import CreatePost from "./pages/createPost";
import { addProfile, removeProfile } from "./store/userProfileSlice";
import { addPost } from "./store/postSlice";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);
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

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/get-profile", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        dispatch(addProfile(res.data.data));
      })
      .catch((err) => {
        console.log("Get Profile ERROR", err);
        dispatch(removeProfile());
        dispatch(logout());
      })
      .finally(() => {
        console.log("DONE");
      });
  }, [post]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/post", { withCredentials: true })
      .then((res) => {
        console.log("ghjkhgjhk", res.data.data);
        dispatch(addPost(res.data.data));
      });
  }, [post]);

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
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Profile />{" "}
            </ProtectedRoutes>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoutes>
              <Signup />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectedRoutes>
              {" "}
              <Signin />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoutes>
              <CreatePost />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
