export default function SimpleCTA() {
  return (
    <section className="w-full bg-[#000000] py-40 px-8 flex flex-col items-center justify-center relative border-t border-white/10">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-[64px] md:text-[96px] font-medium tracking-[-0.04em] leading-[1.05] text-white mb-8">
          Ready to scale?
        </h2>
        <p className="text-[#8A8F98] text-[20px] md:text-[24px] mb-12 max-w-2xl mx-auto">
          We partner with ambitious founders to build category-defining brands and digital experiences.
        </p>
        <button className="bg-white text-black px-10 py-4 rounded-full text-[16px] font-bold tracking-wide hover:bg-[#F2F2F2] transition-transform hover:scale-105 cursor-pointer">
          Start a project
        </button>
      </div>
    </section>
  );
}
