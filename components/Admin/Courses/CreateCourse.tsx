"use client"
import { useState } from "react"
import DashboardHeader from "../DashboardHeader"
import CreateCourseSteper from "./CreateCourseSteper"
import CourseInformation from "./CourseInformation"

type Props = {}

const CreateCourse = (props: Props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [courseInfo, setCourseInfo] = useState({
    title: "",
    description: "",
    price: 0,
    discount: 0,
    tags: "",
    level: "",
    thumbnail: "",
    demoUrl: "",
  })
  const [benifits, setBenifits] = useState([{title:""}])
  const [requirements, setRequirements] = useState([{title:""}])
  const [courseContent, setCourseContent] = useState([{
    title:"",
    videoUrl:"",
    description:"",
    videoSection:"",
    links:[{title:"",url:""}]
    ,suggestions:""
  }])
  const [courseData, setCourseData] = useState({})
  return (
    <div>
         <DashboardHeader/>
         <div className="mt-1 relative right-0 py-7 px-7 lg:px-11 w-full  bg-white dark:bg-primary text-primary dark:text-white flex items-center flex-col z-30">
            <CreateCourseSteper activeStep={activeStep}/>
            {
              activeStep === 0 && <CourseInformation courseInfo={courseInfo} setCourseInfo={setCourseInfo} active={activeStep} setActive={setActiveStep}/>
            }
         </div>
    </div>
  )
}

export default CreateCourse