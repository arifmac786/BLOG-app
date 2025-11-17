import axios from "axios";
import React from "react";
import { CiLogout } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/signout",
        {},
        { withCredentials: true }
      );

      console.log(response);
      dispatch(logout());
      navigate("/signin");
    } catch (error) {
      console.log("Logout Error", error);
    }
  };

  return (
    <div
      onClick={handleLogout}
      className="flex items-center gap-4 cursor-pointer"
    >
      <p className="text-2xl text-red-500 font-black">
        <CiLogout />
      </p>
      <p className="text-2xl text-red-500">Logout</p>
    </div>
  );
};

export default Logout;
