import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiStarFill } from "react-icons/pi";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";

interface CardProps {
  item: any;
  isProfile?: boolean;
}

const CourseCard = ({ item, isProfile }: CardProps) => {
  return (
    <Link
      href={!isProfile ? `/course/${item._id}` : `/access-course/${item._id}`}
      className="relative w-full mx-auto group sm:max-w-sm shadow-lg duration-300 hover:translate-y-[-10px] transition-transform ">
      <div className="relative h-[250px]">
        <Image
          src={item.thumbnail?.url}
          loading="lazy"
          alt={item.title}
          className="w-full"
          fill
          objectFit="cover"
        />
        <div className="absolute right-3 -bottom-3 bg-primary w-16 h-6 rounded-full flex items-center justify-center gap-2 ">
          <PiStarFill className={`text-yellow`} />
          <span className="text-white font-light text-sm">{item.rating}</span>
        </div>
      </div>
      <div className="content px-4 py-3">
        {/* price  */}
        <div className="flex items-center mt-5 gap-x-4">
          <span className="text-gray-600 dark:text-gray-300 text-2xl font-medium">
            ${item.price}
          </span>
          {item.discount > 0 && (
            <span className="text-gray-600 dark:text-gray-300 text-lg">
              %{item.discount}
            </span>
          )}
        </div>
        <h3 className="text-gray-800 dark:text-slate-200 text-xl font-semibold mt-4">
          {item.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-3">
          {item.description}
        </p>
        <div className="flex items-center justify-between my-4">
          {item.categories && (
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              category: {item.categories}
            </span>
          )}
          <span className="text-primary text-xs bg-yellow rounded-full px-2 py-1">
            {item.level}
          </span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <MdOutlineSlowMotionVideo className="text-gray-600 dark:text-gray-300 text-sm" />
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              10 Videos
            </span>
          </div>
          <div className="flex items-center gap-2">
            <BsClock className="text-gray-600 dark:text-gray-300 text-sm" />
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              25 Hours
            </span>
          </div>
          {!isProfile && (
            <div className="flex items-center gap-2">
              <HiOutlineUsers className="text-gray-600 dark:text-gray-300 text-sm" />
              <span className="text-gray-600 dark:text-gray-300 text-sm">
                55 Students
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
