import { ArrowUp, Shield, Star, Globe } from 'lucide-react';
import SiteSpikeLogo from './SiteSpikeLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070B14] border-t border-[#334155]/60 pt-16 pb-12 relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#334155]/50">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <SiteSpikeLogo size="md" />

            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              Professional web design & modern development agency helping local businesses across America scale their digital presence. 100% online — zero calls or meetings needed.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[#10B981]" />
                All 50 US States
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.9/5 Rating
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#06B6D4]" />
                SSL Verified
              </span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-[#10B981] transition-colors">Landing Pages</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#10B981] transition-colors">Business Websites</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#10B981] transition-colors">E-Commerce Stores</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#10B981] transition-colors">Web Applications</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#10B981] transition-colors">Website Redesign</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#10B981] transition-colors">SEO & Maintenance</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#process" className="hover:text-[#10B981] transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#values" className="hover:text-[#10B981] transition-colors">Values & Culture</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#10B981] transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#10B981] transition-colors">Pricing Plans</a>
              </li>
              <li>
                <a href="#why-email" className="hover:text-[#10B981] transition-colors">Why Email-First</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#10B981] transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#10B981] transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Inquiries */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Get Started
            </h4>
            <p className="text-xs text-slate-400">
              Ready to receive your free custom mockup within 48 hours?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#10B981] to-[#06B6D4] hover:from-[#22C55E] hover:to-[#38BDF8] transition-all font-heading"
            >
              <span>Request Free Mockup</span>
            </a>
            <div className="pt-2 text-xs">
              <span className="text-slate-400 block">Direct Inquiries:</span>
              <a href="mailto:spike@sitespike.online" className="text-[#10B981] hover:text-[#06B6D4] font-mono transition-colors font-semibold">
                spike@sitespike.online
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} SiteSpike. All rights reserved. Professional web solutions for local businesses.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-500">Fast • Reliable • Zero Meetings</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] border border-[#334155] text-slate-300 hover:text-white transition-all cursor-pointer font-heading"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#10B981]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
