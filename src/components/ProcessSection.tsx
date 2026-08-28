import { FileText, Sparkles, Code2, Rocket, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenMockupForm: () => void;
}

export default function ProcessSection({ onOpenMockupForm }: ProcessSectionProps) {
  const steps = [
    {
      step: '01',
      title: 'Fill the Quick Form',
      description: 'Share your business details, target customers, and 2-3 design examples you admire in our 3-minute intake form.',
      icon: <FileText className="w-6 h-6 text-[#06B6D4]" />,
      badge: 'Takes 3 Minutes',
    },
    {
      step: '02',
      title: 'Get Free Mockup in 48h',
      description: 'Our senior designers produce a tailored, high-fidelity interactive mockup. You inspect the full visual layout before spending $1.',
      icon: <Sparkles className="w-6 h-6 text-[#10B981]" />,
      badge: 'Zero Obligation',
    },
    {
      step: '03',
      title: 'We Build & Refine',
      description: 'Love the mockup? Pay 50% deposit to commence development. We send live staging links and milestone progress via email.',
      icon: <Code2 className="w-6 h-6 text-[#06B6D4]" />,
      badge: '50% Initial Deposit',
    },
    {
      step: '04',
      title: 'Launch & Handoff',
      description: 'Once you 100% approve staging, pay the final balance. We configure your domain, SSL, analytics, and launch live!',
      icon: <Rocket className="w-6 h-6 text-[#10B981]" />,
      badge: 'Average 7 Days',
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#0F172A]/70 relative z-10 border-y border-[#334155]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-semibold text-[#10B981] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seamless Workflow</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Simple 4-Step{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#06B6D4] bg-clip-text text-transparent">
              Zero-Risk Process
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            100% asynchronous and email-first. No scheduling conflicts or endless phone meetings. Transparent milestone updates delivered straight to your inbox.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              id={`process-step-${item.step}`}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#0F172A] border border-[#334155] hover:border-[#10B981]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 group"
            >
              {/* Step Number Circle */}
              <div className="w-16 h-16 rounded-2xl bg-[#1E293B] border-2 border-[#334155] group-hover:border-[#10B981] group-hover:bg-gradient-to-tr group-hover:from-[#10B981] group-hover:to-[#06B6D4] flex items-center justify-center font-heading font-extrabold text-xl text-[#10B981] group-hover:text-slate-950 mb-6 shadow-lg transition-all duration-300 transform group-hover:scale-110">
                {item.step}
              </div>

              {/* Tag / Badge */}
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 px-2.5 py-0.5 rounded-full mb-3 font-heading">
                {item.badge}
              </span>

              {/* Title & Description */}
              <h3 className="font-heading text-lg font-bold text-white mb-2.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>

              {/* Arrow indicator for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/3 transform -translate-y-1/2 z-20 text-[#10B981]/40">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Fast CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenMockupForm}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-gradient-to-r from-[#10B981] to-[#06B6D4] hover:from-[#22C55E] hover:to-[#38BDF8] shadow-lg shadow-[#10B981]/25 hover:shadow-[#10B981]/40 hover:scale-105 active:scale-100 transition-all cursor-pointer font-heading"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Start Step 01: Request Free Custom Mockup</span>
          </button>
        </div>

      </div>
    </section>
  );
}
