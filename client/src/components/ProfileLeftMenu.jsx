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

const ProfileLeftMenu = () => {
  const menuItems = [
    { name: "Home", icon: <GrHomeRounded /> },
    { name: "Search", icon: <CiSearch /> },
    { name: "Explore", icon: <MdOutlineExplore /> },
    { name: "Reels", icon: <BsCameraReels /> },
    { name: "Messages", icon: <FiMessageSquare /> },
    { name: "Notification", icon: <IoMdHeartEmpty /> },
    { name: "Create", icon: <IoMdCreate /> },
    { name: "Profile", icon: <CgProfile /> },
  ];

  return (
    <div className="w-[25%] h-screen fixed border border-r-2 border-gray-500/10  ">
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
          <div
            key={elem.name}
            className="flex items-center gap-4 cursor-pointer"
          >
            <p className="text-2xl">{elem.icon}</p>
            <p className="text-2xl">{elem.name}</p>
          </div>
        ))}
        <div className="flex items-center gap-4 cursor-pointer">
          <p className="text-2xl text-red-500 font-black">
            <CiLogout />
          </p>
          <p className="text-2xl text-red-500">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileLeftMenu;
