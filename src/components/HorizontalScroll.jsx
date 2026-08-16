import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const horizontalContainerRef = useRef(null);

  useGSAP(() => {
    if (!horizontalContainerRef.current) return;
    
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: horizontalContainerRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
      },
    });

    timeline.to(".horizontal-content", {
      x: "-200vw",
      ease: "none"
    });
  }, []);

  return (
    <div ref={horizontalContainerRef} className="h-screen overflow-hidden relative z-10 bg-black border-t border-white/10">
      <div className="horizontal-content flex w-max h-full">
        <section className="w-screen h-screen flex flex-col items-start justify-center px-8 md:px-32 border-r border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/[0.05] via-transparent to-transparent pointer-events-none"></div>
          <div className="max-w-3xl z-10">
            <span className="text-[#8A8F98] text-[13px] font-semibold tracking-widest uppercase mb-6 block">01 / Performance</span>
            <h2 className="text-[48px] md:text-[72px] font-medium tracking-[-0.03em] leading-[1.05] text-white">
              Designed to move<br/>at the speed of thought.
            </h2>
            <p className="mt-8 text-xl text-[#8A8F98] leading-relaxed max-w-2xl">
              Interactions feel instantaneous. By leveraging a local-first architecture and background syncing, we've eliminated loading spinners entirely from the engineering workflow.
            </p>
          </div>
        </section>

        <section className="w-screen h-screen flex flex-col items-start justify-center px-8 md:px-32 border-r border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none"></div>
          <div className="max-w-3xl z-10">
            <span className="text-[#8A8F98] text-[13px] font-semibold tracking-widest uppercase mb-6 block">02 / Workflow</span>
            <h2 className="text-[48px] md:text-[72px] font-medium tracking-[-0.03em] leading-[1.05] text-white">
              Keyboard-first.<br/>Mouse optional.
            </h2>
            <p className="mt-8 text-xl text-[#8A8F98] leading-relaxed max-w-2xl">
              Navigate, command, and create entirely from your keyboard. The global command menu gives you absolute control without ever needing to reach for a mouse.
            </p>
          </div>
        </section>

        <section className="w-screen h-screen flex flex-col items-start justify-center px-8 md:px-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/[0.05] via-transparent to-transparent pointer-events-none"></div>
          <div className="max-w-3xl z-10">
            <span className="text-[#8A8F98] text-[13px] font-semibold tracking-widest uppercase mb-6 block">03 / Ecosystem</span>
            <h2 className="text-[48px] md:text-[72px] font-medium tracking-[-0.03em] leading-[1.05] text-white">
              Integrates seamlessly<br/>with your stack.
            </h2>
            <p className="mt-8 text-xl text-[#8A8F98] leading-relaxed max-w-2xl">
              Connect deeply with GitHub, Slack, Figma, and Sentry. Automate your complex workflows and keep your entire engineering ecosystem perfectly synchronized.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HorizontalScroll;
