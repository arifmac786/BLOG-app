import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import ProfileLeftMenu from "../components/ProfileLeftMenu";
import ProfileRight from "../components/ProfileRight";
import ProfileContent from "../components/ProfileContent";

const Profile = () => {
  return (
    <div className="w-full  min-h-screen flex  ">
      <ProfileLeftMenu />
      <ProfileRight />
    </div>
  );
};

export default Profile;
