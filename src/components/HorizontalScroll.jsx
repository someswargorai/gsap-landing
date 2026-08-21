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
    <div ref={horizontalContainerRef} className="h-[100dvh] overflow-hidden relative z-10 bg-black border-t border-white/10">
      <div className="horizontal-content flex w-max h-full">
        <section className="w-screen h-[100dvh] flex flex-col items-start justify-center px-8 md:px-32 border-r border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/[0.05] via-transparent to-transparent pointer-events-none"></div>
          <div className="max-w-3xl z-10">
            <span className="text-[#8A8F98] text-[13px] font-semibold tracking-widest uppercase mb-6 block">01 / Performance</span>
            <h2 className="text-[36px] md:text-[72px] font-medium tracking-[-0.03em] leading-[1.05] text-white">
              Render at the<br/>speed of thought.
            </h2>
            <p className="mt-8 text-xl text-[#8A8F98] leading-relaxed max-w-2xl">
              Achieve 120fps physics and photorealistic lighting directly in the browser. By leveraging our proprietary WebAssembly core, we've eliminated loading screens entirely.
            </p>
          </div>
        </section>

        <section className="w-screen h-[100dvh] flex flex-col items-start justify-center px-8 md:px-32 border-r border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none"></div>
          <div className="max-w-3xl z-10">
            <span className="text-[#8A8F98] text-[13px] font-semibold tracking-widest uppercase mb-6 block">02 / Workflow</span>
            <h2 className="text-[36px] md:text-[72px] font-medium tracking-[-0.03em] leading-[1.05] text-white">
              Visual node graphs.<br/>Code optional.
            </h2>
            <p className="mt-8 text-xl text-[#8A8F98] leading-relaxed max-w-2xl">
              Build complex logic, particle systems, and shader materials using our intuitive node editor. The engine compiles your graphs into highly optimized WebGL shaders automatically.
            </p>
          </div>
        </section>

        <section className="w-screen h-[100dvh] flex flex-col items-start justify-center px-8 md:px-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/[0.05] via-transparent to-transparent pointer-events-none"></div>
          <div className="max-w-3xl z-10">
            <span className="text-[#8A8F98] text-[13px] font-semibold tracking-widest uppercase mb-6 block">03 / Ecosystem</span>
            <h2 className="text-[36px] md:text-[72px] font-medium tracking-[-0.03em] leading-[1.05] text-white">
              Integrates seamlessly<br/>with your pipeline.
            </h2>
            <p className="mt-8 text-xl text-[#8A8F98] leading-relaxed max-w-2xl">
              Import assets instantly from Blender, Maya, and Cinema4D. Our cloud-native pipeline compresses geometry and bakes lighting without ever leaving the browser.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HorizontalScroll;
