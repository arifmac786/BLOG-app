import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { status } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  console.log(status);

  useEffect(() => {
    if (status === true) {
      navigate("/");
    } else if (status === false) {
      navigate("/signin");
    }
  }, [status]);

  return <>{children}</>;
};

export default ProtectedRoutes;
