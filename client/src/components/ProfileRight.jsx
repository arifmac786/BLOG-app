import React from "react";
import ProfileContent from "./ProfileContent";
import ProfileRightTop from "./ProfileRightTop";
import ProfileRightBottom from "./ProfileRightBottom";

const ProfileRight = () => {
  return (
    <div className="lg:w-[75%] w-full lg:ml-[25%] min-h-screen p-2  sm:p-8 sm:mx-8 overflow-auto">
      <ProfileRightTop />
      <ProfileRightBottom />
    </div>
  );
};

export default ProfileRight;
