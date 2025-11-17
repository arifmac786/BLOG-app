import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/authSlice";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEye, setShowEye] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/signin",
        { email, password },
        { withCredentials: true }
      );
      setEmail("");
      setPassword("");
      console.log(response.data.data);
      setLoading(false);
      dispatch(login(response.data.data));
      navigate("/");
    } catch (error) {
      console.log("Signin ERROR", error);
      setLoading(false);
      dispatch(logout());
    }
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center  ">
      <div className="w-full p-6 bg-white max-w-lg ">
        <div className="flex gap-1 items-end ">
          {" "}
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 inline rounded text-white font-black ">
            ZB
          </div>
          <h1
            className="text-3xl font-black tracking-tight 
  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 
  bg-clip-text text-transparent"
          >
            ZestBlog
          </h1>
        </div>

        <p className="text-xl font-semibold mb-4 mt-4 bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
          Login Account
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full space-y-2"
        >
          <label className="text-sm font-medium bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
            Email
          </label>

          <div className="p-[2px]  rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
            <input
              type="email"
              placeholder="Enter your username..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-300/100 text-black 
             outline-none   transition duration-200
             placeholder-gray-500"
            />
          </div>
          <label className="text-sm font-medium bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
            Password
          </label>

          <div className="p-[2px] relative rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
            <input
              type={showEye ? "text" : "password"}
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-300/100 text-black 
             outline-none   transition duration-200
             placeholder-gray-500"
            />
            <div
              className="absolute right-4 top-3 cursor-pointer"
              onClick={() => setShowEye((prev) => !prev)}
            >
              {showEye ? <FaEye size={25} /> : <FaEyeSlash size={25} />}
            </div>
          </div>
          <p
            className="text-right text-sm text-gray-400 cursor-pointer 
   hover:underline hover:text-purple-400 transition-all duration-200"
          >
            Forgot Password?
          </p>

          <button
            className="px-6 cursor-pointer mt-6 py-3 rounded-xl font-semibold text-white 
  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
  hover:opacity-90 transition-all duration-200 shadow-lg"
          >
            {loading ? <ClipLoader size={25} color="white" /> : "Login"}
          </button>
          <p className="text-sm text-center text-gray-400">
            Create new account?
            <Link
              to="/signup"
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
