import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: "01",
    bg: "bg-[#4535C1]", // Deep Purple
    title: "Real-time physics that defy reality.",
    desc: "Our proprietary WebGL physics engine runs at 120fps in the browser. Simulate fluid dynamics, soft bodies, and complex particle systems without crashing your users' devices.",
    testimonal: {
      text: "Nexonx completely changed how we build interactive web experiences. The physics engine is impossibly fast and the API is a joy to use.",
      author: "Jérémy Bendayan",
      role: "Lead Graphics Engineer @ Meta",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    squares: [
      { bg: "bg-[#C2F970]", type: "shape1" }, 
      { bg: "bg-[#E6C697]", type: "text" }, 
      { bg: "bg-[#E7E250]", type: "shape2" }, 
      { bg: "bg-[#8A3012]", type: "shape3" }
    ]
  },
  {
    id: "02",
    bg: "bg-[#E85D22]", // Vibrant Orange
    title: "Photorealistic rendering on the web.",
    desc: "Achieve AAA-game quality graphics directly in the browser. Out-of-the-box support for ray tracing, global illumination, and physically based rendering (PBR) materials.",
    testimonal: {
      text: "We migrated our entire 3D product configurator to Nexonx. Load times dropped by 80% and the visual fidelity is indistinguishable from Unreal Engine.",
      author: "Sarah Jenkins",
      role: "Head of 3D @ Tesla",
      avatar: "https://i.pravatar.cc/150?img=44"
    },
    squares: [
      { bg: "bg-[#111111]", type: "shape2" }, 
      { bg: "bg-[#4535C1]", type: "shape3" }, 
      { bg: "bg-[#C2F970]", type: "text" }, 
      { bg: "bg-[#E6C697]", type: "shape1" }
    ]
  },
  {
    id: "03",
    bg: "bg-[#DD3838]", // Cherry Red
    title: "Multiplayer state synchronization.",
    desc: "Build collaborative worlds with zero networking boilerplate. Our global edge network handles player state, low-latency interpolation, and server authority automatically.",
    testimonal: {
      text: "Adding multiplayer to our simulation took 3 lines of code. The netcode is flawless and scales globally without us having to manage a single server.",
      author: "Michael Chen",
      role: "CTO @ SpatialFlow",
      avatar: "https://i.pravatar.cc/150?img=59"
    },
    squares: [
      { bg: "bg-[#E6C697]", type: "text" }, 
      { bg: "bg-[#111111]", type: "shape1" }, 
      { bg: "bg-[#8A3012]", type: "shape2" }, 
      { bg: "bg-[#E7E250]", type: "shape3" }
    ]
  },
  {
    id: "04",
    bg: "bg-[#7A4B3A]", // Earthy Brown
    title: "Asset pipelines that just work.",
    desc: "Stop wrestling with file formats. Drag and drop FBX, GLTF, and OBJ files directly into the editor. We automatically compress textures, generate LODs, and optimize meshes for the web.",
    testimonal: {
      text: "The automated asset pipeline saves our technical artists hundreds of hours a month. It just works, every single time.",
      author: "David Wright",
      role: "Technical Art Director @ Nexus",
      avatar: "https://i.pravatar.cc/150?img=33"
    },
    squares: [
      { bg: "bg-[#E7E250]", type: "shape3" }, 
      { bg: "bg-[#C2F970]", type: "shape2" }, 
      { bg: "bg-[#E6C697]", type: "shape1" }, 
      { bg: "bg-[#111111]", type: "text" }
    ]
  },
  {
    id: "05",
    bg: "bg-[#208060]", // Forest Green
    title: "Visual node-based architecture.",
    desc: "Empower your designers to build complex logic without writing code. Our intuitive visual node editor connects seamlessly with your underlying JavaScript and WebGL architecture.",
    testimonal: {
      text: "The bridge between our developers and designers has never been stronger. Prototyping interactive simulations is now faster than making a Figma mockup.",
      author: "Elena Rodriguez",
      role: "Founder & CEO @ Immersive",
      avatar: "https://i.pravatar.cc/150?img=20"
    },
    squares: [
      { bg: "bg-[#8A3012]", type: "shape2" }, 
      { bg: "bg-[#4535C1]", type: "shape1" }, 
      { bg: "bg-[#E85D22]", type: "text" }, 
      { bg: "bg-[#E7E250]", type: "shape3" }
    ]
  }
];

export default function StackedCards() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const cardElements = gsap.utils.toArray('.animated-card');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 5%", 
        end: `+=${cardElements.length * 800}`, 
        pin: true,
        scrub: 1, 
      }
    });

    cardElements.forEach((card, index) => {
      if (index === cardElements.length - 1) return; 
      
      tl.to(card, {
        yPercent: -100,
        rotationX: 45,
        z: -200,
        transformOrigin: "center top",
        ease: "power2.inOut",
      });
    });

  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#F6F6F1] py-8 md:py-16 px-4 md:px-8 relative overflow-hidden">
      
      {/* The absolutely stacked container with 3D perspective enabled */}
      <div 
        className="max-w-7xl mx-auto relative w-full h-[95dvh] md:min-h-[650px] xl:h-[85vh] flex items-center justify-center"
        style={{ perspective: "1500px" }}
      >
        {cards.map((card, i) => (
          <div 
            key={card.id} 
            className={`animated-card absolute w-full h-auto max-h-full overflow-hidden rounded-3xl md:rounded-[2.5rem] p-6 md:p-14 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.2)] ${card.bg}`}
            style={{ 
              zIndex: cards.length - i,
              transform: `scale(${1 - i * 0.02}) translateY(${i * 15}px)`
            }} 
          >
            {/* Top Row */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8">
              <div className="max-w-4xl">
                <h2 className="text-white text-3xl md:text-[50px] lg:text-[72px] font-bold tracking-[-0.04em] leading-[1.05] md:leading-[1.02]">
                  {card.title}
                </h2>
                <p className="text-white/80 mt-4 md:mt-8 text-[15px] md:text-xl leading-relaxed font-medium max-w-2xl">
                  {card.desc}
                </p>
              </div>
              <div className="text-white/60 text-3xl font-medium tracking-widest hidden md:block shrink-0">
                ({card.id})
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 md:gap-12 mt-8 md:mt-20">
              {/* Testimonial */}
              <div className="max-w-sm">
                <p className="text-white/90 text-[13px] md:text-[15px] leading-relaxed font-medium mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
                  {card.testimonal.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 overflow-hidden shrink-0">
                    <img src={card.testimonal.avatar} alt="avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xs md:text-sm">{card.testimonal.author}</p>
                    <p className="text-white/60 text-[10px] md:text-xs mt-0.5">{card.testimonal.role}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Squares Grid */}
              <div className="flex gap-3 md:gap-4 w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0 scrollbar-hide shrink-0">
                {card.squares.map((sq, idx) => (
                  <div key={idx} className={`w-20 h-20 md:w-36 md:h-36 rounded-xl md:rounded-[1.5rem] shrink-0 ${sq.bg} flex items-center justify-center overflow-hidden relative`}>
                    {sq.type === "shape1" && <div className="w-3/5 h-3/5 bg-black/90 rounded-t-full rounded-bl-full"></div>}
                    {sq.type === "text" && <span className="text-black/80 font-serif font-bold text-sm md:text-2xl text-center leading-tight tracking-tighter">IMPORTANT<br/>HOUSE</span>}
                    {sq.type === "shape2" && <div className="w-3/5 h-3/5 bg-black/80 rounded-full flex items-center justify-center"><div className="w-1/3 h-1/3 bg-white rounded-full"></div></div>}
                    {sq.type === "shape3" && <div className="w-[120%] h-1/2 bg-[#FF4500] absolute bottom-0 right-0 transform -skew-x-12 origin-bottom-right"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
