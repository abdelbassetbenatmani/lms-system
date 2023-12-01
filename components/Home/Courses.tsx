import { useGetAllCoursesQuery } from "@/Redux/Features/Courses/CoursesApi";
import React from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  const { data } = useGetAllCoursesQuery({});
    console.log(data);
    

  return (
    <section className="py-28 bg-white dark:bg-gray-900 relative">
      <div className="max-w-screen-2xl mx-auto px-4 text-gray-600 md:px-8 font-Poppins">
        <div className="max-w-xl mx-auto space-y-3 sm:text-center">
          <h3 className="text-indigo-600 font-semibold dark:text-white">
            Courses
          </h3>
          <p className="text-gray-800 dark:text-slate-200 text-3xl font-semibold sm:text-4xl">
            Course Recommendations <br /> for You
          </p>
        </div>
        <hr className="mt-6" />
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {data?.course.slice(0, 6).map((item:any, idx:number) => (
              <CourseCard key={idx} item={item} isProfile={false} />
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}></div>
    </section>
  );
};

export default Courses;
