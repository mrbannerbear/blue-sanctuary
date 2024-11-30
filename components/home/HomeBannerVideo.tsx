import Image from "next/image";
import React, { ReactElement } from "react";

const HomeBannerVideo = ({ ref } : { ref : ReactElement }) => {
  return (
    <div className="absolute w-full object-cover h-full homeBannerAsset">
      {/* <video
        src="/HomeBannerVid-updated_1080.mp4"
        className="w-full h-full object-cover will-change-scroll"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      ></video> */}
      <Image 
      ref={ref}
      className="w-full h-full"
      alt="Image of a whale"
      height={1000}
      width={1000}
      src={"https://images.unsplash.com/photo-1602587557695-9fa83da489c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
    </div>
  );
};

export default HomeBannerVideo;
