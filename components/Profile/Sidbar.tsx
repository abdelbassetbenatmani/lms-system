"use client";
import { profileSidebarItems } from "@/constant";
import { FC, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import { SiCoursera } from "react-icons/si";
import { BiLogOut } from "react-icons/bi";

type Props = {
  active: number;
  setActive: (value: number) => void;
  logOutHandeler: () => void;
};

const Sidbar: FC<Props> = ({ active, setActive, logOutHandeler }) => {
  return (
    <div className="w-[62px] md:w-[240px] p-2 h-sidbar flex flex-col shadow-lg text-primary dark:text-white bg-white dark:bg-secondary">
      {profileSidebarItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-start w-full h-[58px] cursor-pointer font-Poppins text-base font-medium ${
            active === index
              ? "bg-yellow  rounded-md text-primary"
              : "text-primary dark:text-white"
          }`}
          onClick={() => setActive(index)}>
          {index === 0 && (
            <div className="w-[40px] h-[20px] ms-3">
              <AiOutlineUser size={20} />
            </div>
          )}
          {index === 1 && (
            <div className="w-[40px] h-[20px] ms-3">
              <SiCoursera size={20} />
            </div>
          )}
          {index === 2 && (
            <div className="w-[40px] h-[20px] ms-3">
              <BsShieldLock size={20} />
            </div>
          )}

          <span className="hidden md:block">{item.name}</span>
        </div>
      ))}
      <div
        className={`flex items-center justify-start w-full h-[58px] cursor-pointer font-Poppins text-lg font-medium`}
        onClick={logOutHandeler}>
        <div className="w-[40px] h-[20px] ms-3">
          <BiLogOut size={20} />
        </div>
        <span className="hidden md:block">Logout</span>
      </div>
    </div>
  );
};

export default Sidbar;
