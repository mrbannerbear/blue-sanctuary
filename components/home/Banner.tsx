"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-scroll";
import HomeBannerVideo from '@/components/home/HomeBannerVideo';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import FadeSection from '../shared/OpacityWrapper';


gsap.registerPlugin(useGSAP);

const Banner = () => {

    const heading = useRef<HTMLHeadingElement>(null);
    const bannerImg = useRef<HTMLHeadingElement>(null);
    const subHeading = useRef<HTMLHeadingElement>(null);
    const arrowBtn = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const tl = gsap.timeline( 
            {
                defaults: {
                    opacity: 0, ease: "power2.out", duration: 2, y: 30
                }
            }
        );
          tl.from(heading.current, { delay: 2 })
          .from(subHeading.current, { delay: 2 }, 0)
          .from(arrowBtn.current, { delay: 3 }, 0)

          gsap.from( ".homeBannerAsset",
            {
              scale: 1.2,
              duration: 15
            }
          )
      }, []);

    return (
      <FadeSection>
        <section
        className="hero h-screen relative overflow-hidden"
        >
        <div className="hero-overlay bg-opacity-30 z-[1]"></div>
        <HomeBannerVideo ref={bannerImg}/>
        <div className="hero-content text-center z-[2]">
          <div>
            <h1 className="mb-5 text-[2rem] lg:text-5xl font-bold" ref={heading}>Beneath the Blue</h1>
            <h2 className="mb-5 font-sans lg:text-[1.5rem]" ref={subHeading}>
                Every life in the ocean is a story worth saving. Be part of the change.
            </h2>
          </div>
        </div>
        <Link to='Crisis' smooth duration={1000}>
          <button className='absolute left-1/2 bottom-10 text-3xl z-[2]' ref={arrowBtn}> 
            <MdKeyboardDoubleArrowDown />
          </button>
        </Link>
      </section>
      </FadeSection>
    );
};

export default Banner;