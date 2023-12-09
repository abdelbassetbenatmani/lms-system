"use client";
import { useGetCourseDetailsQuery } from "@/Redux/Features/Courses/CoursesApi";
import { Heading } from "@/app/utils/Heading";
import CourseDetails from "@/components/Courses/CourseDetails";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import React, { useState } from "react";

const CourseDetailsPage = ({ params }: any) => {
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const { data } = useGetCourseDetailsQuery(params.id);
  return (
    <div>
      <Heading
        title={`Course | ${data?.course.title}`}
        description="The LMS Elearning is a platform that contains many professional courses to develop your skills and direct you to the labor market"
        keywords={data?.course.tags}
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={1}
        route={route}
        setRoute={setRoute}
      />
      <CourseDetails data={data?.course} />
      <Footer />
    </div>
  );
};

export default CourseDetailsPage;
