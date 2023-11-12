"use client";
import axios from "axios";
import { FC, useState, useEffect } from "react";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl, title }) => {
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });
  useEffect(() => {
    axios
      .post(`http://localhost:8000/api/v1/course/generate-video-url`, {
        videoId: videoUrl,
      })
      .then((response) => {
        setVideoData(response.data);
      });
  }, [videoUrl]);

  return (
    <div className="mt-10 relative h-[600px]">
      {videoData.otp && videoData.playbackInfo !== "" && (
        <iframe
          src={`https://player.vdocipher.com/v2/?otp=${videoData.otp}&playbackInfo=${videoData.playbackInfo}&player=2ayKwhabNn1SYvte`}
          allowFullScreen={true}
          allow="encrypted-media;autoplay"
          style={{
            width: "90%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            margin: "auto",
          }}></iframe>
   )}
    </div>
  );
};

export default CoursePlayer;
