import React from "react";
import ProfileContent from "./ProfileContent";
import ProfileRightTop from "./ProfileRightTop";
import ProfileRightBottom from "./ProfileRightBottom";

const ProfileRight = () => {
  return (
    <div className="w-[75%] ml-[25%] min-h-screen   p-8 mx-8 overflow-auto">
      <ProfileRightTop />
      <ProfileRightBottom />
    </div>
  );
};

export default ProfileRight;
