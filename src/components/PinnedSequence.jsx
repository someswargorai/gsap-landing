import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedSequence() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", 
        end: "+=5000", // Long scroll for a premium, unhurried experience
        scrub: 1,
        pin: true
      }
    });

    // STEP 1: Glass Card floats down gracefully, rotating slightly
    tl.to(".hero-card", {
      y: "35vh",
      rotateZ: 5,
      duration: 2,
      ease: "power1.inOut",
    })
    // Text of Slide 1 fades out into the background
    .to(".slide-1-text", {
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
      ease: "power2.inOut"
    }, "-=1.5")

    // STEP 2: Card swoops left, Slide 2 pulls up
    .to(".hero-card", {
      x: "-25vw",
      rotateZ: -8,
      duration: 2,
      ease: "power2.inOut",
    })
    .to(".slide-2", {
      y: "-100vh", 
      duration: 2.5,
      ease: "power3.inOut",
    }, "-=2")
    
    // Slide 2 text fades in from the right
    .fromTo(".slide-2-content", {
      opacity: 0,
      x: 50
    }, {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: "power2.out"
    }, "-=1")

    // STEP 3: Card floats down alongside the text
    .to(".hero-card", {
      y: "55vh", 
      rotateZ: -4,
      duration: 2,
      ease: "none",
    })
      
    // STEP 4: Slide 3 comes up, Card swoops center and scales up
    .to(".slide-2-content", {
      opacity: 0,
      scale: 0.9,
      duration: 1.5
    })
    .to(".slide-3", {
      y: "-200vh", 
      duration: 2.5,
      ease: "power3.inOut",
    }, "-=1.5")
    
    // Card returns to center, scales up like a hero element
    .to(".hero-card", {
      x: "0vw",
      y: "20vh", 
      scale: 1.3,
      rotateZ: 0,
      duration: 2.5,
      ease: "power2.inOut",
    }, "-=2.5")
    
    // Slide 3 blooming gradient illuminates
    .fromTo(".slide-3-glow", {
      opacity: 0,
      scale: 0.5
    }, {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "power2.out"
    }, "-=1.5")
    
    // Final text and CTA fade in
    .fromTo(".slide-3-content", {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out"
    }, "-=1");

  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full h-screen bg-[#000000] relative overflow-hidden text-white font-sans antialiased border-t border-white/10"
    >
      {/* THE HERO CARD: Premium Glassmorphism */}
      <div className="hero-card absolute top-[-10vh] left-1/2 -translate-x-1/2 w-[240px] h-[320px] md:w-[320px] md:h-[420px] rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl z-50 flex items-center justify-center overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
        {/* Subtle top glare */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        {/* Glowing inner orb */}
        <div className="absolute w-40 h-40 md:w-56 md:h-56 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/30 via-purple-500/10 to-transparent rounded-full blur-2xl"></div>
        {/* Center Tech Icon / Core */}
        <div className="w-16 h-16 md:w-20 md:h-20 border border-white/10 rounded-full flex items-center justify-center relative z-10 bg-black/20 backdrop-blur-md shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,1)]"></div>
        </div>
      </div>

      {/* SLIDE 1: The Foundation */}
      <div className="slide-1 absolute inset-0 w-full h-full flex flex-col items-center justify-center pointer-events-none z-10">
        <h2 className="slide-1-text text-center font-medium tracking-[-0.04em] text-[5rem] md:text-[8rem] lg:text-[10rem] leading-[0.9]">
          <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Build
          </span>
          <span className="block text-[#8A8F98]">faster.</span>
        </h2>
      </div>

      {/* SLIDE 2: Seamless Scaling */}
      <div className="slide-2 absolute top-[100vh] left-0 w-full h-full bg-[#000000] flex items-center justify-end px-8 md:px-24 lg:px-40 z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
        <div className="slide-2-content max-w-xl text-left w-full md:w-1/2">
          <h2 className="font-medium tracking-[-0.03em] text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1] text-white mb-6">
            Scale <br />
            <span className="text-[#8A8F98]">infinitely.</span>
          </h2>
          <p className="text-[#8A8F98] text-[18px] md:text-[22px] leading-[1.4]">
            Our architecture is designed to handle massive growth effortlessly.
            You focus on building the product, we handle the infrastructure.
          </p>
        </div>
      </div>

      {/* SLIDE 3: The Pinnacle */}
      <div className="slide-3 absolute top-[200vh] left-0 w-full h-full bg-[#000000] flex flex-col items-center justify-center z-30 shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
        {/* Blooming background gradient */}
        <div className="slide-3-glow absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/15 via-purple-600/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

        <div className="slide-3-content text-center relative z-10 mt-[35vh] md:mt-[45vh]">
          <h2 className="font-medium tracking-[-0.03em] text-[4rem] md:text-[6rem] lg:text-[8rem] leading-[0.9] text-white mb-10">
            Launch <br />
            <span className="text-[#8A8F98]">beautifully.</span>
          </h2>
          <button className="bg-white text-black px-12 py-5 rounded-full text-[16px] md:text-[18px] font-bold tracking-wide hover:bg-[#F2F2F2] transition-transform hover:scale-105 cursor-pointer">
            Start building
          </button>
        </div>
        <div className="slide-3-content text-center relative z-10 mt-[35vh] md:mt-[45vh]">
          <h2 className="font-medium tracking-[-0.03em] text-[4rem] md:text-[6rem] lg:text-[8rem] leading-[0.9] text-white mb-10">
            Launch <br />
            <span className="text-[#8A8F98]">beautifully.</span>
          </h2>
          <button className="bg-white text-black px-12 py-5 rounded-full text-[16px] md:text-[18px] font-bold tracking-wide hover:bg-[#F2F2F2] transition-transform hover:scale-105 cursor-pointer">
            Start building
          </button>
        </div>
      </div>

      <div className="slide-4 absolute top-[300vh] left-0 w-full h-full bg-[#000000] flex items-center justify-end px-8 md:px-24 lg:px-40 z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
        <div className="slide-2-content max-w-xl text-left w-full md:w-1/2">
          <h2 className="font-medium tracking-[-0.03em] text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1] text-white mb-6">
            Scale <br />
            <span className="text-[#8A8F98]">infinitely.</span>
          </h2>
          <p className="text-[#8A8F98] text-[18px] md:text-[22px] leading-[1.4]">
            Our architecture is designed to handle massive growth effortlessly.
            You focus on building the product, we handle the infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
