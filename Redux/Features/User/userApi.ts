import { apiSlice } from "../Api/ApiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUserAvatar: builder.mutation({
      query: ( avatar ) => ({
        url: "/user/update-user-avatar",
        method: "PUT",
        body: {
          avatar
        },
        credentials: "include" as const,
      }),
    }),
    updateUserInfo: builder.mutation({
      query: ( {name} ) => ({
        url: "/user/update-user",
        method: "PUT",
        body: {
          name,
        },
        credentials: "include" as const,
      }),
    }),
    updateUserPassword: builder.mutation({
      query: ( {currentpassword,password,confirmpassword} ) => ({
        url: "/user/update-user-password",
        method: "PUT",
        body: {
          currentpassword,
          password,
          confirmpassword,
        },
        credentials: "include" as const,
      }),
    }),
    getAdminAllUsers: builder.query({
      query: () => ({
        url: "/user/get-all",
        method: "GET",
        credentials: "include" as const,
      }),
    })
  }),
});

export const { useUpdateUserAvatarMutation,useUpdateUserInfoMutation,useUpdateUserPasswordMutation,useGetAdminAllUsersQuery } = userApi;