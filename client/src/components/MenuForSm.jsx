import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
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

const MenuForSm = ({ handleMenuToggle }) => {
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
    <div className="w-full h-screen bg-[#96878749]    fixed">
      <div className="h-screen w-full sm:w-1/2 pl-19 absolute pt-7  right-0  bg-white">
        <div className="  flex justify-end pr-5">
          <RxCross1 onClick={handleMenuToggle} size={35} />
        </div>
        <div className="  flex flex-col gap-5">
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
    </div>
  );
};

export default MenuForSm;
