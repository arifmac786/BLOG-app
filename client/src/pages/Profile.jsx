import React, { useState } from "react";
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
import MenuForSm from "../components/MenuForSm";
import { IoMdMenu } from "react-icons/io";

const Profile = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = (e) => {
    e.preventDefault();
    console.log("click");
  };
  return (
    <div className="w-full  min-h-screen flex  ">
      <div
        className="lg:hidden w-full absolute top-5 right-5 "
        onClick={handleMenuToggle}
      >
        {showMenu ? (
          <MenuForSm handleMenuToggle={handleMenuToggle} />
        ) : (
          <IoMdMenu onClick={handleMenuToggle} size={30} />
        )}
      </div>

      <ProfileLeftMenu />
      <ProfileRight />
    </div>
  );
};

export default Profile;
