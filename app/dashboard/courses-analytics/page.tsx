"use client";
import { Heading } from "@/app/utils/Heading";
import AdminSidebar from "@/components/Admin/AdminSidebar";
import CourseAnalytics from "@/components/Admin/Analytics/CourseAnalytics";

import { AdminProtected } from "@/hooks/useAdminProtected";
import React from "react";
type Props = {}

const CoursesAnalyticsPage = (props: Props) => {
    return (
        <AdminProtected>
          <Heading
            title={`Admin Dashboard course Analytics`}
            description="The LMS Elearning Dashboard is a controll  platform that contains many professional courses to develop your skills and direct you to the labor market"
            keywords="Programming,courses,design"
          />
    
          <div className="flex">
            <div>
              <AdminSidebar />
            </div>
            <div className="w-full">
              <CourseAnalytics />
            </div>
          </div>
        </AdminProtected>
      );
}

export default CoursesAnalyticsPage