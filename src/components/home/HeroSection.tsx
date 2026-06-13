import { heroMetrics } from '@/data/homeData';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-32 lg:pt-36 lg:pb-40 px-margin-mobile md:px-margin-desktop bg-surface-bright">
      {/* Background & Lighting Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-20"></div>
      
      {/* Glow Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse-slow mix-blend-multiply"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary-fixed/30 rounded-full blur-[80px] -z-10 animate-pulse-slow mix-blend-multiply" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column (Content) */}
        <div className="max-w-2xl">
          {/* Trust Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface shadow-sm border border-outline-variant/30 mb-8">
            <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
            <span className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
              Enterprise Ready AI Solutions
            </span>
          </div>
          
          <h1 className="font-display-lg text-headline-lg-mobile lg:text-[56px] lg:leading-[64px] text-on-surface mb-6 tracking-tight">
            Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-surface-tint">AI & Technology</span><br />
            Solutions for Growing Businesses
          </h1>
          
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">
            Accelerate your digital transformation. We integrate cutting-edge AI, robust cloud architectures, and modern digital workflows to optimize your operations and scale your business effortlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#contact" className="group bg-primary hover:bg-surface-tint text-on-primary px-8 py-4 rounded-full font-body-md font-semibold text-center transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,80,205,0.39)] hover:shadow-[0_6px_20px_rgba(0,80,205,0.23)] hover:-translate-y-0.5 flex justify-center items-center gap-2">
              Get Started
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
            <a href="#services" className="bg-surface border border-outline-variant/50 text-on-surface hover:bg-surface-container-low px-8 py-4 rounded-full font-body-md font-medium text-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
              Explore Solutions
            </a>
          </div>

          {/* Key Metrics */}
          <div className="flex items-center gap-8 pt-6 border-t border-outline-variant/30">
            {heroMetrics.map((metric, i) => (
              <div key={metric.label} className="flex items-center gap-8">
                <div>
                  <div className="font-display-lg text-[28px] leading-none font-bold text-on-surface mb-1">{metric.value}</div>
                  <div className="text-[11px] font-label-sm text-on-surface-variant uppercase tracking-widest">{metric.label}</div>
                </div>
                {i < heroMetrics.length - 1 && (
                  <div className="w-px h-10 bg-outline-variant/40"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Visual Dashboard Mock) */}
        <div className="relative w-full aspect-square lg:aspect-auto lg:h-[650px] flex items-center justify-center">
           
           {/* Main Glass Dashboard Card */}
           <div className="absolute inset-0 m-auto w-[90%] h-[85%] bg-surface-container-lowest/60 backdrop-blur-xl border border-white/60 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] overflow-hidden flex flex-col p-6 animate-float">
             
             {/* Header */}
             <div className="flex items-center justify-between mb-8 pb-4 border-b border-outline-variant/20">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-error/80"></div>
                 <div className="w-3 h-3 rounded-full bg-accent-gold/80"></div>
                 <div className="w-3 h-3 rounded-full bg-success-green/80"></div>
               </div>
               <div className="h-4 w-32 bg-surface-variant/50 rounded-full"></div>
             </div>

             {/* Charts Area */}
             <div className="flex-1 grid grid-cols-2 gap-6">
                
                {/* Bar Chart Mock */}
                <div className="bg-surface-container-low/50 rounded-2xl p-5 border border-white/40 flex flex-col justify-end gap-3 h-full relative overflow-hidden group">
                   <div className="absolute top-4 left-4 text-xs font-label-sm text-on-surface-variant">Performance</div>
                   <div className="flex items-end justify-between h-32 gap-2 mt-auto">
                      <div className="w-full bg-primary/20 rounded-t-sm h-[40%] group-hover:h-[60%] transition-all duration-700"></div>
                      <div className="w-full bg-primary/40 rounded-t-sm h-[60%] group-hover:h-[80%] transition-all duration-700 delay-75"></div>
                      <div className="w-full bg-primary/60 rounded-t-sm h-[30%] group-hover:h-[50%] transition-all duration-700 delay-150"></div>
                      <div className="w-full bg-primary rounded-t-sm h-[80%] group-hover:h-[100%] transition-all duration-700 delay-200"></div>
                      <div className="w-full bg-secondary rounded-t-sm h-[50%] group-hover:h-[70%] transition-all duration-700 delay-300"></div>
                   </div>
                </div>

                {/* Automation Workflow Mock */}
                <div className="flex flex-col gap-4 h-full">
                  <div className="bg-surface-container-low/50 rounded-2xl p-4 border border-white/40 flex-1 flex flex-col justify-center gap-3">
                     <div className="h-3 w-1/2 bg-surface-variant rounded-full"></div>
                     <div className="h-3 w-3/4 bg-surface-variant/70 rounded-full"></div>
                     <div className="mt-2 flex gap-2">
                        <span className="px-2 py-1 bg-success-green/10 text-success-green text-[10px] rounded font-label-sm">Active</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] rounded font-label-sm">Syncing</span>
                     </div>
                  </div>
                  <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10 flex-1 flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                       <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                     </div>
                     <div>
                       <div className="text-xs font-semibold text-on-surface">AI Model Alpha</div>
                       <div className="text-[10px] text-on-surface-variant">Processing payload...</div>
                     </div>
                  </div>
                </div>
             </div>

           </div>

           {/* Floating Widgets */}
           
           {/* System Status Widget */}
           <div className="absolute top-[10%] -left-2 lg:-left-8 bg-surface/90 backdrop-blur-xl p-4 rounded-2xl border border-white/80 shadow-xl flex items-center gap-4 animate-float-delayed z-20">
             <div className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-green opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-success-green"></span>
             </div>
             <div>
               <div className="text-[11px] font-label-sm text-on-surface-variant uppercase tracking-wider mb-0.5">System Status</div>
               <div className="font-semibold text-sm text-on-surface">Optimal Operations</div>
             </div>
           </div>

           {/* Processing Progress Widget */}
           <div className="absolute bottom-[15%] -right-2 lg:-right-8 bg-surface/90 backdrop-blur-xl p-5 rounded-2xl border border-white/80 shadow-xl w-60 animate-float z-20" style={{ animationDelay: '1s' }}>
             <div className="flex items-center justify-between mb-3">
               <span className="text-xs font-label-sm font-semibold text-on-surface">Data Processing</span>
               <span className="text-primary font-bold text-sm">99.9%</span>
             </div>
             <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
               <div className="h-full bg-gradient-to-r from-primary to-surface-tint w-[99.9%] rounded-full relative">
                 <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
               </div>
             </div>
           </div>

        </div>
      </div>
    </section>
  );
}
