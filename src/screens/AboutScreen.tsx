export function AboutScreen() {
  return (
    <section id="about" className="py-24 bg-surface px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Built for Innovation, Growth, and Smarter Operations</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            CoreStack bridges the gap between complex technology and practical business application. We engineer solutions that are as intuitive as they are powerful.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-card p-8 rounded-2xl transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-6">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">AI-Powered Solutions</h3>
            <p className="text-on-surface-variant text-body-md">Leverage machine learning to unlock insights from your data, personalize customer experiences, and predict market trends with unparalleled accuracy.</p>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-8 rounded-2xl transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-6">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Business Automation</h3>
            <p className="text-on-surface-variant text-body-md">Streamline repetitive tasks and complex workflows. Our automation frameworks reduce human error, cut operational costs, and free your team to focus on strategy.</p>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-8 rounded-2xl transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed mb-6">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>devices</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Modern Digital Systems</h3>
            <p className="text-on-surface-variant text-body-md">Upgrade legacy infrastructure to agile, scalable cloud environments. We build resilient systems designed to adapt to tomorrow's technological demands.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
