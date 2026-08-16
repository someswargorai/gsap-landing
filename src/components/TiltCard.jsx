import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    id: 1,
    title: "Startups successfully launched this year",
    amount: "124",
    gradient: "linear-gradient(135deg, #4535C1 0%, #6E5EEA 100%)", // Deep Purple
  },
  {
    id: 2,
    title: "$350M raised by the projects we've supported",
    amount: "$350M",
    gradient: "linear-gradient(135deg, #FF4522 0%, #FF8C33 100%)", // Vibrant Orange (Original)
  },
  {
    id: 3,
    title: "Average increase in user retention",
    amount: "215%",
    gradient: "linear-gradient(135deg, #208060 0%, #42C299 100%)", // Forest Green
  }
];

const TiltCardItem = ({ title, amount, gradient }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top; 
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const normalizedX = (x - centerX) / centerX;
    const normalizedY = (y - centerY) / centerY;
    const rotateX = normalizedY * -15; 
    const rotateY = normalizedX * 15;
    
    gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 1000, 
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)", 
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-[85vw] max-w-[380px] h-[400px] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between cursor-pointer relative shadow-2xl transition-shadow hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] shrink-0"
      style={{
        background: gradient,
        transformStyle: "preserve-3d" 
      }}
    >
      <h3 
        className="text-white text-[24px] md:text-[28px] leading-[1.1] font-medium tracking-tight max-w-[280px]"
        style={{ transform: "translateZ(30px)" }} 
      >
        {title}
      </h3>
      <div className="flex justify-between items-end relative">
        <div className="w-3 h-3 rounded-full bg-black/10"></div>
        <div 
          className="text-white text-[64px] md:text-[80px] font-bold leading-none tracking-tighter absolute -right-2 -bottom-2"
          style={{ transform: "translateZ(60px)" }} 
        >
          {amount}
        </div>
      </div>
    </div>
  );
};

export default function TiltCard() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center", 
          end: "+=800", 
          pin: true,
          scrub: 1, 
        }
      });

      tl.to(".tilt-card-1", {
        y: 150, 
        ease: "none"
      }, 0);
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#F6F6F1] py-24 flex items-center justify-center min-h-[80vh] lg:min-h-screen overflow-hidden">
      
      <div style={{ perspective: "2000px" }} className="w-full max-w-[1400px] mx-auto">
        
        <div className="flex overflow-x-auto lg:overflow-visible lg:flex-row items-center lg:justify-center gap-6 lg:gap-8 w-full px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide pb-12 lg:pb-0">
          {cardData.map((data, index) => (
            <div 
              className={`snap-center shrink-0 tilt-card-${index}`} 
              key={data.id}
            >
              <TiltCardItem {...data} />
            </div>
          ))}
        </div>
        
      </div>

    </section>
  );
}
