import { apiSlice } from "../Api/ApiSlice";

export const invoicesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInvoices: builder.query({
      query: () => ({
        url: "/order/get-all-admin-orders",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useGetInvoicesQuery } = invoicesApi;
