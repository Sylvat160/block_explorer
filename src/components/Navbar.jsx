import React, { useState, useEffect } from "react";
import { gas, ethPurple, xplorer, alchemySvg } from "../assets";
import { navLinks } from "../constants";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { ethPrice, gasPrice, dailyPercentage } = useGlobalContext();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("Home");
  return (
    <div className="bg-[#111A2E]">
      <div className=" p-2 flex justify-between content-center border-b border-gray-500">
        <div className="flex h-auto  items-center justify-around text-sm font-medium">
          <p className=" text-gray-400">ETH Price :</p>

          <p className="text-[#2a71ff] pr-1">
            ${ethPrice}{" "}
            <span
              className={`${
                dailyPercentage >= 0 ? "text-green-400" : "text-red-500"
              }`}
            >
              ({parseFloat(dailyPercentage.toFixed(2))}%)
            </span>
          </p>

          <div className="flex">
            <img src={gas} alt="gas" className=" pr-1" />
            <p className="pr-1 text-gray-500">Gas :</p>
            <span className="text-[#2a71ff]"> {gasPrice} Gwei</span>
          </div>
        </div>

        <div className="flex m-1">
          <div className=" ml-2 cursor-pointer rounded-lg border border-secondaryBgLight bg-primaryBgLight p-2.5 px-3.5 dark:border-secondaryBgDark dark:bg-primaryBgDark">
            <img src={ethPurple} alt="eth" className=" w-3" />
          </div>
        </div>
      </div>
      <div className=" p-2 flex justify-between content-center border-b border-gray-500">
        <div className="flex h-auto  items-center justify-around text-sm font-medium">
          <a href="/">
            <img src={xplorer} alt="xplorer" className=" w-10" />
          </a>
          <p className="pl-2 font-medium text-lg text-gray-400">X-plorer</p>
        </div>

        <div className="flex flex-row items-center ">
          <ul className="flex flex-row">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${
                  isActive === link.name && "text-[#2a71ff]"
                } cursor-pointer`}
                onClick={() => {
                  setIsActive(link.name);
                  navigate(link.link);
                }}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
