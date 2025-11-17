import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const ProtectedRoutes = ({ children }) => {
  const userData = useSelector((state) => state.user.userData);

  console.log("iuyiu", userData);

  if (!userData) {
    return <Navigate to={"/signin"} />;
  }

  return <div> {children}</div>;
};
hello;
export default ProtectedRoutes;
