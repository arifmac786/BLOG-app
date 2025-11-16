import React from "react";

const ProfileRightBottom = () => {
  return (
    <div className=" w-full min-h-1/2   pt-5">
      <div className="   flex w-full items-center   justify-center gap-10">
        <p className="text-xl uppercase hover:text-black text-gray-600">
          Posts
        </p>
        <p className="text-xl uppercase hover:text-black text-gray-600">tags</p>
        <p className="text-xl uppercase hover:text-black text-gray-600">reel</p>
      </div>
      <div className="main   w-full p-4 flex flex-wrap ">
        <div className="w-[20vw] h-[25vw]   p-1 ">
          <img
            src="download.jpeg"
            alt=""
            className="w-full h-full object-cover object-center "
          />
        </div>
        <div className="w-[20vw] h-[25vw]  0\ p-1 ">
          <img
            src="download.jpeg"
            alt=""
            className="w-full h-full object-cover object-center "
          />
        </div>
        <div className="w-[20vw] h-[25vw]   p-1 ">
          <img
            src="download.jpeg"
            alt=""
            className="w-full h-full object-cover object-center "
          />
        </div>
        <div className="w-[20vw] h-[25vw]   p-1 ">
          <img
            src="download.jpeg"
            alt=""
            className="w-full h-full object-cover object-center "
          />
        </div>
        <div className="w-[20vw] h-[25vw]   p-1 ">
          <img
            src="download.jpeg"
            alt=""
            className="w-full h-full object-cover object-center "
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileRightBottom;
