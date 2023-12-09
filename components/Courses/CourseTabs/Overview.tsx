import VideoPlayer from "@/app/utils/VideoPlayer";
import React from "react";

interface OverviewProps {
  description: string;
  benifits: any;
  demoUrl: string;
}
const Overview = ({ description, benifits, demoUrl }: OverviewProps) => {
  return (
    <div className="px-4">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-bold">Description</h1>
          <p className="text-gray-500">{description}</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-bold">What you’ll learn</h1>
          <ul className="list-disc list-inside">
            {benifits?.map((item: any, idx: number) => (
              <li key={idx} className="text-gray-500">
                {item.title}
              </li>
            ))}
          </ul>
          <div className="my-10">
            <VideoPlayer videoUrl={demoUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
