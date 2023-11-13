import { apiSlice } from "../Api/ApiSlice";

export const coursesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: ( data ) => ({
        url: "/course/add-course",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
    }),
    getAdminCourses: builder.query({
      query: () => ({
        url: "/course/get-admin-courses",
        method: "GET",
        credentials: "include" as const,
      }),
    })

  }),
});

export const { useCreateCourseMutation,useGetAdminCoursesQuery } = coursesApi;