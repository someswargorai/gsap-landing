import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: "01",
    bg: "bg-[#4535C1]", // Deep Purple
    title: "Branding that drives conversion & funding.",
    desc: "We clarify your positioning, define a distinctive tone of voice, and build a visual system that works across acquisition and product. Each sprint ships a robust logo, pragmatic brand guidelines, and a social kit so you can launch fast.",
    testimonal: {
      text: "Working with Brand Appart has been an absolute pleasure. Beyond their creativity and professionalism, there's a real sense of kindness and care in everything they do.",
      author: "Jérémy Bendayan",
      role: "Co-founder & COO @Jaws Group",
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
    title: "Product design that delights users.",
    desc: "We build intuitive, accessible, and stunning user interfaces that reduce friction and increase engagement. From wireframes to high-fidelity prototypes, we ensure every interaction feels magical.",
    testimonal: {
      text: "The new UI completely transformed our user retention metrics. Incredible attention to detail and a profound understanding of our users' core needs.",
      author: "Sarah Jenkins",
      role: "Head of Product",
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
    title: "Web experiences that tell your story.",
    desc: "Your website is your best salesperson. We design and develop blisteringly fast, SEO-optimized marketing sites that communicate your value proposition clearly and elegantly.",
    testimonal: {
      text: "Our conversion rate doubled within a week of launching the new site. The team is phenomenal and their execution speed is unmatched in the industry.",
      author: "Michael Chen",
      role: "CMO @ TechFlow",
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
    title: "Development that scales with you.",
    desc: "We don't just design; we build. Our engineering team crafts robust, scalable architectures using the latest web technologies to ensure your product can handle hyper-growth smoothly.",
    testimonal: {
      text: "Flawless execution. The codebase is incredibly clean and easy for our internal engineering team to pick up and scale without any technical debt.",
      author: "David Wright",
      role: "CTO @ Nexus",
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
    title: "Strategy that positions you to win.",
    desc: "Before we push a single pixel, we dive deep into your market, competitors, and users. We identify white space and position your brand to dominate your specific niche.",
    testimonal: {
      text: "They understood our business better than we did. The strategic clarity they provided was invaluable for our Series B fundraising round.",
      author: "Elena Rodriguez",
      role: "Founder & CEO",
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
    // Select all the cards
    const cardElements = gsap.utils.toArray('.animated-card');
    
    // Create a timeline pinned to the section
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
        yPercent: -100,    // Move up
        rotationX: 45,     // 3D tilt backward (creates the slanted trapezoid look)
        z: -200,           // Push back into 3D space
        transformOrigin: "center top",
        ease: "power2.inOut",
      });
    });

  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#F6F6F1] py-16 px-4 md:px-8 relative overflow-hidden">
      
      {/* The absolutely stacked container with 3D perspective enabled */}
      <div 
        className="max-w-7xl mx-auto relative w-full xl:h-[85vh] min-h-[650px] flex items-center justify-center"
        style={{ perspective: "1500px" }}
      >
        {cards.map((card, i) => (
          <div 
            key={card.id} 
            className={`animated-card absolute w-full h-fit-content rounded-[2.5rem] p-8 md:p-14 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.2)] ${card.bg}`}
            style={{ 
              zIndex: cards.length - i,
              // Initial static stacking offsets so they don't look perfectly flat before scrolling
              transform: `scale(${1 - i * 0.02}) translateY(${i * 15}px)`
            }} 
          >
            {/* Top Row */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="max-w-4xl">
                <h2 className="text-white text-[44px] md:text-[72px] font-bold tracking-[-0.04em] leading-[1.02]">
                  {card.title}
                </h2>
                <p className="text-white/80 mt-8 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
                  {card.desc}
                </p>
              </div>
              <div className="text-white/60 text-3xl font-medium tracking-widest hidden md:block shrink-0">
                ({card.id})
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-12 mt-20">
              {/* Testimonial */}
              <div className="max-w-sm">
                <p className="text-white/90 text-[15px] leading-relaxed font-medium mb-6">
                  {card.testimonal.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 overflow-hidden shrink-0">
                    <img src={card.testimonal.avatar} alt="avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{card.testimonal.author}</p>
                    <p className="text-white/60 text-xs mt-0.5">{card.testimonal.role}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Squares Grid */}
              <div className="flex gap-4 w-full xl:w-auto overflow-x-hidden xl:overflow-x-auto pb-4 xl:pb-0 scrollbar-hide">
                {card.squares.map((sq, idx) => (
                  <div key={idx} className={`w-28 h-28 md:w-36 md:h-36 rounded-[1.5rem] shrink-0 ${sq.bg} flex items-center justify-center overflow-hidden relative`}>
                    {/* Render playful geometric shapes based on type */}
                    {sq.type === "shape1" && <div className="w-3/5 h-3/5 bg-black/90 rounded-t-full rounded-bl-full"></div>}
                    {sq.type === "text" && <span className="text-black/80 font-serif font-bold text-xl md:text-2xl text-center leading-tight tracking-tighter">IMPORTANT<br/>HOUSE</span>}
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
