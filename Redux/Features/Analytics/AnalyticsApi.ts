import { apiSlice } from "../Api/ApiSlice";

export const analyticsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserAnalytics: builder.query({
      query: () => ({
        url: `/analytics/users`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getCourseAnalytics: builder.query({
      query: () => ({
        url: `/analytics/courses`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getOrderAnalytics: builder.query({
      query: () => ({
        url: `/analytics/orders`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useGetCourseAnalyticsQuery,useGetOrderAnalyticsQuery,useGetUserAnalyticsQuery } = analyticsApi;
