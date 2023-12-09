"use client";

import { RefObject, useRef, useState } from "react";
import { MdOndemandVideo } from "react-icons/md";

type Props = {
  courseData: any;
};

const CourseContent = ({ courseData }: Props) => {
  // Step 1: Sort the array based on videoSection
  courseData.sort((a: any, b: any) =>
    a.videoSection.localeCompare(b.videoSection)
  );

  // Step 2: Group the array by videoSection
  const groupedData = courseData.reduce((acc: any, obj: any) => {
    const section = obj.videoSection;
    acc[section] = acc[section] || [];
    acc[section].push(obj);
    return acc;
  }, {});

  const accordion = Object.entries(groupedData);

  const sectionEleRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  // const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = (sectionEleRef.current?.childNodes[0] as HTMLElement)
      ?.offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };
  return (
    <div className="px-4">
      <h1>Course Content</h1>
      {accordion.map(([section, items]:any,index:number) => (
        <div
          className="space-y-3 mt-5 overflow-hidden  text-primary dark:text-white"
          key={section}
          onClick={
            handleOpenAnswer
          }>
          <h4 className="cursor-pointer py-5 flex items-center justify-between text-lg text-primary dark:text-white font-medium">
            {index +1 }- {section}
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 12H4"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            )}
          </h4>
          <div
            ref={sectionEleRef}
            className="duration-300"
            style={state ? { height: answerH } : { height: "0px" }}>
            <ul>
              {items.map((item:any,i:number) => (
                <li key={item._id} className="flex items-center gap-x-4">
                   <MdOndemandVideo size={35} className="text-yellow" />
                   <div className="flex flex-col ">
                    <h3 className="text-lg font-semibold">{index+1}-{i+1}  {item.title}</h3>
                    <p className="text-gray-500">{item.videoDuration ||0} min</p>
                   </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseContent;
