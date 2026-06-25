import { heroMetrics } from '@/data/homeData';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-32 lg:pt-36 lg:pb-40 px-margin-mobile md:px-margin-desktop bg-surface-bright">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-20"></div>
      
      {/* Glow Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-primary/[0.08] rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-secondary-fixed/30 rounded-full blur-[100px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-surface-tint/[0.05] rounded-full blur-[80px] -z-10 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      
      {/* Floating Particles */}
      <div className="absolute top-[15%] left-[8%] w-1.5 h-1.5 bg-primary/30 rounded-full -z-10 animate-float" />
      <div className="absolute top-[30%] right-[12%] w-2 h-2 bg-surface-tint/20 rounded-full -z-10 animate-float-delayed" />
      <div className="absolute bottom-[25%] left-[20%] w-1 h-1 bg-primary/40 rounded-full -z-10 animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[60%] right-[5%] w-1.5 h-1.5 bg-secondary-fixed-dim/30 rounded-full -z-10 animate-float-delayed" />
      
      <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column */}
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface shadow-sm border border-outline-variant/30 mb-8 hover:shadow-md transition-shadow duration-300">
            <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
            </span>
            <span className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
              Enterprise Ready AI Solutions
            </span>
          </div>
          
          {/* Heading */}
          <h1 className="font-display-lg text-headline-lg-mobile lg:text-[60px] lg:leading-[68px] text-on-surface mb-6 tracking-tight">
            Smart{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-surface-tint to-primary">
              AI & Technology
            </span>
            <br />
            <span className="relative">
              for Growing Businesses
              <svg className="absolute -bottom-1 left-0 w-full h-3 -z-10" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0 10 Q50 0, 100 10 Q150 20, 200 10" fill="none" stroke="rgba(0,80,205,0.15)" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          
          {/* Description */}
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl leading-relaxed">
            We build AI agents, custom software, and automation that actually work. 
            From startups to enterprises — we deliver modern digital solutions that scale.
          </p>
          
          {/* Service Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {['Web Development', 'AI Agents', 'SaaS', 'Automation', 'Cloud'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-surface-container-low/70 border border-outline-variant/20 rounded-full text-xs font-label-sm text-on-surface-variant hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#contact"
              className="group bg-primary hover:bg-surface-tint text-on-primary px-8 py-4 rounded-full font-body-md font-semibold text-center transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,80,205,0.39)] hover:shadow-[0_6px_24px_rgba(0,80,205,0.35)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Get Started
              <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
            </a>
            <a
              href="#services"
              className="group bg-surface border border-outline-variant/50 text-on-surface hover:bg-surface-container-low px-8 py-4 rounded-full font-body-md font-medium text-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Explore Solutions</span>
              <span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">explore</span>
            </a>
          </div>

          {/* Key Metrics */}
          <div className="flex items-center gap-8 pt-6 border-t border-outline-variant/20">
            {heroMetrics.map((metric, i) => (
              <div key={metric.label} className="flex items-center gap-8">
                <div className="group">
                  <div className="font-display-lg text-[30px] leading-none font-bold text-on-surface mb-1 bg-gradient-to-b from-on-surface to-on-surface/80 bg-clip-text">
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-label-sm text-on-surface-variant uppercase tracking-widest group-hover:text-primary transition-colors duration-300">{metric.label}</div>
                </div>
                {i < heroMetrics.length - 1 && (
                  <div className="w-px h-10 bg-gradient-to-b from-outline-variant/40 via-outline-variant/20 to-transparent" />
                )}
              </div>
            ))}
            <div className="flex items-center gap-3 pl-2">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 to-surface-tint/20 border-2 border-surface flex items-center justify-center">
                    <span className="material-symbols-outlined text-[12px] text-primary">person</span>
                  </div>
                ))}
              </div>
              <span className="text-[11px] text-on-surface-variant font-label-sm">+50 clients</span>
            </div>
          </div>
        </div>

        {/* Right Column - Dashboard Visual */}
        <div className="relative w-full aspect-square lg:aspect-auto lg:h-[650px] flex items-center justify-center">
          
          {/* Main Dashboard Card */}
          <div className="absolute inset-0 m-auto w-[92%] h-[88%] bg-surface-container-lowest/60 backdrop-blur-xl border border-white/60 rounded-3xl shadow-[0_8px_40px_0_rgba(0,0,0,0.08)] overflow-hidden flex flex-col p-6 lg:p-7 animate-float">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-outline-variant/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-error/80"></div>
                <div className="w-3 h-3 rounded-full bg-accent-gold/80"></div>
                <div className="w-3 h-3 rounded-full bg-success-green/80"></div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-label-sm text-on-surface-variant uppercase tracking-wider">Dashboard</span>
                <div className="h-3 w-16 bg-surface-variant/50 rounded-full"></div>
              </div>
            </div>

            {/* Charts Area */}
            <div className="flex-1 grid grid-cols-2 gap-5">
              
              {/* Bar Chart */}
              <div className="bg-surface-container-low/50 rounded-2xl p-5 border border-white/40 flex flex-col justify-end gap-3 relative overflow-hidden group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-label-sm text-on-surface-variant font-semibold">Revenue Growth</span>
                  <span className="text-[10px] font-label-sm text-success-green">+32.5%</span>
                </div>
                <div className="flex items-end justify-between h-28 gap-2">
                  <div className="w-full bg-primary/15 rounded-t-sm h-[35%] group-hover:h-[55%] transition-all duration-700 rounded-t-md"></div>
                  <div className="w-full bg-primary/30 rounded-t-sm h-[55%] group-hover:h-[75%] transition-all duration-700 delay-75 rounded-t-md"></div>
                  <div className="w-full bg-primary/50 rounded-t-sm h-[25%] group-hover:h-[45%] transition-all duration-700 delay-150 rounded-t-md"></div>
                  <div className="w-full bg-primary rounded-t-sm h-[75%] group-hover:h-[95%] transition-all duration-700 delay-200 rounded-t-md"></div>
                  <div className="w-full bg-secondary rounded-t-sm h-[45%] group-hover:h-[65%] transition-all duration-700 delay-300 rounded-t-md"></div>
                </div>
              </div>

              {/* AI Workflow */}
              <div className="flex flex-col gap-4 h-full">
                <div className="bg-surface-container-low/50 rounded-2xl p-4 border border-white/40 flex-1 flex flex-col justify-center gap-3 hover:border-primary/20 transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-[14px] text-primary">account_tree</span>
                    <span className="text-[10px] font-label-sm text-on-surface-variant uppercase tracking-wider">AI Pipeline</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 w-full bg-surface-variant/50 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-primary rounded-full"></div>
                    </div>
                    <div className="h-2.5 w-full bg-surface-variant/50 rounded-full overflow-hidden">
                      <div className="h-full w-[60%] bg-surface-tint rounded-full"></div>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <span className="px-2 py-0.5 bg-success-green/10 text-success-green text-[10px] rounded-full font-label-sm border border-success-green/20">Active</span>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] rounded-full font-label-sm border border-primary/20">Processing</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary/[0.04] to-surface-tint/[0.04] rounded-2xl p-4 border border-primary/10 flex items-center gap-3 hover:border-primary/20 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-surface-tint flex items-center justify-center text-white shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-[22px]">smart_toy</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-on-surface truncate">AI Agent Active</div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-success-green animate-pulse"></span>
                      <span className="text-[10px] text-on-surface-variant">Processing in real-time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Metrics Bar */}
            <div className="mt-5 pt-4 border-t border-outline-variant/20 grid grid-cols-3 gap-4">
              {[
                { label: 'Active Projects', value: '12' },
                { label: 'AI Models', value: '8' },
                { label: 'Uptime', value: '99.9%' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-sm font-bold text-on-surface">{stat.value}</div>
                  <div className="text-[9px] font-label-sm text-on-surface-variant uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Widgets */}
          
          {/* Widget 1 - Status */}
          <div className="absolute top-[8%] -left-3 lg:-left-8 bg-surface/90 backdrop-blur-xl p-3.5 rounded-2xl border border-white/80 shadow-xl flex items-center gap-3 animate-float-delayed z-20 hover:shadow-2xl transition-shadow duration-300">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success-green"></span>
            </div>
            <div>
              <div className="text-[10px] font-label-sm text-on-surface-variant uppercase tracking-wider mb-0.5">System Status</div>
              <div className="font-semibold text-xs text-on-surface">All Systems Go</div>
            </div>
          </div>

          {/* Widget 2 - Processing */}
          <div className="absolute bottom-[18%] -right-3 lg:-right-8 bg-surface/90 backdrop-blur-xl p-4 rounded-2xl border border-white/80 shadow-xl w-56 animate-float z-20 hover:shadow-2xl transition-shadow duration-300" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-label-sm font-semibold text-on-surface uppercase tracking-wider">Data Processing</span>
              <span className="text-primary font-bold text-xs">99.9%</span>
            </div>
            <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-surface-tint w-[99.9%] rounded-full relative">
                <div className="absolute inset-0 w-12 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Widget 3 - Live - positioned on right side */}
          <div className="absolute top-[55%] -right-1 lg:-right-5 bg-surface/90 backdrop-blur-xl p-3 rounded-2xl border border-white/80 shadow-xl animate-float z-20 hover:shadow-2xl transition-shadow duration-300" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[9px] font-label-sm text-on-surface-variant uppercase tracking-wider">Live</span>
              <span className="text-[9px] font-semibold text-on-surface">AI Sync</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-float">
        <span className="text-[9px] font-label-sm text-on-surface-variant/50 uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-on-surface-variant/30 to-transparent"></div>
      </div>
    </section>
  );
}
