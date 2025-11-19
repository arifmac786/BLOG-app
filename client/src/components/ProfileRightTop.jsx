import React, { useEffect } from "react";
import Logout from "./Logout";
import { useSelector } from "react-redux";

const ProfileRightTop = () => {
  const userData = useSelector((state) => state.auth.userData);
  const { posts } = useSelector((state) => state.posts);

  if (!userData) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-full  py-4    border-b-2 border-gray-600/10  pt-16 flex  items-center flex-col sm:flex-row gap-7">
      <Logout />
      <div className="flex-none w-[200px] h-[200px] p-1 sm:w-[270px] sm:h-[270px]   bg-gradient-to-br from-fuchsia-500 via-purple-600 to-blue-500 rounded-full overflow-hidden">
        <img
          src={userData?.avatar}
          className="w-full h-full object-cover object-center rounded-full"
          alt=""
        />
      </div>
      <div className="lg:ml-22 flex flex-col items-center  sm:items-start     grow-1  ">
        <p className="text-2xl sm:text-3xl">{userData?.username}</p>
        <div className="flex  items-center gap-10 sm:text-sm mt-3 md:text-xl text-sm sm:mt-6">
          <div className="font-bold">{posts.length} posts</div>
          <div className="font-bold">98k followers</div>
          <div className="font-bold">12 following</div>
        </div>
        <div className="text-xl mt-2 sm:mt-4 font-semibold">
          {userData?.name}
        </div>
        <div className="text-gray-500">Artist</div>
        <div className=" w-1/2 text-center sm:text-start">
          Editor |<br /> Coder | traveller |<br />
          music |
        </div>
      </div>
    </div>
  );
};

export default ProfileRightTop;
