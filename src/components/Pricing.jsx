export default function Pricing() {
  return (
    <section className="min-h-[100vh] w-full bg-[#000000] py-32 px-8 md:px-20  relative z-20 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-[64px] font-medium tracking-[-0.03em] leading-[1.05] text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-xl text-[#8A8F98] leading-relaxed">
            Start for free, then scale alongside your growing team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Tier */}
          <div className="flex flex-col p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-medium text-white tracking-tight">Free</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-medium text-white tracking-tight">$0</span>
              <span className="text-[#8A8F98]">/month</span>
            </div>
            <p className="mt-4 text-[14px] text-[#8A8F98] leading-relaxed">
              Perfect for individuals and small teams just getting started.
            </p>
            <button className="mt-8 w-full bg-transparent border border-white/20 text-white py-2.5 rounded-full text-[14px] font-medium hover:bg-white/5 transition-colors cursor-pointer">
              Get Started
            </button>
            <ul className="mt-8 flex flex-col gap-4 text-[14px] text-[#8A8F98]">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Up to 3 users
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Basic features
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Community support
              </li>
            </ul>
          </div>
          
          {/* Pro Tier */}
          <div className="flex flex-col p-8 rounded-2xl border border-white/20 bg-white/[0.04] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full text-[12px] font-medium tracking-wide">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-medium text-white tracking-tight">Pro</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-medium text-white tracking-tight">$12</span>
              <span className="text-[#8A8F98]">/user/month</span>
            </div>
            <p className="mt-4 text-[14px] text-[#8A8F98] leading-relaxed">
              For growing teams that need advanced features and security.
            </p>
            <button className="mt-8 w-full bg-white text-black py-2.5 rounded-full text-[14px] font-medium hover:bg-[#F2F2F2] transition-colors cursor-pointer">
              Start Free Trial
            </button>
            <ul className="mt-8 flex flex-col gap-4 text-[14px] text-[#8A8F98]">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Unlimited users
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Advanced analytics
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Priority support
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Custom domains
              </li>
            </ul>
          </div>
          
          {/* Enterprise Tier */}
          <div className="flex flex-col p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h3 className="text-xl font-medium text-white tracking-tight">Enterprise</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-medium text-white tracking-tight">Custom</span>
            </div>
            <p className="mt-4 text-[14px] text-[#8A8F98] leading-relaxed">
              Custom solutions for large organizations and enterprise scale.
            </p>
            <button className="mt-8 w-full bg-transparent border border-white/20 text-white py-2.5 rounded-full text-[14px] font-medium hover:bg-white/5 transition-colors cursor-pointer">
              Contact Sales
            </button>
            <ul className="mt-8 flex flex-col gap-4 text-[14px] text-[#8A8F98]">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                SAML SSO
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Dedicated success manager
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Custom integrations
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                99.99% uptime SLA
              </li>
            </ul>
          </div>
        </div>
      </div> 
    </section>
  );
}
