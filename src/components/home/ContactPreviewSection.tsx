'use client';

import { useContactForm } from '@/hooks/useContactForm';
import { companyDetails } from '@/data/companyData';

export function ContactPreviewSection() {
  const {
    formData,
    status,
    errorMessage,
    handleChange,
    handleSubmit,
    resetStatus
  } = useContactForm();

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

          {/* Contact Form */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/20">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="text-xl font-headline-sm text-on-surface">Message Sent!</h3>
                <p className="text-on-surface-variant">Your message has been sent successfully. We’ll get back to you soon.</p>
                <button 
                  onClick={resetStatus}
                  className="mt-4 text-primary font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-label-sm font-label-sm text-on-surface-variant mb-2">First Name *</label>
                    <input 
                      type="text" 
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-surface border-outline-variant/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow px-4 py-3 text-on-surface shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" 
                      placeholder="Jane" 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-label-sm font-label-sm text-on-surface-variant mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-surface border-outline-variant/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow px-4 py-3 text-on-surface shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" 
                      placeholder="Doe" 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-label-sm font-label-sm text-on-surface-variant mb-2">Work Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface border-outline-variant/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow px-4 py-3 text-on-surface shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" 
                    placeholder="jane@company.com" 
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-label-sm font-label-sm text-on-surface-variant mb-2">Company</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-surface border-outline-variant/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow px-4 py-3 text-on-surface shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" 
                    placeholder="Acme Corp" 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-label-sm font-label-sm text-on-surface-variant mb-2">Message *</label>
                  <textarea 
                    rows={4} 
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-surface border-outline-variant/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-shadow px-4 py-3 text-on-surface shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] resize-none" 
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="p-3 bg-error/10 border border-error/20 rounded-lg text-error text-sm">
                    {errorMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-primary hover:bg-surface-tint text-on-primary py-3.5 rounded-lg font-body-md font-medium transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
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
