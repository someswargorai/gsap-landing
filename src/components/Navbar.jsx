import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  
  useGSAP(() => {
    if (isOpen) {
      gsap.set(menuRef.current, { display: "flex" });
      gsap.to(menuRef.current, { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" });
      gsap.fromTo(".mobile-link", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out", delay: 0.1 }
      );
    } else {
      gsap.to(menuRef.current, { 
        y: "-100%", 
        opacity: 0, 
        duration: 0.4, 
        ease: "power3.in",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        }
      });
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] flex items-center justify-between px-6 md:px-8 py-5 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-white font-medium text-[15px] cursor-pointer">
          {/* Nexonx Logo approximate SVG */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM11.1399 7.42651L7.42651 11.1399L12.8601 16.5735L16.5735 12.8601L11.1399 7.42651Z" fill="currentColor"/>
          </svg>
          Nexonx
        </div>
        
        <div className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-[#8A8F98]">
          <a href="#" className="hover:text-white transition-colors">Product</a>
          <a href="#" className="hover:text-white transition-colors">Resources</a>
          <a href="#" className="hover:text-white transition-colors">Customers</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Now</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4 md:gap-5">
          <a href="#" className="hidden md:block text-[13.5px] font-medium text-[#8A8F98] hover:text-white transition-colors">Log in</a>
          <button className="hidden md:block bg-white text-black px-4 py-1.5 rounded-full text-[13.5px] font-medium hover:bg-[#F2F2F2] transition-colors cursor-pointer">Sign up</button>
          
          {/* Mobile Hamburger Icon */}
          <button onClick={toggleMenu} className="md:hidden flex flex-col justify-center items-center w-7 h-7 gap-[5px] z-[101]">
            <div className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}></div>
            <div className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}></div>
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div 
        ref={menuRef} 
        className="fixed inset-0 z-[90] bg-[#000000] hidden flex-col justify-center items-center px-8 pt-20"
        style={{ transform: "translateY(-100%)", opacity: 0 }}
      >
        <div className="flex flex-col gap-6 text-center text-[2rem] font-medium text-[#8A8F98]">
          <a href="#" onClick={toggleMenu} className="mobile-link hover:text-white transition-colors">Product</a>
          <a href="#" onClick={toggleMenu} className="mobile-link hover:text-white transition-colors">Resources</a>
          <a href="#" onClick={toggleMenu} className="mobile-link hover:text-white transition-colors">Customers</a>
          <a href="#" onClick={toggleMenu} className="mobile-link hover:text-white transition-colors">Pricing</a>
          <a href="#" onClick={toggleMenu} className="mobile-link hover:text-white transition-colors">Now</a>
          <a href="#" onClick={toggleMenu} className="mobile-link hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex flex-col gap-4 mt-12 w-full max-w-sm mobile-link">
          <button onClick={toggleMenu} className="w-full bg-white/10 text-white px-6 py-4 rounded-full text-[1.2rem] font-medium hover:bg-white/20 transition-colors">Log in</button>
          <button onClick={toggleMenu} className="w-full bg-white text-black px-6 py-4 rounded-full text-[1.2rem] font-medium hover:bg-[#F2F2F2] transition-colors">Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
