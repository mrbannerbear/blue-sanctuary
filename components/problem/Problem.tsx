"use client";
import Route from "@/app/routes/Routes";
import React from "react";
// import FadeSection from "../shared/OpacityWrapper";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

type problemTypes = {
  title: string;
  text: string;
  img: string;
  alt: string;
};

const problems: problemTypes[] = [
  {
    title: `The Plastic Plague`,
    text: `Over 8 million tons of plastic waste enter our oceans every year, forming massive garbage patches like the Great Pacific Garbage Patch, which is now over 1.6 million square kilometers. Sea turtles, seabirds, and marine mammals often ingest plastic, leading to starvation and death. Microplastics have been found in 70% of deep-sea fish, highlighting how this issue impacts the food chain, including humans.`,
    img: `https://images.unsplash.com/photo-1600418725276-a399595aac45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    alt: "Image of fish and plastic",
  },
  {
    title: `The Silent Death of Coral Reefs`,
    text: `About 50% of the world’s coral reefs have already been lost, and scientists estimate that over 90% could disappear by 2050 if global temperatures continue to rise. Coral bleaching, driven by warming oceans, affects biodiversity, as reefs support over 25% of marine species. Overfishing and pollution worsen the decline, threatening coastal communities that depend on reefs for food and protection.`,
    img: `https://images.unsplash.com/photo-1638905218816-01f67bc67117?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    alt: `Dead coral reef`,
  },
  {
    title: `Overfishing: Empty Oceans, Hungry Futures`,
    text: `Over 90% of global fish stocks are either fully exploited or overfished, according to the FAO. Popular species like bluefin tuna have seen population declines of over 96% in some regions. Illegal and unregulated fishing practices deplete marine biodiversity, while bycatch—the unintentional capture of non-target species—kills millions of marine animals each year.`,
    img: `https://gijn.org/wp-content/uploads/2024/09/shutterstock_2393640157-771x578.jpg`,
    alt: `Overfishing`,
  },
  {
    title: `Oil Spills: A Toxic Legacy`,
    text: `Each year, approximately 706 million gallons of oil enter the oceans from spills, runoff, and other sources. Major spills like the Deepwater Horizon disaster in 2010 released 134 million gallons into the Gulf of Mexico, devastating marine life and habitats. Oil-coated birds have a survival rate of less than 1%, while long-term effects on fish populations and coral reefs persist for decades.`,
    img: `https://media.cnn.com/api/v1/images/stellar/prod/211005125119-05-wildlife-oil-spill-file.jpg?q=w_3000,h_1687,x_0,y_0,c_fill`,
    alt: `Oil leak in ocean`,
  },
  {
    title: `Toxic Runoff: Poisoning the Seas`,
    text: `Fertilizer runoff from agriculture contributes to over 400 marine dead zones worldwide, covering a combined area larger than the United Kingdom. These zones lack oxygen, making them uninhabitable for most marine life. The Mississippi River alone delivers over 1.5 million metric tons of nitrogen pollution into the Gulf of Mexico annually, creating one of the largest dead zones on the planet.`,
    img: `https://i.guim.co.uk/img/media/9fadb8af9f9f5863e833eb5c033fb8d3e571065e/0_362_5634_3380/master/5634.jpg?width=465&dpr=1&s=none&crop=none`,
    alt: `Dead seal due to poisoning`,
  },
];

const Problem = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!container || !section) return;

    gsap.from(".problemHeading", {
      opacity: 0,
      ease: "power2.out",
      duration: 2,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        toggleActions: "play play reverse reverse"
      },
    });
    gsap.from(container, {
      opacity: 0,
      ease: "power2.out",
      delay: 2,
      duration: 2.5,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        toggleActions: "play play reverse reverse"
      },
    });

    const slides = gsap.utils.toArray(".slide");

    gsap.to(container, {
      // x: () => -(container.scrollWidth - container.offsetWidth),
      xPercent: -100 * (slides.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "5% top",
        end: `+=${container.scrollWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: (progress) =>
            Math.round(progress * (slides.length - 1)) / (slides.length - 1),
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Route id="Crisis">
      {/* <FadeSection> */}
      <section
        className="py-[15vh] overflow-hidden min-h-screen"
        ref={sectionRef}
      >
        <h2 className="problemHeading text-3xl text-center mb-12">
          The Crisis Our Oceans Face
        </h2>
        <div
          className="flex relative slidesContainer w-full"
          ref={containerRef}
        >
          {problems.map((problem, i) => (
            <div
              className="slide w-full flex flex-col md:flex-row flex-shrink-0 items-center justify-center px-6 border-2 border-white/50 h-auto py-[3vh]"
              key={i}
            >
              <div className="slide-image pr-4">
                <Image
                  height={300}
                  width={300}
                  src={problem.img}
                  alt={problem.alt}
                  className="w-96 h-96 object-cover"
                />
              </div>
              <div className="slide-text pl-4 flex flex-col justify-center w-1/2">
                <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                <p className="text-md text-gray-400">{problem.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* </FadeSection> */}
    </Route>
  );
};

export default Problem;
