"use client";

import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";

const FadeSection = ({ children }: { children: ReactNode }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateOpacity = () => {
      const rect = section.getBoundingClientRect();

      // Get the midpoint of the section relative to the viewport
      const rectHeight = rect.height;
      const fadeStart = ( rect.top + rectHeight ); // Point to start fading

      let opacity = 1; // Default opacity
      const viewportHeight = window.innerHeight;

      // Calculate opacity based on scroll position
      if (rect.top >= viewportHeight) {
        opacity = 0; // Fully faded when section is completely out of view
      } else if (fadeStart <= viewportHeight && fadeStart >= 0) {
        opacity = 1 - (viewportHeight - fadeStart) / viewportHeight; // Fade gradually
      } else if (rect.top < 0) {
        opacity = 0; // Fully faded when section is scrolled out of the viewport
      }

      gsap.to(section, {
        opacity: Math.max(0, Math.min(1, opacity)), // Clamp opacity between 0 and 1
        duration: 0.1, // Smooth transition
        overwrite: "auto",
      });
    };

    window.addEventListener("scroll", updateOpacity);

    return () => {
      window.removeEventListener("scroll", updateOpacity);
    };
  }, []);

  return (
    <div ref={sectionRef} className="fade-section">
      {children}
    </div>
  );
};

export default FadeSection;
