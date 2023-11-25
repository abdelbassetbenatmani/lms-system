import { apiSlice } from "../Api/ApiSlice";

export const layoutApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateLayout: builder.mutation({
      query: ({ type, image, title, subtitle, faq, categoies }) => ({
        url: "/layout/update",
        method: "PUT",
        body: {
          type,
          title,
          subtitle,
          image,
          faq,
          categoies,
        },
        credentials: "include" as const,
      }),
    }),
    getLayout: builder.query({
      query: (type) => ({
        url: `/layout/get/${type}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useGetLayoutQuery, useUpdateLayoutMutation } = layoutApi;
