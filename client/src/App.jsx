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
import { addPosts } from "./store/postSlice";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  console.log(status);

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
    function fetchPosts() {
      if (!status) return null;
      axios
        .get("http://localhost:5000/api/post", { withCredentials: true })
        .then((postData) => {
          dispatch(addPosts(postData.data.data));
          console.log("kya ho raha hai", postData);
        })
        .catch((err) => {
          console.log("Post getting ERROR", err);
        });
    }
    fetchPosts();
  }, [status]);

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
