"use client"
import { FC, useEffect, useState } from "react"
import DashboardHeader from "../DashboardHeader"
import CreateCourseSteper from "./CreateCourseSteper"
import CourseInformation from "./CourseInformation"
import CourseOptionsData from "./CourseOptionsData"
import CourseContent from "./CourseContent"
import CoursePreview from "./CoursePreview"
import { useGetAdminCoursesQuery, useUpdateCourseMutation } from "@/Redux/Features/Courses/CoursesApi"
import toast from "react-hot-toast"

type Props = {
    id:string;
}

const EditCourse:FC<Props> = ({id}) => {
  const [thumbnail,setThumbnail] = useState("")
  const [updateCourse,{isLoading,isSuccess,error}] = useUpdateCourseMutation({})
    const {  data, refetch } = useGetAdminCoursesQuery(
        {},
        { refetchOnMountOrArgChange: true }
      ); 
      
    // find course by id
    const course = data?.courses.find((course:any) => course._id === id);  
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

//   useEffect to set data in states
    useEffect(() => {
        if(course){
            
            setCourseInfo({
                title: course.title,
                description: course.description,
                price: course.price,
                discount: course?.discount,
                tags: course.tags.join(","),
                level: course.level,
                thumbnail: course?.thumbnail?.url,
                demoUrl: course.demoUrl,
            })
            setBenifits(course.benifits)
            setRequirements(course.requirements)
            setCourseContent(course.courseData)
        }
    }, [course])

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
      thumbnail: thumbnail !=="" ? thumbnail : courseInfo.thumbnail,
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

      updateCourse({id:id,data})
    }
  }
  useEffect(() => {
    if(isSuccess ){
      toast.success(`Course updated successfully`)
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message || "Course update field");
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
              activeStep === 0 && <CourseInformation courseInfo={courseInfo} setCourseInfo={setCourseInfo} active={activeStep} setActive={setActiveStep} isEdit={true} setThumbnail={setThumbnail}/>
            }
            {
              activeStep === 1 && <CourseOptionsData benifits={benifits} setBenifits={setBenifits} requirements={requirements} setRequirements={setRequirements} active={activeStep} setActive={setActiveStep}/>
            }
            {
              activeStep === 2 && <CourseContent courseContent={courseContent} setCourseContent={setCourseContent} active={activeStep} setActive={setActiveStep} hundelSubmit={hundelSubmit} />
            }
            {
              activeStep === 3 && <CoursePreview courseData={courseData} hundelCourseCreation={hundelCourseCreation} active={activeStep} setActive={setActiveStep} isEdit={true}  />
            }
         </div>
    </div>
  )
}

export default EditCourse