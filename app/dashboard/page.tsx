"use client"
import { AdminProtected } from "@/hooks/useAdminProtected";
import { FC } from "react";
import { Heading } from "../utils/Heading";
import AdminSidebar from "@/components/Admin/AdminSidebar";
import DashboardHero from "@/components/Admin/DashboardHero";

type Props = {};

const page = (props: Props) => {
  return (
    <AdminProtected>
      <Heading
        title={`Admin Dashboard`}
        description="The LMS Elearning Dashboard is a controll  platform that contains many professional courses to develop your skills and direct you to the labor market"
        keywords="Programming,courses,design"
      />

      <div className="flex bg-primary">
        <div >
        <AdminSidebar />
        </div>
        <div className="w-full">
          <DashboardHero/>
        </div>
      </div>
    </AdminProtected>
  );
};

export default page;
