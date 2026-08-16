const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-8 py-5 border-b border-white/5 bg-black/40 backdrop-blur-xl">
    <div className="flex items-center gap-2 text-white font-medium text-[15px] cursor-pointer">
      {/* Linear Logo approximate SVG */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM11.1399 7.42651L7.42651 11.1399L12.8601 16.5735L16.5735 12.8601L11.1399 7.42651Z" fill="currentColor"/>
      </svg>
      Linear
    </div>
    
    <div className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-[#8A8F98]">
      <a href="#" className="hover:text-white transition-colors">Product</a>
      <a href="#" className="hover:text-white transition-colors">Resources</a>
      <a href="#" className="hover:text-white transition-colors">Customers</a>
      <a href="#" className="hover:text-white transition-colors">Pricing</a>
      <a href="#" className="hover:text-white transition-colors">Now</a>
      <a href="#" className="hover:text-white transition-colors">Contact</a>
    </div>

    <div className="flex items-center gap-5">
      <a href="#" className="hidden md:block text-[13.5px] font-medium text-[#8A8F98] hover:text-white transition-colors">Log in</a>
      <button className="bg-white text-black px-4 py-1.5 rounded-full text-[13.5px] font-medium hover:bg-[#F2F2F2] transition-colors cursor-pointer">Sign up</button>
    </div>
  </nav>
);

export default Navbar;
