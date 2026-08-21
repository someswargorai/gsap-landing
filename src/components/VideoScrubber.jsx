import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const VideoScrubber = ({ videoSrc, overlays }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [activeOverlayIndex, setActiveOverlayIndex] = useState(-1);

  useGSAP(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container, 
        start: "top top", 
        end: "+=4000",
        scrub: 1, 
        pin: true,
      },
    });

    const addAnimation = () => {
      if (!video.duration) return;

      const timeObj = { currentTime: 0 };
      let lastIndex = -1;

      timeline.to(timeObj, {
        currentTime: video.duration,
        ease: "none",
        onUpdate: () => {
          if (video) video.currentTime = timeObj.currentTime;

          const time = timeObj.currentTime;
          
          const newIndex = overlays.findIndex(
            (item) => time >= item.start && time < item.end
          );

          if (newIndex !== lastIndex) {
            lastIndex = newIndex;
            setActiveOverlayIndex(newIndex);
          }
        },
      });
      ScrollTrigger.refresh();
    };

    if (video.readyState >= 1) {
      addAnimation();
    } else {
      video.addEventListener("loadedmetadata", addAnimation);
    }

    return () => {
      video.removeEventListener("loadedmetadata", addAnimation);
      timeline.kill();
    };
  }, [videoSrc, overlays]);

  return (
    <div ref={containerRef} className="relative h-[100dvh] w-full bg-[#000000]">
      <video
        ref={videoRef}
        className="w-full h-full object-cover opacity-60 mix-blend-screen"
        muted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-0"></div>

      {overlays.map((overlay, index) => {
        const isActive = activeOverlayIndex === index;
        return (
          <div
            key={index}
            className={`absolute inset-0 flex transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isActive ? "opacity-100 scale-100 blur-none translate-y-0" : "opacity-0 scale-95 blur-sm translate-y-6 pointer-events-none"
            } items-center justify-start text-left px-8 md:px-20 max-w-7xl mx-auto w-full`}
          >
            <div className="flex flex-col w-full">
              <h1 className="text-[48px] md:text-[68px] lg:text-[80px] leading-[1.05] font-medium tracking-[-0.03em] text-white whitespace-pre-line drop-shadow-sm">
                {overlay.title}
              </h1>
              
              <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between w-full max-w-[850px] gap-6">
                <p className="text-[18px] md:text-[21px] font-medium text-[#8A8F98] leading-[1.5] max-w-[480px]">
                  {overlay.description}
                </p>
                
                <button className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#8A8F98] hover:text-white transition-colors cursor-pointer">
                  <span className="text-white">{overlay.badge}</span> {overlay.button}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoScrubber;
