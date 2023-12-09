import { apiSlice } from "../Api/ApiSlice";

export const coursesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (data) => ({
        url: "/course/add-course",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
    }),
    getAllCourses: builder.query({
      query: () => ({
        url: "/course/get-courses",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getAdminCourses: builder.query({
      query: () => ({
        url: "/course/get-admin-courses",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getTopCourses: builder.query({
      query: () => ({
        url: "/course/get-top-admin-courses",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getCourseDetails: builder.query({
      query: (id) => ({
        url: `/course/get-courses/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `/course/delete-course/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),
    updateCourse: builder.mutation({
      query: ({id,data}) => ({
        url: `/course/edit-course/${id}`,
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useGetAllCoursesQuery,
  useGetAdminCoursesQuery,
  useDeleteCourseMutation,
  useUpdateCourseMutation,
  useGetTopCoursesQuery,
  useGetCourseDetailsQuery
} = coursesApi;
