import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import SiteSpikeLogo from './SiteSpikeLogo';

interface NavbarProps {
  onOpenMockupForm: () => void;
}

export default function Navbar({ onOpenMockupForm }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Values', href: '#values' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Why Email-First', href: '#why-email' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1120]/95 backdrop-blur-xl border-b border-[#334155]/60 py-3.5 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="nav-brand-logo"
          className="flex items-center group cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <SiteSpikeLogo showText={true} showTagline={true} iconSize={36} />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#06B6D4] after:to-[#10B981] after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            id="nav-cta-btn"
            onClick={onOpenMockupForm}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#10B981] to-[#06B6D4] hover:from-[#22C55E] hover:to-[#38BDF8] shadow-lg shadow-[#10B981]/25 hover:shadow-[#10B981]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer overflow-hidden font-heading"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Get Free Mockup</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-[#1E293B] border border-[#334155] text-slate-300 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0B1120]/98 backdrop-blur-2xl border-b border-[#334155] px-6 py-8 flex flex-col gap-5 shadow-2xl transition-all max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-slate-200 hover:text-[#10B981] py-2 border-b border-slate-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            id="mobile-nav-cta-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenMockupForm();
            }}
            className="w-full mt-2 py-3.5 rounded-xl text-center font-semibold text-slate-950 bg-gradient-to-r from-[#10B981] to-[#06B6D4] shadow-lg shadow-[#10B981]/25 flex items-center justify-center gap-2 font-heading cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Request Free Mockup</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
