"use client"
import {FC,useState} from "react";
import { Heading } from "./utils/Heading";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

interface pageProps {

}
const Page:FC <pageProps> =  (props) => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [route, setRoute] = useState("Login")

  return (
    <div>
      <Heading title="LMS Elearning " description="The LMS Elearning is a platform that contains many professional courses to develop your skills and direct you to the labor market" keywords="Programming,courses,design" />
      <Header 
        open={open}
        setOpen={setOpen}
        activeItem={active}
        route={route}
        setRoute={setRoute}
      />
      <Hero/>
    </div>
  )
}

export default Page