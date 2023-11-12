"use client";
import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
type Props = {
  videoUrl: string;
};

const VideoPlayer: FC<Props> = ({ videoUrl }) => {
  const [videoData, setVideoData] = useState("");

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        // Directly use the provided videoUrl as the API endpoint
        const response = await axios.get(
          `http://localhost:8000/api/v1/course/generate-video-url-v2/${videoUrl}`
        );
        setVideoData(response.data);
      } catch (error) {
        console.log("Error fetching video URL:", error);
      }
    };

    fetchVideoUrl();
  }, [videoUrl]);

  return (
    // <div>
    //   {videoData && (
    //     <ReactPlayer
    //       url={videoData}
    //       controls={true}
    //       width="100%"
    //       height="auto"

    //     />
    //   )}
    //   {/* <iframe
    //     src={videoData}
    //     title="Wistia Video Player"
    //     allowFullScreen={true}
    //     allow="encrypted-media;autoplay"
    //     style={{
    //       width: "90%",
    //       height: "800px",
    //       position: "absolute",
    //       top: "0",
    //       left: "0",
    //       margin: "auto",
    //     }}></iframe> */}

    // </div>
    <div className="h-[700px] relative">
      {/* <iframe
        src={`https://fast.wistia.net/embed/iframe/${videoUrl}`}
        title="Wistia Video Player"
        className="wistia_embed"
        name="wistia_embed"
        allowFullScreen={true}
        width="640"
        height="360"></iframe> */}
      <CldVideoPlayer
        width="1920"
        height="1080"
        src="avatars/nrcqnq1xrphegqlg9q3n"
        colors={{
          accent: "#ffffff",
          base: "#282938",
          text: "#ffffff",
        }}
        controlBar={{
          pictureInPictureToggle: true  
        }}
        
        playbackRates={[0.5, 1, 1.5,1.75, 2]}
        showJumpControls={true}
        fontFace="Source Serif Pro"
      />
    </div>
  );
};

export default VideoPlayer;
