import React from "react";
import DashboardHeader from "../DashboardHeader";
import Loader from "@/components/Loader/Loader";
import { useGetUserAnalyticsQuery } from "@/Redux/Features/Analytics/AnalyticsApi";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  Label,
  LabelList,
  Line,
  YAxis,
  AreaChart,
  Area,
  Tooltip,
  CartesianGrid
} from "recharts";
type Props = {};

const UserAnalytics = (props: Props) => {
  const { data, isLoading } = useGetUserAnalyticsQuery({});
  let usersData: any[] = [];

  data &&
    data?.users.Last12Month.forEach((user: any) => {
      usersData.push({ name: user.month, count: user.count });
    });
    console.log(usersData);
    
  return (
    <div>
      <DashboardHeader />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full h-[calc(100vh-100px)] bg-white dark:bg-primary relative p-10">
          <h1 className="text-primary dark:text-white text-center font-semibold text-2xl">
            Orders Analytics
          </h1>
          <p className="text-primary dark:text-white text-center font-semibold text-lg">
            Last 12 month data
          </p>
          <ResponsiveContainer width="90%" height="80%">
            <AreaChart
              width={500}
              height={400}
              data={usersData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="count"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default UserAnalytics;
