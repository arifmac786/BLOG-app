import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import Logout from "./Logout";
import { Link } from "react-router-dom";

const ProfileLeftMenu = () => {
  const menuItems = [
    { name: "Home", icon: <GrHomeRounded />, url: "/home" },
    { name: "Search", icon: <CiSearch />, url: "/home" },
    { name: "Explore", icon: <MdOutlineExplore />, url: "/home" },
    { name: "Reels", icon: <BsCameraReels />, url: "/home" },
    { name: "Messages", icon: <FiMessageSquare />, url: "/home" },
    { name: "Notification", icon: <IoMdHeartEmpty />, url: "/home" },
    { name: "Create", icon: <IoMdCreate />, url: "/create" },
    { name: "Profile", icon: <CgProfile />, url: "/home" },
  ];

  return (
    <div className="w-[25%] hidden lg:block h-screen fixed border border-r-2 border-gray-500/10  ">
      <div className="w-full px-18 pt-14 flex items-end gap-1">
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
      <div className="px-18 pt-16 flex flex-col gap-10">
        {menuItems.map((elem) => (
          <Link
            key={elem.name}
            className="flex items-center gap-4 cursor-pointer"
            to={elem.url}
          >
            <p className="text-2xl">{elem.icon}</p>
            <p className="text-2xl">{elem.name}</p>
          </Link>
        ))}
        <Logout />
      </div>
    </div>
  );
};

export default ProfileLeftMenu;
