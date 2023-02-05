import React from "react";

import { AiFillHome } from "react-icons/ai";
import { MdTipsAndUpdates } from "react-icons/md";
import { HiInformationCircle } from "react-icons/hi";

import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <div className="flex sticky top-0 sm:justify-between bg-black text-white justify-between p-4 border-2 border-b-gray-300">
      {/* Letf Logo Section in phone hidden*/}
      <div className="">
        <h1 className="p-1">
          <span className="bg-red-500 pl-1">R</span>
          <span className="bg-green-500 pr-1">N</span>
        </h1>
      </div>

      <div className="flex overflow-x-auto space-x-6">
        <HeaderMenu icon={<AiFillHome />} title="HOME" path="/" />
        <HeaderMenu
          icon={<MdTipsAndUpdates />}
          title="BRODCAST"
          path="/brodcast"
        />
        <HeaderMenu
          icon={<HiInformationCircle />}
          title="ABOUT"
          path="/about"
        />
      </div>
      {/* Middle Menu section in phone its available */}
      <div className="flex space-x-3">
        <img
          src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s="
          alt=""
          className="h-8 w-8 rounded-full
          "
        />
        <p
          className="hidden sm:inline
        "
        >
          Rohit
        </p>
      </div>
      {/* Right Profile section in phone available*/}
    </div>
  );
};

export default Header;
