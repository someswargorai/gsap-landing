import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top 0%",
        toggleActions: "play reverse play reverse",
      },
    });

    timeline
      .from(".about h3", {
        y: 50,
        opacity: 0,
        duration: 0.4,
      })
      .from(".about p", {
        y: 30,
        opacity: 0,
        duration: 0.3,
      })
      .from(".about button", {
        y: 20,
        opacity: 0,
        duration: 0.2,
      });
  }, []);

  return (
    <section className="sticky top-0 z-0 h-auto py-24 md:h-[100dvh] about w-full bg-white flex flex-col justify-center px-8 md:px-20 overflow-hidden">
      {/* Light theme subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/[0.03] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 md:gap-32 relative z-10">
        <div className="md:w-1/2">
          <span className="chip text-gray-500 text-[13px] font-semibold tracking-widest uppercase mb-6 block">
            About Us
          </span>
          <h2 className="text-[48px] md:text-[64px] font-medium tracking-[-0.03em] leading-[1.05] text-black">
            Pioneering the next
            <br />
            era of the web.
          </h2>
          <p className="mt-8 text-[15px] md:text-xl text-gray-600 leading-relaxed max-w-lg">
            We are a collective of rendering engineers, 3D artists, and creators obsessed
            with performance and aesthetics. Our mission is to build the engine that
            powers the immersive web, empowering you to build realities that defy expectations.
          </p>

          <div className="mt-12 flex gap-4">
            <button className="bg-black text-white px-6 py-2.5 rounded-full text-[14px] font-medium hover:bg-gray-800 transition-colors cursor-pointer">
              Join the team
            </button>
            <button className="bg-transparent border border-black/20 text-black px-6 py-2.5 rounded-full text-[14px] font-medium hover:bg-black/5 transition-colors cursor-pointer">
              Read our manifesto
            </button>
          </div>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 gap-12 pt-8 md:pt-0">
          <div className="flex flex-col gap-2">
            <h3 className="text-black text-4xl md:text-5xl font-medium tracking-tight">
              2026
            </h3>
            <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">
              Founded
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-black text-4xl md:text-5xl font-medium tracking-tight">
              $42M
            </h3>
            <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">
              Funding Raised
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-black text-4xl md:text-5xl font-medium tracking-tight">
              4
            </h3>
            <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">
              Global Offices
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-black text-4xl md:text-5xl font-medium tracking-tight">
              1.2M+
            </h3>
            <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">
              Active Users
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
