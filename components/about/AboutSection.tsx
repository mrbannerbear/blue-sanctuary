"use client";

import React, { useEffect, useRef } from "react";
import { gsap,  } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Route from "@/app/routes/Routes";

const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
//   const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // const headingRefElement = headingRef?.current
    // if (!headingRefElement) return;
    gsap.from(".aboutHeading", {
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".aboutSection",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
    })

    if (sectionRef.current) {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        paragraphsRef.current.forEach((paragraph) => {
          gsap.fromTo(
            paragraph,
            { opacity: 0 },
            {
              opacity: 1,
              y: 0,
              duration: 2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: paragraph,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <Route id="About">
        <section
        ref={sectionRef}
        className="aboutSection relative text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 gap-12"
        >
            <div
            className="lg:w-[450px] h-[400px] left-0 bg-fixed  bg-no-repeat bg-contain bg-left"
            style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1561623497-3ab314e8f8a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
            }}
            >
            </div>
            <div className="max-w-xl space-y-6">
                <h2 className="aboutHeading text-3xl "
                //  ref={headingRef}
                >
                About Us
                </h2>

                {/* Paragraphs */}
                <div>
                {[
                    "At the heart of our mission is a commitment to restoring and protecting the ocean's ecosystems. We work tirelessly to combat the challenges facing marine life and ensure a sustainable future for our planet.",
                    "Our team collaborates with scientists, researchers, and conservation experts to study oceanic trends and address critical issues like climate change, overfishing, and pollution. By leveraging scientific research and innovative solutions, we aim to drive impactful change.",
                    "Beyond the science, we engage with local communities, educators, and global organizations to raise awareness and inspire action. Together, we can protect marine biodiversity and create a healthier ocean for future generations.",
                    "Join us in shaping a future where oceans thrive and life beneath the waves flourishes.",
                ].map((text, index) => (
                    <p
                    key={index}
                    ref={(el) => {
                        if (el) paragraphsRef.current[index] = el;
                    }}
                    className="leading-relaxed text-gray-400 mb-4 font-sans"
                    >
                    {text}
                    </p>
                ))}
                </div>
            </div>
        </section>
    </Route>
  );
};

export default AboutUs;
