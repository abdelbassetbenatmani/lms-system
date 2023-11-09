"use client"
import { AdminProtected } from "@/hooks/useAdminProtected";
import { FC } from "react";
import { Heading } from "../utils/Heading";
import AdminSidebar from "@/components/Admin/AdminSidebar";

type Props = {};

const page = (props: Props) => {
  return (
    <AdminProtected>
      <Heading
        title={`Admin Dashboard`}
        description="The LMS Elearning Dashboard is a controll  platform that contains many professional courses to develop your skills and direct you to the labor market"
        keywords="Programming,courses,design"
      />

      <div className="flex">
        <AdminSidebar />
      </div>
    </AdminProtected>
  );
};

export default page;
