import React from "react";
import DashboardHeader from "../DashboardHeader";
import Loader from "@/components/Loader/Loader";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  Label,
  LabelList,
  YAxis,
} from "recharts";
import { useGetCourseAnalyticsQuery } from "@/Redux/Features/Analytics/AnalyticsApi";

type Props = {};

const CourseAnalytics = (props: Props) => {
  const { data, isLoading } = useGetCourseAnalyticsQuery({});
  let courseData: any[] = [];

  data &&
    data?.courses.Last12Month.forEach((course: any) => {
      courseData.push({ name: course.month, uv: course.count });
    });

  let minValue = 0;
  return (
    <div>
      <DashboardHeader />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full h-[calc(100vh-100px)] bg-white dark:bg-primary relative p-10">
          <h1 className="text-primary dark:text-white text-center font-semibold text-2xl">
            Courses Analytics
          </h1>
          <p className="text-primary dark:text-white text-center font-semibold text-lg">
            Last 12 month data
          </p>
          <ResponsiveContainer width="90%" height="80%">
            <BarChart width={150} height={40} data={courseData}>
              <XAxis dataKey="name">
                <Label offset={0} position="insideBottom" />
              </XAxis>
              <YAxis domain={[minValue, "auto"]} />

              <Bar dataKey="uv" fill="#8884d8">
                <LabelList dataKey="uv" position="top" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default CourseAnalytics;
