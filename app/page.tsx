"use client";
import { FC, useState } from "react";
import { Heading } from "./utils/Heading";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import LogosGrid from "@/components/Home/LogosGrid";
import Features from "@/components/Home/Features";
import FAQS from "@/components/Home/FAQS";
import ContactUs from "@/components/Home/ContactUs";
import Testimonials from "@/components/Home/Testimonials";
import Footer from "@/components/Home/Footer";
import Courses from "@/components/Home/Courses";

interface pageProps {}
const Page: FC<pageProps> = (props) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="LMS Elearning "
        description="The LMS Elearning is a platform that contains many professional courses to develop your skills and direct you to the labor market"
        keywords="Programming,courses,design"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={active}
        route={route}
        setRoute={setRoute}
      />
      <Hero />
      {/* Logo Grid */}
      <LogosGrid />

      {/* Feature Sections */}
      <Features/>

      {/* Courses Section */}
      <Courses/>

      {/* Testimonials */}
      <Testimonials/>

      {/* FAQS */}
      <FAQS/>

      {/* Contact Us */}
      <ContactUs/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Page;
