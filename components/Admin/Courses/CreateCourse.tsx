"use client"
import { useEffect, useState } from "react"
import DashboardHeader from "../DashboardHeader"
import CreateCourseSteper from "./CreateCourseSteper"
import CourseInformation from "./CourseInformation"
import CourseOptionsData from "./CourseOptionsData"
import CourseContent from "./CourseContent"
import CoursePreview from "./CoursePreview"
import { useCreateCourseMutation } from "@/Redux/Features/Courses/CoursesApi"
import toast from "react-hot-toast"

type Props = {}

const CreateCourse = (props: Props) => {
  const [createCourse,{isLoading,error,isSuccess}]= useCreateCourseMutation()
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
    videoSection:"Untitled section",
    links:[{title:"",url:""}]
    ,suggestions:""
  }])
  const [courseData, setCourseData] = useState({})

  const hundelSubmit = async() => {
    // benifits formatted
    const benifitsFormatted = benifits.map(benifit => {
      return {
        title: benifit.title
      }
    })
    // requirements formatted
    const requirementsFormatted = requirements.map((requirement) => ({title: requirement.title}))
    // courseContent formatted
    const courseContentFormatted = courseContent.map(content => {
      return {
        title: content.title,
        videoUrl: content.videoUrl,
        description: content.description,
        videoSection: content.videoSection,
        links: content.links.map(link => {
          return {
            title: link.title,
            url: link.url
          }
        }),
        suggestions: content.suggestions
      }
    })
    // prepare course data object
    const courseData = {
      title: courseInfo.title,
      description: courseInfo.description,
      price: courseInfo.price,
      discount: courseInfo.discount,
      tags: courseInfo.tags.split(","),
      level: courseInfo.level,
      thumbnail: courseInfo.thumbnail,
      demoUrl: courseInfo.demoUrl,
      benifits: benifitsFormatted,
      requirements: requirementsFormatted,
      courseContent: courseContentFormatted
    }
    setCourseData(courseData)
  }
  const hundelCourseCreation = async() => {
    const data = courseData
    if(!isLoading){
      await createCourse(data)
    }
  }
  useEffect(() => {
    if(isSuccess ){
      toast.success(`Course created successfully`)
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message || "Course Created field");
      } else {
        console.log(error);
      }
    }
  }, [isSuccess,error,isLoading])
  return (

    <div>
         <DashboardHeader/>
         <div className="mt-1 relative right-0 py-7 px-7 lg:px-11 w-full  bg-white dark:bg-primary text-primary dark:text-white flex items-center flex-col z-30">
            <CreateCourseSteper activeStep={activeStep}/>
            {
              activeStep === 0 && <CourseInformation courseInfo={courseInfo} setCourseInfo={setCourseInfo} active={activeStep} setActive={setActiveStep}/>
            }
            {
              activeStep === 1 && <CourseOptionsData benifits={benifits} setBenifits={setBenifits} requirements={requirements} setRequirements={setRequirements} active={activeStep} setActive={setActiveStep}/>
            }
            {
              activeStep === 2 && <CourseContent courseContent={courseContent} setCourseContent={setCourseContent} active={activeStep} setActive={setActiveStep} hundelSubmit={hundelSubmit} />
            }
            {
              activeStep === 3 && <CoursePreview courseData={courseData} hundelCourseCreation={hundelCourseCreation} active={activeStep} setActive={setActiveStep}  />
            }
         </div>
    </div>
  )
}

export default CreateCourse