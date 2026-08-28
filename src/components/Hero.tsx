import { useState, useEffect, MouseEvent } from 'react';
import { ArrowRight, Sparkles, Star, Zap, Smartphone, Globe, Lock, CheckCircle2 } from 'lucide-react';
import SiteSpikeLogo from './SiteSpikeLogo';

interface HeroProps {
  onOpenMockupForm: () => void;
}

const ROTATING_PHRASES = [
  'Drive Measurable Growth',
  'Convert More Customers',
  'Achieve New Peaks',
  'Dominate Local Search',
  'Outperform Competitors',
];

export default function Hero({ onOpenMockupForm }: HeroProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');
  const [activeMockTab, setActiveMockTab] = useState<'landing' | 'menu' | 'reviews'>('landing');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('out');
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
        setFadeState('in');
      }, 350);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const scrollToPortfolio = (e: MouseEvent) => {
    e.preventDefault();
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero-section" className="relative min-h-[92vh] pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden flex items-center">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none animate-orb-1" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#06B6D4]/15 rounded-full blur-3xl pointer-events-none animate-orb-2" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#0EA5E9]/10 rounded-full blur-3xl pointer-events-none animate-orb-3" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Value Badge */}
            <div
              id="hero-value-badge"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1E293B]/80 border border-[#334155] text-xs sm:text-sm font-semibold text-[#10B981] mb-6 shadow-lg shadow-black/20 backdrop-blur-md"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
              <span>100% Online — Zero Calls or Meetings Needed</span>
            </div>

            {/* Main Headline */}
            <div className="mb-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#10B981] block mb-2 font-heading">
                Web Design & Digital Growth
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] max-w-2xl">
                We Design. We Build.{' '}
                <span className="bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#06B6D4] bg-clip-text text-transparent block sm:inline">
                  We Grow.
                </span>
              </h1>
            </div>

            <div className="font-heading text-lg sm:text-xl font-medium text-slate-300 mb-6 flex items-center gap-2">
              <span>Websites Engineered to</span>
              <span
                className={`font-bold text-[#10B981] border-b-2 border-[#10B981]/50 pb-0.5 transition-all duration-300 transform ${
                  fadeState === 'in'
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-2'
                }`}
              >
                {ROTATING_PHRASES[phraseIndex]}
              </span>
            </div>

            {/* Sub-headline description */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-xl text-center lg:text-left">
              SiteSpike is a modern web design and digital growth agency. We build stunning websites, powerful brands, and data-driven strategies that help businesses scale.
              Receive your <strong className="text-white font-semibold">100% free interactive custom mockup</strong> within 48 hours — zero commitment.
            </p>

            {/* Primary & Secondary Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 w-full sm:w-auto">
              <button
                id="hero-primary-cta-btn"
                onClick={onOpenMockupForm}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-slate-950 bg-gradient-to-r from-[#10B981] to-[#06B6D4] hover:from-[#22C55E] hover:to-[#38BDF8] shadow-xl shadow-[#10B981]/25 hover:shadow-[#10B981]/40 hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer font-heading"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>Get Free Mockup</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-secondary-portfolio-btn"
                href="#portfolio"
                onClick={scrollToPortfolio}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-semibold text-slate-200 bg-[#1E293B]/70 hover:bg-[#334155] border border-[#334155] hover:border-[#10B981] hover:text-white transition-all hover:-translate-y-0.5"
              >
                <Globe className="w-5 h-5 text-[#06B6D4]" />
                <span>Explore Our Work</span>
              </a>
            </div>

            {/* Key Trust Stats (From Visual Identity) */}
            <div id="hero-stats-bar" className="grid grid-cols-3 gap-6 sm:gap-10 pt-6 border-t border-[#334155] w-full max-w-lg">
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
                  120+
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                  Projects Completed
                </div>
              </div>

              <div>
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white flex items-center justify-center lg:justify-start gap-1">
                  <span>98%</span>
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline" />
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                  Client Satisfaction
                </div>
              </div>

              <div>
                <div className="font-heading text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#06B6D4] to-[#38BDF8] bg-clip-text text-transparent">
                  5+ Years
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                  Of Excellence
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Browser Showcase & Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Floating Metric 1: Speed Score */}
            <div className="absolute -top-6 -right-4 sm:-right-8 z-20 bg-[#1E293B]/95 border border-[#334155] backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-2xl shadow-black/60 flex items-center gap-3 animate-float-badge-1">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[#10B981]">
                <Zap className="w-5 h-5 fill-[#10B981]" />
              </div>
              <div>
                <div className="font-heading font-bold text-sm sm:text-base text-white flex items-center gap-1">
                  <span>99/100</span>
                  <span className="text-[10px] text-[#10B981] font-semibold px-1.5 py-0.5 bg-emerald-500/10 rounded">A+</span>
                </div>
                <div className="text-[11px] text-slate-400">PageSpeed Performance</div>
              </div>
            </div>

            {/* Floating Metric 2: Mobile Ready */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 z-20 bg-[#1E293B]/95 border border-[#334155] backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-2xl shadow-black/60 flex items-center gap-3 animate-float-badge-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-[#06B6D4]">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-bold text-sm sm:text-base text-white">
                  100% Mobile Ready
                </div>
                <div className="text-[11px] text-slate-400">iOS & Android Responsive</div>
              </div>
            </div>

            {/* Realistic Browser Window Mockup */}
            <div
              id="hero-browser-mockup"
              className="w-full max-w-md bg-[#1E293B] border border-[#334155] rounded-2xl overflow-hidden shadow-2xl shadow-[#10B981]/15 animate-mockup"
            >
              {/* Window Header */}
              <div className="bg-[#0F172A] border-b border-[#334155] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[#1E293B] rounded-md text-[11px] text-slate-300 font-mono border border-[#334155]">
                  <Lock className="w-3 h-3 text-[#10B981]" />
                  <span>https://yourbusiness.sitespike.com</span>
                </div>
                <div className="w-6" />
              </div>

              {/* Interactive Mockup Content */}
              <div className="p-4 sm:p-5 bg-gradient-to-b from-[#1E293B] to-[#0B1120] text-left">
                {/* Mock Nav Tabs */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#334155]/60">
                  <div className="flex items-center gap-2">
                    <SiteSpikeLogo showText={false} iconSize={20} />
                    <span className="font-heading text-xs font-bold text-white">ApexDining</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveMockTab('landing')}
                      className={`text-[10px] px-2 py-0.5 rounded transition-all cursor-pointer font-medium ${
                        activeMockTab === 'landing' ? 'bg-[#10B981] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setActiveMockTab('menu')}
                      className={`text-[10px] px-2 py-0.5 rounded transition-all cursor-pointer font-medium ${
                        activeMockTab === 'menu' ? 'bg-[#10B981] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Menu
                    </button>
                    <button
                      onClick={() => setActiveMockTab('reviews')}
                      className={`text-[10px] px-2 py-0.5 rounded transition-all cursor-pointer font-medium ${
                        activeMockTab === 'reviews' ? 'bg-[#10B981] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Reviews
                    </button>
                  </div>
                </div>

                {/* Mock Active Tab View */}
                {activeMockTab === 'landing' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#10B981]/15 via-[#06B6D4]/10 to-transparent border border-[#10B981]/30">
                      <span className="inline-block text-[9px] uppercase tracking-wider font-bold text-[#10B981] mb-1 font-heading">
                        ★ Award Winning Local Dining
                      </span>
                      <div className="h-3 w-4/5 bg-gradient-to-r from-white to-slate-400 rounded-sm mb-1.5" />
                      <div className="h-2 w-3/5 bg-slate-600 rounded-sm mb-3" />
                      <div className="flex items-center gap-2">
                        <div className="px-3 py-1 rounded-full bg-[#10B981] text-[10px] font-bold text-slate-950 flex items-center gap-1 font-heading">
                          <span>Reserve Table</span>
                          <ArrowRight className="w-2.5 h-2.5" />
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-[#0F172A] text-[10px] font-medium text-slate-300 border border-[#334155]">
                          View 4.9★ Reviews
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2.5 rounded-lg bg-[#0F172A]/70 border border-[#334155] text-center">
                        <div className="text-[14px] font-bold text-[#10B981] font-heading">15 Min</div>
                        <div className="text-[9px] text-slate-400">Fast Pickup</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#0F172A]/70 border border-[#334155] text-center">
                        <div className="text-[14px] font-bold text-[#06B6D4] font-heading">100%</div>
                        <div className="text-[9px] text-slate-400">Farm Fresh</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#0F172A]/70 border border-[#334155] text-center">
                        <div className="text-[14px] font-bold text-amber-400 font-heading">Top 10</div>
                        <div className="text-[9px] text-slate-400">City Choice</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeMockTab === 'menu' && (
                  <div className="space-y-2 py-1">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-[#0F172A]/70 border border-[#334155]">
                      <div>
                        <div className="text-[11px] font-bold text-white">Truffle Pappardelle</div>
                        <div className="text-[9px] text-slate-400">Handmade pasta, wild mushrooms</div>
                      </div>
                      <span className="text-[11px] font-bold text-[#10B981]">$28</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-[#0F172A]/70 border border-[#334155]">
                      <div>
                        <div className="text-[11px] font-bold text-white">Wood-Fired Ribeye</div>
                        <div className="text-[9px] text-slate-400">Prime aged 16oz, rosemary butter</div>
                      </div>
                      <span className="text-[11px] font-bold text-[#10B981]">$46</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-[#0F172A]/70 border border-[#334155]">
                      <div>
                        <div className="text-[11px] font-bold text-white">Burrata & Heirloom</div>
                        <div className="text-[9px] text-slate-400">Aged balsamic glaze, basil</div>
                      </div>
                      <span className="text-[11px] font-bold text-[#10B981]">$19</span>
                    </div>
                  </div>
                )}

                {activeMockTab === 'reviews' && (
                  <div className="space-y-2 py-1">
                    <div className="p-2 rounded-lg bg-[#0F172A]/70 border border-[#334155]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-white">Sarah M.</span>
                        <span className="text-[9px] text-amber-400">★★★★★</span>
                      </div>
                      <p className="text-[9px] text-slate-300">"Online reservations were seamless and the food was extraordinary!"</p>
                    </div>
                    <div className="p-2 rounded-lg bg-[#0F172A]/70 border border-[#334155]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-white">David K.</span>
                        <span className="text-[9px] text-amber-400">★★★★★</span>
                      </div>
                      <p className="text-[9px] text-slate-300">"Super easy to order takeout on my phone. 10/10 website experience."</p>
                    </div>
                  </div>
                )}

                {/* Footer simulation */}
                <div className="mt-3 pt-2.5 border-t border-[#334155]/60 flex items-center justify-between text-[10px] text-slate-400">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                    <span>SSL Secured</span>
                  </div>
                  <span className="text-[#06B6D4] font-medium">Built by SiteSpike</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
