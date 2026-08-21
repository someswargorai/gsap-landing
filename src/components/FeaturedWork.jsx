export default function FeaturedWork() {
  return (
    <section className="w-full bg-[#F6F6F1] py-40 px-8 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Subtle floating dot from the design */}
      <div className="absolute left-[30%] top-[45%] w-2 h-2 rounded-full bg-[#DCDCD0]"></div>

      <div className="text-center flex flex-col items-center">
        {/* Massive Headline */}
        <h2 className="flex flex-col items-center justify-center font-bold text-[3.5rem] md:text-[5rem] xl:text-[7rem]">
          <span className="text-[#111111] leading-[0.85]">Featured</span>
          <span className="text-[#98948B] leading-[0.85]">worlds</span>
        </h2>

        {/* Arrow */}
        <div className="mt-16 mb-16 text-[#111111]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Paragraph */}
        <p className="text-[16px] md:text-[24px] text-[#111111] max-w-2xl text-center leading-[1.4] tracking-tight font-medium">
          Explore the most breathtaking simulations and<br className="hidden md:block"/>
          interactive 3D experiences built by the world's<br className="hidden md:block"/>
          top engineering teams on Nexonx.
        </p>
      </div>
    </section>
  );
}
