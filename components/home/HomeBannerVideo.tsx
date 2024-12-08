/* eslint-disable @typescript-eslint/no-empty-object-type */
import Image from "next/image";
import React, { forwardRef } from "react";

const HomeBannerVideo = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div className="absolute w-full object-cover h-full homeBannerAsset" ref={ref}>
      {/* <video
        src="/HomeBannerVid-updated_1080.mp4"
        className="w-full h-full object-cover will-change-scroll"
        autoPlay
        muted
        playsInline
        preload="auto"
      ></video> */}
      <Image
        className="w-full h-full"
        alt="Image of a whale"
        height={1000}
        width={1000}
        src="https://images.unsplash.com/photo-1602587557695-9fa83da489c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
});

// Required to set the display name for better debugging
HomeBannerVideo.displayName = "HomeBannerVideo";

export default HomeBannerVideo;
