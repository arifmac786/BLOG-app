import React from "react";
import Signup from "./pages/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import getCurrentUser from "./hooks/getCurrentUser";
import ProtectedRoutes from "./ProtectedRoutes";
import { useSelector } from "react-redux";

const App = () => {
  getCurrentUser();
  const userData = useSelector((state) => state.user);
  return (
    <div className="w-full min-h-screen flex   ">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/signup"
          element={!userData ? <Signup /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signin"
          element={!userData ? <Signin /> : <Navigate to={"/"} />}
        />
      </Routes>
    </div>
  );
};

export default App;
