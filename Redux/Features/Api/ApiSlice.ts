import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useLogin } from "../Auth/authSlice";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  endpoints: (builder) => ({
    // Refresh Token
    refreshToken: builder.query({
      query: (data) => ({
        url: "/auth/refreshtoken",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    // load user data
    loadUser: builder.query({
      query: (data) => ({
        url: "/user/getMe",
        method: "GET",
        credentials: "include" as const,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          dispatch(
            useLogin({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useRefreshTokenQuery, useLoadUserQuery } = apiSlice;
