export function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-secondary-fixed">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter">
        <div className="col-span-2 flex flex-col gap-6">
          <a href="#" className="flex items-center gap-2">
            <img 
              src="/images/Corestack_Logo.png" 
              alt="CoreStack Logo" 
              className="h-8 w-auto opacity-90"
            />
            <span className="font-headline-md text-headline-md font-bold text-on-secondary-fixed">CoreStack</span>
          </a>
          <p className="text-on-secondary-fixed-variant text-sm max-w-xs font-body-md text-body-md">
            Empowering modern enterprises with intelligent automation and scalable cloud solutions.
          </p>
          <p className="text-on-secondary-fixed-variant text-sm mt-auto font-body-md text-body-md">
            © 2024 CoreStack Enterprise. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-on-secondary-fixed opacity-70">Platform</h4>
          <a href="#" className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer">AI Automation</a>
          <a href="#" className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer">Cloud Infrastructure</a>
          <a href="#" className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer">Data Analytics</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-on-secondary-fixed opacity-70">Company</h4>
          <a href="#" className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer">About Us</a>
          <a href="#" className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer">Careers</a>
          <a href="#" className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer">Contact</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-on-secondary-fixed opacity-70">Legal</h4>
          <a href="#" className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer">Privacy Policy</a>
          <a href="#" className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer">Terms of Service</a>
          <a href="#" className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer">Security</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-on-secondary-fixed opacity-70">Support</h4>
          <a href="#" className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer">Help Center</a>
          <a href="#" className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer">Status</a>
          <a href="#" className="font-body-md text-body-md text-on-secondary-fixed-variant hover:text-primary transition-colors cursor-pointer">Documentation</a>
        </div>
      </div>
    </footer>
  );
}
