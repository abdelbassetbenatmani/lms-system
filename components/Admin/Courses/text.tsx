"use client";
import { useState } from "react";
import toast from "react-hot-toast";

type Props = {};

const text = ({
  courseContentData,
  setCourseContentData,
  active,
  setActive,
  hundelSubmit: hundelSubmitCourse,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(
    Array(courseContentData.length).fill(false)
  );

  const [activeSection, setActiveSection] = useState(1);
  const hundelSubmit = (e: any) => {
    e.preventDefault();
  };
  const handleCollapseToggle = (index: number) => {
    const updatedCollasped = [...isCollapsed];
    updatedCollasped[index] = !updatedCollasped[index];
    setIsCollapsed(updatedCollasped);
  };
  const handleRemoveLink = (index: number, linkIndex: number) => {
    const updatedData = [...courseContentData];
    updatedData[index].links.splice(linkIndex, 1);
    setCourseContentData(updatedData);
  };
  const handleAddLink = (index: number) =>{
  const updatedData = [...courseContentData];
  updatedData[index].links.push({ title: "", url: ""});
  setCourseContentData(updatedData);
  }



  const newContentHandler = (item: any) => {
    if (
    item.title === "" ||
    item.description ==="" ||
    item.videoUrl === "" ||
    item.links[0].title === "" ||
    item.links[0].url=== ""
    ) {
    toast.error("Please fill all the fields first!");
    } else {
    let newVideoSection = "";
    if (courseContentData. length > 0) {
    const lastVideoSection =
    courseContentData [courseContentData.length - 1].videoSection
    // use the last videoSection if available, else user user input
    if (lastVideoSection) {
    newVideoSection = lastVideoSection;
    }
    }
    const newContent = {
    videoUrl: "",
    title: "",
    description: "",
    videoSection: newVideoSection,
    links: [{ title: "", url: "" }],
    };
    setCourseContentData([...courseContentData, newContent]);
    }
    };




    const addNewSection =  () => {
        if (
        courseContentData[courseContentData.length - 1].title === "" ||
        courseContentData[courseContentData.length - 1].description === "" ||
        courseContentData[courseContentData.length - 1].videoUrl === "" ||
        courseContentData[courseContentData.length - 1].links[0].title === "" ||
        courseContentData[courseContentData.length - 1].links[0].url === ""
        ) {
        toast.error("Please fill all the fields first!");
        } else {
        setActiveSection(activeSection + 1);
        const newContent = {
        videoUrl: "",
        title: "",
        description: "",
        videoSection: `Untitled Section ${activeSection}`,
        links: [{title: "", url: "" }],
        };
        setCourseContentData([...courseContentData, newContent]);
        }
        };
        const prevButton = () => {
        setActive(active - 1);
    }

    const handelOptions = ()=>{
        if (
            courseContentData[courseContentData.length - 1].title === "" ||
            courseContentData[courseContentData.length - 1].description === "" ||
            courseContentData[courseContentData.length - 1].videoUrl === "" ||
            courseContentData[courseContentData.length - 1].links[0].title === "" ||
            courseContentData[courseContentData.length - 1].links[0].url === ""
            ) {
            toast.error("Please fill all the fields first!");
            } else {
            setActive(active + 1);
            hundelSubmitCourse()
            }
    }


  return <div>text</div>;
};

export default text;
