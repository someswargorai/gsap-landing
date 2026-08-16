import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const fullText = "Design is a powerful driver of marketing performance. Some rush in with a clunky landing page, others obsess over details for weeks. We strike the balance crafting a design culture that’s sharp, efficient, and built to perform. Effective design solves real problems whether it’s enhancing perceived value, boosting conversions, clarifying a brand message, or adapting to a new market. To achieve this, businesses need seasoned designers who grasp both their vision and the evolving landscape they operate in.";

const words = fullText.split(" ");

export default function Blog() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.to(".reveal-word", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%", 
        end: "bottom 40%", 
        scrub: true, 
      },
      color: "#FFFFFF", 
      stagger: 0.1, 
      ease: "none",
    });

  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#000000] py-32 md:py-48 px-8 md:px-20 relative overflow-hidden border-t border-white/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <span className="text-[#8A8F98] text-[13px] font-semibold tracking-widest uppercase mb-12 block">
          Our Philosophy
        </span>

        <p className="text-[32px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.03em] font-medium">
          {words.map((word, index) => (
            <span 
              key={index} 
              className="reveal-word text-[#8A8F98] transition-colors duration-300"
            >
              {word}{" "}
            </span>
          ))}
        </p>

        <div className="mt-20">
          <button className="bg-white text-black px-8 py-3.5 rounded-full text-[15px] font-semibold tracking-wide hover:bg-[#F2F2F2] transition-transform hover:scale-105 cursor-pointer">
            Read our manifesto
          </button>
        </div>
      </div>
    </section>
  );
}
