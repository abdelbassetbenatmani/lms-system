"use client"
import { FC ,useState} from "react";
import Switcher from "../Switcher";
import {  Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import avatarIcon from "../../public/assets/avatar.svg";
import Image from "next/image";
type Props = {};

const DashboardHeader = (props: Props) => {
    const [open,setOpen] = useState(false)
  return (
    <div className="flex w-full justify-end items-center h-[90px] z-50 sticky top-0 right-0 pe-8 gap-4 bg-white dark:bg-primary text-primary dark:text-white shadow-xl">
      <Switcher />
      <div 
      className="cursor-pointer"
      onClick={()=>setOpen(!open)}
      >
        <Badge badgeContent={4} color="error" >
          <NotificationsIcon fontSize="medium" />
        </Badge>
      </div>
      {
            open && (
                <div className="absolute duration-300 top-[95px] right-8 z-50 w-[300px] h-[350px] bg-white dark:bg-primary rounded shadow-xl overflow-y-scroll">
                   <div className="flex gap-4 items-center py-5 px-3 border-b border-b-primary dark:border-b-white hover:bg-secondary hover:text-white cursor-pointer duration-300 rounded-t">
                   <Image alt="Notification" src={avatarIcon} width={40} height={40} className="rounded-full" />
                   <div>
                    <h6 className="font-semibold ">New question recived</h6>
                    <p className="text-sm ">Abdelbasset ask question in introduction course</p>
                    <span>5min ago</span>
                   </div>
                   </div>
                   <div className="flex gap-4 items-center py-5 px-3 border-b border-b-primary dark:border-b-white hover:bg-secondary hover:text-white cursor-pointer duration-300 rounded-t">
                   <Image alt="Notification" src={avatarIcon} width={40} height={40} className="rounded-full" />
                   <div>
                    <h6 className="font-semibold ">New question recived</h6>
                    <p className="text-sm ">Abdelbasset ask question in introduction course</p>
                    <span>5min ago</span>
                   </div>
                   </div>
                   <div className="flex gap-4 items-center py-5 px-3 border-b border-b-primary dark:border-b-white hover:bg-secondary hover:text-white cursor-pointer duration-300 rounded-t">
                   <Image alt="Notification" src={avatarIcon} width={40} height={40} className="rounded-full" />
                   <div>
                    <h6 className="font-semibold ">New question recived</h6>
                    <p className="text-sm ">Abdelbasset ask question in introduction course</p>
                    <span>5min ago</span>
                   </div>
                   </div>
                  
                </div>
            )
      }
    </div>
  );
};

export default DashboardHeader;
