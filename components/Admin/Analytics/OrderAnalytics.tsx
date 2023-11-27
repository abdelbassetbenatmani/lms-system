import React from "react";
import DashboardHeader from "../DashboardHeader";
import Loader from "@/components/Loader/Loader";
import { useGetOrderAnalyticsQuery } from "@/Redux/Features/Analytics/AnalyticsApi";
import {
  LineChart,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  XAxis,
  Line,
  YAxis,
} from "recharts";
const OrderAnalytics = () => {
  const { data, isLoading } = useGetOrderAnalyticsQuery({});
  let ordersData: any[] = [];

  data &&
    data?.orders.Last12Month.forEach((order: any) => {
      ordersData.push({ name: order.month, count: order.count });
    });

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
            <LineChart
              width={500}
              height={300}
              data={ordersData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default OrderAnalytics;
