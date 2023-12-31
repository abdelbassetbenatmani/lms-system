"use client";
import { profileSidebarItems } from "@/constant";
import { FC } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import { SiCoursera } from "react-icons/si";
import { BiLogOut } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import Link from "next/link";

type Props = {
  active: number;
  setActive: (value: number) => void;
  logOutHandeler: () => void;
  userRole: string;
};

const Sidbar: FC<Props> = ({ active, setActive, logOutHandeler, userRole }) => {
  console.log(userRole);
  
  return (
    <div className="w-[62px] md:w-[250px] p-2 h-sidbar flex flex-col shadow-lg text-primary dark:text-white bg-white dark:bg-secondary">
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
      
         {userRole === "admin" && (
          <Link href="/dashboard" className=" flex items-center justify-start w-full h-[58px] cursor-pointer font-Poppins text-base font-medium">

             <RxDashboard size={20} className="w-[40px] h-[20px]"/>
           
             <span className="hidden md:block ms-3">Dashboard</span>
          </Link>
         )}
      
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
