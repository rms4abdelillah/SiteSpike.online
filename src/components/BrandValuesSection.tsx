import { Zap, TrendingUp, ShieldCheck, UserCheck, ArrowRight, Sparkles } from 'lucide-react';

interface BrandValuesSectionProps {
  onOpenMockupForm?: () => void;
}

export default function BrandValuesSection({ onOpenMockupForm }: BrandValuesSectionProps) {
  const brandValues = [
    {
      id: 'innovation',
      title: 'Innovation',
      icon: Zap,
      accentColor: '#06B6D4',
      bgGlow: 'bg-[#06B6D4]/10',
      borderColor: 'group-hover:border-[#06B6D4]/60',
      description: 'Cutting-edge modern frameworks, lightning-fast Core Web Vitals, and forward-thinking digital designs built to outpace competition.',
    },
    {
      id: 'growth',
      title: 'Growth',
      icon: TrendingUp,
      accentColor: '#10B981',
      bgGlow: 'bg-[#10B981]/10',
      borderColor: 'group-hover:border-[#10B981]/60',
      description: 'Data-driven conversion architectures, local SEO dominance, and high-intent customer acquisition funnels that scale your bottom line.',
    },
    {
      id: 'reliability',
      title: 'Reliability',
      icon: ShieldCheck,
      accentColor: '#38BDF8',
      bgGlow: 'bg-[#38BDF8]/10',
      borderColor: 'group-hover:border-[#38BDF8]/60',
      description: 'Guaranteed 48-hour mockup delivery, 99.9% uptime architectures, SSL-encrypted security, and transparent written commitments.',
    },
    {
      id: 'client-focus',
      title: 'Client Focus',
      icon: UserCheck,
      accentColor: '#10B981',
      bgGlow: 'bg-[#10B981]/10',
      borderColor: 'group-hover:border-[#10B981]/60',
      description: '100% online asynchronous workflow, zero time-wasting meetings, direct email communication, and unconditional satisfaction guarantee.',
    },
  ];

  return (
    <section id="values" className="py-20 md:py-28 relative z-10 bg-[#0B1120] border-t border-[#334155]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-semibold text-[#10B981] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Our Foundation & Principles</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Brand Values That Power{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#06B6D4] bg-clip-text text-transparent">
              Digital Growth
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            SiteSpike is built around measurable results, technical precision, and absolute transparency. We treat every client's online presence as a high-performance growth asset.
          </p>
        </div>

        {/* 4 Brand Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {brandValues.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.id}
                id={`brand-val-${val.id}`}
                className={`group relative p-6 sm:p-7 rounded-2xl bg-[#0F172A] border border-[#334155] ${val.borderColor} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between`}
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-xl ${val.bgGlow} border border-[#334155] flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                      style={{ color: val.accentColor }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-widest font-heading"
                      style={{ color: val.accentColor }}
                    >
                      0{brandValues.indexOf(val) + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-2.5">
                    {val.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#334155]/60 flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                  <span>Learn how we deliver</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Mission Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-[#334155] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#10B981] font-heading">
              The SiteSpike Promise
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Upward Momentum & Measurable Results
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Our emblem represents growth, innovation, and achieving new peaks. The upward surge symbolizes upward momentum and tangible ROI for our clients nationwide.
            </p>
          </div>

          {onOpenMockupForm && (
            <button
              onClick={onOpenMockupForm}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-gradient-to-r from-[#10B981] to-[#06B6D4] hover:from-[#22C55E] hover:to-[#38BDF8] shadow-lg shadow-[#10B981]/25 transition-all font-heading cursor-pointer whitespace-nowrap"
            >
              <span>Get Free 48-Hour Mockup</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
