import { Sparkles, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
  onOpenMockupForm: () => void;
}

export default function CTASection({ onOpenMockupForm }: CTASectionProps) {
  return (
    <section id="cta" className="py-20 relative z-10 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#0B1120] border-2 border-[#10B981]/50 p-8 sm:p-14 lg:p-16 text-center shadow-2xl shadow-[#10B981]/15">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#06B6D4]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A] border border-[#10B981]/40 text-xs font-semibold text-[#10B981] uppercase tracking-wider mb-6 font-heading">
              <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Zero Risk • 48-Hour Turnaround</span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Ready to See Your{' '}
              <span className="bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#06B6D4] bg-clip-text text-transparent">
                Future Website?
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto">
              Fill out our simple form and receive a custom, interactive mockup of your new website within 48 hours. No phone calls. No credit card required.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                id="cta-bottom-request-btn"
                onClick={onOpenMockupForm}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-bold text-slate-950 bg-gradient-to-r from-[#10B981] to-[#06B6D4] hover:from-[#22C55E] hover:to-[#38BDF8] shadow-xl shadow-[#10B981]/25 hover:scale-105 active:scale-100 transition-all cursor-pointer font-heading"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>Get Your Free Mockup Now</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>

              <a
                href="mailto:spike@sitespike.online"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-slate-200 bg-[#0F172A] hover:bg-[#1E293B] border border-[#334155] hover:border-[#10B981] transition-all font-heading"
              >
                <Mail className="w-5 h-5 text-[#06B6D4]" />
                <span>Email Us Directly</span>
              </a>
            </div>

            {/* Guarantees Bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>100% Free & No Obligation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Delivered Within 48 Hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Zero Phone Calls Required</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
