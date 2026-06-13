'use client';

export function ContactScreen() {
  return (
    <section id="contact" className="py-24 bg-surface px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto glass-card rounded-3xl p-8 md:p-16 border-t border-primary/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-fixed/30 to-transparent -z-10"></div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">Ready to Build Smarter with CoreStack?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Transform your operations today. Schedule a consultation with our tech experts to discover how our AI and cloud solutions can accelerate your growth.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-label-sm font-label-sm text-on-surface-variant">Email Us</p>
                  <p className="font-medium text-on-surface">corestacktechnologiesph@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-label-sm font-label-sm text-on-surface-variant">Headquarters</p>
                  <p className="font-medium text-on-surface">SJDM Bulacan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/20">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface-variant mb-2">First Name</label>
                  <input type="text" className="w-full bg-surface border-outline-variant/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow px-4 py-3 text-on-surface shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface-variant mb-2">Last Name</label>
                  <input type="text" className="w-full bg-surface border-outline-variant/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow px-4 py-3 text-on-surface shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-label-sm font-label-sm text-on-surface-variant mb-2">Work Email</label>
                <input type="email" className="w-full bg-surface border-outline-variant/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow px-4 py-3 text-on-surface shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" placeholder="jane@company.com" />
              </div>

              <div>
                <label className="block text-label-sm font-label-sm text-on-surface-variant mb-2">Company</label>
                <input type="text" className="w-full bg-surface border-outline-variant/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow px-4 py-3 text-on-surface shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" placeholder="Acme Corp" />
              </div>

              <div>
                <label className="block text-label-sm font-label-sm text-on-surface-variant mb-2">Message</label>
                <textarea rows={4} className="w-full bg-surface border-outline-variant/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow px-4 py-3 text-on-surface shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="button" className="w-full bg-primary hover:bg-surface-tint text-on-primary py-3.5 rounded-lg font-body-md font-medium transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
