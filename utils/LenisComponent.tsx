"use client"
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

function LenisComponent({ children }: { children: React.ReactNode }) {
  const lenisOptions = {
    lerp: 0.1,         // Controls how smooth the scrolling is
    duration: 1.5,     // Slows down or speeds up the scrolling
    smooth: true,      // Smooth scroll for desktop (obviously)
  };

  const lenis = useLenis(({ scroll }) => {
    
  })

  return (
    <ReactLenis root options={lenisOptions}>
        { children }
    </ReactLenis>
  )
}

export default LenisComponent;