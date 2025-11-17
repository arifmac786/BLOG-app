import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { FaImagePortrait } from "react-icons/fa6";
import axios from "axios";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState(null);

  let obj = {
    name,
    username,
    email,
    password,
    file,
  };
  // const handleFile = (e) => {
  //   console.log(e.target.files[0]);
  //   setFile(e.target.files[0].name);
  //   const url = URL.createObjectURL(file);
  //   console.log(url);
  //   setPreview(url);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(obj, "hjk");
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center shadow border">
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
        <p className="text-lg sm:text-xl text-gray-500/90 mt-2 mb-4">
          Your space to share stories, ideas, and inspiration — with simplicity
          and style.
        </p>
        <p className="text-xl font-semibold mb-4 bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
          Create your Account
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full space-y-2"
        >
          <div className="p-1    flex flex-col gap-2 items-center ">
            <img
              src={preview}
              className="w-[130px] h-[130px] border border-gray-900/20 object-cover object-center rounded-full"
              alt=""
            />
            <input
              type="file"
              className="border border-gray-900/20 px-2 py-3 rounded-xl"
              onChange={handleFile}
            />
          </div>
          <label className="text-sm font-medium bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
            Name
          </label>

          <div className="p-[2px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
            <input
              type="text"
              placeholder="Enter your username..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-300/100 text-white 
             outline-none focus:bg-gray-900 transition duration-200
             placeholder-gray-500"
            />
          </div>
          <label className="text-sm font-medium bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
            Username
          </label>

          <div className="p-[2px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
            <input
              type="text"
              placeholder="Enter your username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-300/100 text-white 
             outline-none focus:bg-gray-900 transition duration-200
             placeholder-gray-500"
            />
          </div>
          <label className="text-sm font-medium bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
            Email
          </label>

          <div className="p-[2px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
            <input
              type="text"
              placeholder="Enter your username..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-300/100 text-white 
             outline-none focus:bg-gray-900 transition duration-200
             placeholder-gray-500"
            />
          </div>
          <label className="text-sm font-medium bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
            Password
          </label>

          <div className="p-[2px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
            <input
              type="text"
              placeholder="Enter your username..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-300/100 text-white 
             outline-none focus:bg-gray-900 transition duration-200
             placeholder-gray-500"
            />
          </div>
          <button
            className="px-6 cursor-pointer mt-6 py-3 rounded-xl font-semibold text-white 
  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
  hover:opacity-90 transition-all duration-200 shadow-lg"
          >
            Sign Up
          </button>
          <p className="text-sm text-center text-gray-400">
            Already have an account?
            <Link
              to="/signin"
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
