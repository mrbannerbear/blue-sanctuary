import React from "react";

const HomeBannerVideo = () => {
  return (
    <div className="absolute w-full h-full">
      <video
        src="/HomeBannerVid-updated_1080.mp4"
        className="w-full h-full object-cover will-change-scroll"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      ></video>
    </div>
  );
};

export default HomeBannerVideo;
