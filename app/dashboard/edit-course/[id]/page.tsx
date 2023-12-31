"use client";
import { Heading } from "@/app/utils/Heading";
import AdminSidebar from "@/components/Admin/AdminSidebar";
import CreateCourse from "@/components/Admin/Courses/CreateCourse";
import EditCourse from "@/components/Admin/Courses/EditCourse";
import { AdminProtected } from "@/hooks/useAdminProtected";
import { FC } from "react";

type Props = {};

const page = ({params}:any) => {
    const id = params.id
  return (
    <AdminProtected>
      <Heading
        title={`Admin Edit Course`}
        description="The LMS Elearning Dashboard is a controll  platform that contains many professional courses to develop your skills and direct you to the labor market"
        keywords="Programming,courses,design"
      />

      <div className="flex">
        <div>
          <AdminSidebar />
        </div>
        <div className="w-full">
          <EditCourse id={id} />
        </div>
      </div>
    </AdminProtected>
  );
};

export default page;
