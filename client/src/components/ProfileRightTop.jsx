import React from "react";

const ProfileRightTop = () => {
  return (
    <div className="w-full h-[50vh]    border-b-2 border-gray-600/10  pt-16 flex  items-start gap-7">
      <div className="flex-none w-[270px] h-[270px] p-1   bg-gradient-to-br from-fuchsia-500 via-purple-600 to-blue-500 rounded-full overflow-hidden">
        <img
          src="download.jpeg"
          className="w-full h-full object-cover object-center rounded-full"
          alt=""
        />
      </div>
      <div className="ml-22   grow-1  ">
        <p className="text-3xl">zavian_aly_123</p>
        <div className="flex w-full items-center gap-10 text-xl mt-6">
          <div className="font-bold">271 posts</div>
          <div className="font-bold">98k followers</div>
          <div className="font-bold">12 following</div>
        </div>
        <div className="text-xl mt-4 font-semibold">Zavian Aly</div>
        <div className="text-gray-500">Artist</div>
        <div className=" w-1/2">
          Editor |<br /> Coder | traveller |<br />
          music |
        </div>
      </div>
    </div>
  );
};

export default ProfileRightTop;
