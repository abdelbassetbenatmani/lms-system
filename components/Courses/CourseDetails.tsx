"use client";
import VideoPlayer from "@/app/utils/VideoPlayer";
import Image from "next/image";
import { useSelector } from "react-redux";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { PiClockLight, PiStarFill } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi";
import CourseTabs from "./CourseTabs/CourseTabs";

type Props = {
  data: any;
};

const CourseDetails = ({ data }: Props) => {
  console.log(data);

  const { user } = useSelector((state: any) => state.auth);
  const discountPercentage = Math.round(
    ((data?.price - data?.discount) / data?.price) * 100
  ).toFixed(0);

  //   check if user purchased this course
  const isPurchased = user?.courses?.find(
    (item: any) => item._id === data?._id
  );

  const handelOrder = () => {
    console.log("order");
  };

  return (
    // <div className="py-28 bg-white dark:bg-gray-900 relative mt-2 dark:mt-0">
    //   <div className="max-w-screen-2xl mx-auto px-4 md:px-8 font-Poppins">
    //     <div>
    //       <h6 className="text-primary dark:text-neutral-200 mb-3 font-medium text-2xl">
    //         {data?.categories || ""}
    //       </h6>
    //       <h1 className="text-primary dark:text-neutral-200 mb-3 font-semibold text-[42px]">
    //         {data?.title}
    //       </h1>
    //       <div className="flex justify-between items-center">
    //         <div className="flex gap-3 items-center">
    //           <div className="flex gap-2 items-center">
    //             <span className="text-primary dark:text-neutral-200">
    //               {data?.rating}
    //             </span>
    //             <span className="text-primary dark:text-neutral-200">
    //               <PiStarFill className={`text-yellow`} />
    //             </span>
    //             <span className="text-primary dark:text-neutral-200">
    //               {data?.totalHours || 0} total hours
    //             </span>
    //           </div>
    //           <span className="text-primary dark:text-neutral-200">
    //             {data?.totalLectures || 0} lectures
    //           </span>
    //         </div>
    //         <div className="flex gap-3 items-center">
    //           <span className="text-primary dark:text-neutral-200">
    //             {data?.purshased || 0} students enrolled
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="my-10">
    //       <VideoPlayer videoUrl="avatars/nrcqnq1xrphegqlg9q3n" />
    //     </div>
    //     <div>
    //       <p className="text-primary dark:text-neutral-200 mb-3 font-medium text-4xl">
    //         About this course:
    //       </p>
    //       <h6 className="text-primary dark:text-neutral-200 mb-3  text-xl">
    //         {data?.description}
    //       </h6>
    //       <div className="benifits mt-10">
    //         <label className="text-lg font-semibold font-Poppins block mb-4">
    //           What are the benifits for the students in this course?
    //         </label>
    //         {
    //           <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 ms-3">
    //             {data?.benifits?.map((item: any, idx: number) => (
    //               <li
    //                 key={idx}
    //                 className="flex gap-2 items-center text-primary dark:text-neutral-200">
    //                 <span>
    //                   <IoCheckmarkDoneCircle
    //                     size={25}
    //                     className={`text-neutral-300 mr-1`}
    //                   />
    //                 </span>
    //                 <span>{item.title}</span>
    //               </li>
    //             ))}
    //           </ul>
    //         }
    //       </div>
    //       <div className="relative h-[550px] my-14">
    //         <Image src={data?.thumbnail?.url} alt={data?.description} fill />
    //       </div>
    //       <div>
    //         <label className="text-lg font-semibold font-Poppins block mb-4">
    //           What are the requirements for the students befor starting this
    //           course?
    //         </label>
    //         {
    //           <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 ms-3">
    //             {data?.requirements?.map((item: any, idx: number) => (
    //               <li
    //                 key={idx}
    //                 className="flex gap-2 items-center text-primary dark:text-neutral-200">
    //                 <span>
    //                   <IoCheckmarkDoneCircle
    //                     size={25}
    //                     className={`text-neutral-300 mr-1`}
    //                   />
    //                 </span>
    //                 <span>{item.title}</span>
    //               </li>
    //             ))}
    //           </ul>
    //         }
    //       </div>
    //       {/* Reviews  */}
    //       <div className="my-10 flex flex-col space-y-4 ">
    //         <label className="text-lg font-semibold font-Poppins block mb-4">
    //           Course Reviews
    //         </label>
    //         {
    //           // <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 ms-3">
    //           //   {data?.reviews?.reverse().map((item: any, idx: number) => (
    //           //     <li
    //           //       key={idx}
    //           //       className="flex gap-2 items-center text-primary dark:text-neutral-200">
    //           //       <span>
    //           //         <IoCheckmarkDoneCircle
    //           //           size={25}
    //           //           className={`text-neutral-300 mr-1`}
    //           //         />
    //           //       </span>
    //           //       <span>This is amazing course</span>
    //           //       <span>4.5</span>
    //           //       {/* <span>{item.review}</span>
    //           //       <span>{item.rating}</span> */}
    //           //     </li>
    //           //   ))}
    //           // </ul>
    //         }
    //         <div className="flex gap-x-3 border-b border-neutral-600 pb-4">
    //           <div className="w-10 h-10 rounded-full bg-yellow border border-white"></div>
    //           <div className="flex flex-col">
    //             <div className="flex items-center">
    //               <span className="text-primary dark:text-neutral-200 mr-4">
    //                 Ahmed Ali
    //               </span>
    //               <span className="text-primary dark:text-neutral-200">
    //                 4.5
    //               </span>
    //               <span className="text-primary dark:text-neutral-200">
    //                 <PiStarFill className={`text-yellow`} />
    //               </span>
    //             </div>
    //             <span className="text-primary dark:text-neutral-200">
    //               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //               Eius, modi!
    //             </span>
    //           </div>
    //         </div>
    //         <div className="flex gap-x-3 border-b border-neutral-600 pb-4">
    //           <div className="w-10 h-10 rounded-full bg-yellow border border-white"></div>
    //           <div className="flex flex-col">
    //             <div className="flex items-center">
    //               <span className="text-primary dark:text-neutral-200 mr-4">
    //                 Ahmed Ali
    //               </span>
    //               <span className="text-primary dark:text-neutral-200">
    //                 4.5
    //               </span>
    //               <span className="text-primary dark:text-neutral-200">
    //                 <PiStarFill className={`text-yellow`} />
    //               </span>
    //             </div>
    //             <span className="text-primary dark:text-neutral-200">
    //               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //               Eius, modi!
    //             </span>
    //           </div>
    //         </div>
    //         <div className="flex gap-x-3 border-b border-neutral-600 pb-4">
    //           <div className="w-10 h-10 rounded-full bg-yellow border border-white"></div>
    //           <div className="flex flex-col">
    //             <div className="flex items-center">
    //               <span className="text-primary dark:text-neutral-200 mr-4">
    //                 Ahmed Ali
    //               </span>
    //               <span className="text-primary dark:text-neutral-200">
    //                 4.5
    //               </span>
    //               <span className="text-primary dark:text-neutral-200">
    //                 <PiStarFill className={`text-yellow`} />
    //               </span>
    //             </div>
    //             <span className="text-primary dark:text-neutral-200">
    //               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //               Eius, modi!
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //       {/* Price show */}
    //       <div className="flex justify-between items-center w-full md:w-[40%] h-52 rounded-md bg-yellow text-primary p-4 mx-auto">
    //         <span className="text-xl font-semibold font-Poppins">
    //           ${data?.price}
    //         </span>
    //         <span className="text-xl font-semibold font-Poppins">
    //           {discountPercentage}% off
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="py-28 bg-white dark:bg-gray-900 relative mt-2 dark:mt-0">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 font-Poppins">
        <div className="flex justify-between items-center flex-col lg:flex-row gap-6">
          <div className="content">
            <span className="px-4 py-2 rounded-full dark:bg-yellow/10 bg-primary text-yellow text-sm font-semibold">
              {data?.categories || "categories"}
            </span>
            <h1 className="text-4xl font-semibold mt-4">{data?.title}</h1>
            <p className="text-primary/75 dark:text-white/60 py-5">
              {data?.description}
            </p>
            <div className="flex gap-x-4 items-center mt-4">
              <div className="flex gap-x-2">
                <HiOutlineUsers size={20} />
                <span className="text-primary dark:text-neutral-200">
                  {data?.purshased || 0} students
                </span>
              </div>
              <div className="flex gap-x-2">
                <PiClockLight size={20} />
                <span className="text-primary dark:text-neutral-200">
                  {data?.purshased || 0} hr
                </span>
              </div>
              <div className="flex gap-x-2">
                <PiStarFill size={20} />
                <span className="text-primary dark:text-neutral-200">
                  {data?.rating} stars
                </span>
              </div>
            </div>
            {isPurchased ? (
              <button className="bg-yellow px-6 md:px-24 py-3.5 my-6 rounded-md text-primary font-medium text-base duration-300 hover:text-yellow hover:border hover:border-yellow hover:bg-primary cursor-pointer">
                Accsses course
              </button>
            ) : (
              <button className="bg-yellow px-6 md:px-24 py-3.5 my-6 rounded-md text-primary font-medium text-base duration-300 hover:text-yellow hover:border hover:border-yellow hover:bg-primary cursor-pointer">
                Enroll Now
              </button>
            )}
          </div>
          <div className="imageurl w-full  lg:w-[832px] h-[350px] relative">
            <Image
              src={data?.thumbnail?.url}
              alt={data?.description}
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <CourseTabs data={data} />
      </div>
    </div>
  );
};

export default CourseDetails;
