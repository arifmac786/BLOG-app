import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "../redux/userSlice";
import axios from "axios";

const getCurrentUser = () => {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchedUser = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user", {
          withCredentials: true,
        });
        console.log(response.data.data);

        dispatch(addUserDetails(response.data.data));
      } catch (error) {
        console.log("User not logged i");
      }
    };
    fetchedUser();
  }, []);
};

export default getCurrentUser;
