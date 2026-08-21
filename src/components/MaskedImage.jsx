import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const starSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,5 61,38 95,38 67,58 78,92 50,72 22,92 33,58 5,38 39,38" fill="black" /></svg>`;
const encodedStar = `data:image/svg+xml,${encodeURIComponent(starSvg)}`;

function MaskedImage() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", 
        // We pin it for 3500px total! 
        // 2500px for the zoom animation + 1000px to hold it on screen while the next section covers it!
        end: "+=3500", 
        scrub: 1,
        pin: true,
        // pinSpacing: false allows the next section to slide UP over this one!
        pinSpacing: false, 
      }
    });

    // 1. Zoom animation (takes up 2.5 proportions of the timeline, equal to 2500px of scroll)
    tl.fromTo(imageRef.current, 
      {
        maskSize: "0vh",
        WebkitMaskSize: "0vh",
        scale: 1.2,
      },
      {
        maskSize: "5000vh",
        WebkitMaskSize: "5000vh",
        scale: 1,
        duration: 2.5,
        ease: "power2.inOut", 
      }
    )
    // 2. Dummy tween (takes up 1.0 proportion of the timeline, equal to 1000px of scroll)
    // This forces the image to hold perfectly still while the next section is sliding up over it!
    .to(imageRef.current, { duration: 1 });
  }, []);

  return (
    // We add mb-[2500px]! This pushes the next section down by exactly the length of the zoom animation.
    // As you scroll the first 2500px, the margin scrolls away. 
    // Right when the zoom finishes, the next section reaches the screen and slides over this one!
    <div ref={containerRef} className="w-full h-[100dvh] bg-[#000000] relative overflow-hidden flex justify-center items-center z-0 mb-[2500px]">
      
      {/* The text sits in the background. As the star expands, it will cover this text! */}
      <h2 className="absolute flex flex-col items-center justify-center font-bold tracking-[-0.04em] text-center z-0 w-full px-4">
        <span className="text-[2.5rem] md:text-[5rem] lg:text-[7rem] leading-[1] text-white">
          Enter the world
        </span>
        <span className="text-[2.5rem] md:text-[5rem] lg:text-[7rem] leading-[1] bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-[-10px] md:mt-[-20px]">
          of simulation
        </span>
      </h2>

      <img
        ref={imageRef}
        src="https://images.unsplash.com/photo-1786815151687-650e337e5850?q=80&w=2000&auto=format&fit=crop"
        alt="Star shape"
        // The image is now full screen, but the mask hides everything except the star center!
        className="absolute inset-0 w-full h-full object-cover z-10"
        style={{
          maskImage: `url("${encodedStar}")`,
          WebkitMaskImage: `url("${encodedStar}")`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          // Note: Initial maskSize is controlled perfectly by GSAP above!
        }}
      />
    </div>
  );
}

export default MaskedImage;
