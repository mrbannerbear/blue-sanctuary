"use client"
import { ReactLenis } from "@studio-freight/react-lenis";

function LenisComponent({ children }: { children: React.ReactNode }) {
  const lenisOptions = {
    lerp: 0.1,         // Controls how smooth the scrolling is
    duration: 1.5,     // Slows down or speeds up the scrolling
    smooth: true,      // Smooth scroll for desktop (obviously)
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

export default LenisComponent;