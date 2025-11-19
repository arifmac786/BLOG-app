import React from "react";
import { useSelector } from "react-redux";

const ProfileRightBottom = () => {
  const { profile } = useSelector((state) => state.profile);

  return (
    <div className=" w-full       pt-5">
      <div className="   flex w-full items-center   justify-center gap-10">
        <p className="text-xl uppercase hover:text-black text-gray-600">
          Posts
        </p>
        <p className="text-xl uppercase hover:text-black text-gray-600">tags</p>
        <p className="text-xl uppercase hover:text-black text-gray-600">reel</p>
      </div>
      <div className="main   w-full p-4 mt-3 flex flex-wrap justify-center sm:justify-around gap-2  border-gray-900/10 border-t-1 ">
        {profile.postDetails.map((post) => (
          <div
            key={post._id}
            className="w-full sm:w-50 sm:h-65 lg:w-60 lg:h-75      p-1 "
          >
            <img
              src={post.postImage}
              alt={post.title}
              className="w-full h-full object-cover object-center "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileRightBottom;
