'use client';

import { useContactForm } from '@/hooks/useContactForm';
import { companyDetails } from '@/data/companyData';

export function ContactPreviewSection() {
  const { formData, status, errorMessage, handleChange, handleSubmit, resetStatus } =
    useContactForm();

  const inputClass =
    'w-full bg-surface border border-outline-variant/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow px-4 py-3 text-on-surface shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]';

  return (
    <section id="contact" className="py-24 bg-surface px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto glass-card rounded-3xl p-8 md:p-16 border-t border-primary/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-fixed/30 to-transparent -z-10" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — heading + contact info */}
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
              Ready to Build Smarter with CoreStack?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Transform your operations today. Schedule a consultation with our tech experts to
              discover how our AI and cloud solutions can accelerate your growth.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div className="min-w-0">
                  <p className="text-label-sm font-label-sm text-on-surface-variant">Email Us</p>
                  <p className="font-medium text-on-surface break-all text-sm">{companyDetails.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-label-sm font-label-sm text-on-surface-variant">Headquarters</p>
                  <p className="font-medium text-on-surface">{companyDetails.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/20">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
                <style>{`
                  @keyframes checkPop {
                    0%   { transform: scale(0); opacity: 0; }
                    60%  { transform: scale(1.2); opacity: 1; }
                    80%  { transform: scale(0.9); }
                    100% { transform: scale(1); opacity: 1; }
                  }
                  @keyframes ripple {
                    0%   { transform: scale(1); opacity: 0.4; }
                    100% { transform: scale(2.2); opacity: 0; }
                  }
                  @keyframes fadeUp {
                    0%   { transform: translateY(10px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                  }
                  .check-pop   { animation: checkPop 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }
                  .check-ripple { animation: ripple 1s ease-out 0.2s infinite; }
                  .fade-up-1   { animation: fadeUp 0.4s ease 0.4s both; }
                  .fade-up-2   { animation: fadeUp 0.4s ease 0.55s both; }
                  .fade-up-3   { animation: fadeUp 0.4s ease 0.7s both; }
                `}</style>

                {/* Animated icon with ripple ring */}
                <div className="relative flex items-center justify-center mb-2">
                  {/* Ripple ring */}
                  <span className="check-ripple absolute w-16 h-16 rounded-full bg-primary/20" />
                  {/* Icon circle */}
                  <div className="check-pop w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                  </div>
                </div>

                <h3 className="fade-up-1 text-xl font-headline-sm text-on-surface">Message Sent!</h3>
                <p className="fade-up-2 text-on-surface-variant">
                  Your message has been sent successfully. We&apos;ll get back to you soon.
                </p>
                <button onClick={resetStatus} className="fade-up-3 mt-4 text-primary font-medium hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-label-sm font-label-sm text-on-surface-variant mb-2">
                      First Name *
                    </label>
                    <input
                      type="text" id="firstName" name="firstName" required
                      value={formData.firstName} onChange={handleChange}
                      className={inputClass} placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-label-sm font-label-sm text-on-surface-variant mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text" id="lastName" name="lastName" required
                      value={formData.lastName} onChange={handleChange}
                      className={inputClass} placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-label-sm font-label-sm text-on-surface-variant mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email" id="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    className={inputClass} placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-label-sm font-label-sm text-on-surface-variant mb-2">
                    Company
                  </label>
                  <input
                    type="text" id="company" name="company"
                    value={formData.company} onChange={handleChange}
                    className={inputClass} placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-label-sm font-label-sm text-on-surface-variant mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4} id="message" name="message" required minLength={10}
                    value={formData.message} onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === 'error' && errorMessage && (
                  <div role="alert" className="p-3 bg-error/10 border border-error/20 rounded-lg text-error text-sm">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary hover:bg-surface-tint text-on-primary py-3.5 rounded-lg font-body-md font-medium transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' && (
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                  )}
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
