import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Playground() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1500",
        pin: true,
        scrub: 1,
      },
    });
    
    timeline.to(".inner-box", {
      width: "100vw",
      maxWidth: "100vw",
      height: "100vh",
      borderRadius: 0,
      duration: 1
    });

  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen bg-[#000000] flex flex-col items-center justify-center relative z-30 overflow-hidden"
    >
      <div className="inner-box w-[90%] max-w-5xl h-[60vh] rounded-[1rem] overflow-hidden border border-white/10 relative z-10 mx-auto">
        <video
          className="w-full h-full object-cover"
          src="https://www.pexels.com/download/video/34476228/"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
}