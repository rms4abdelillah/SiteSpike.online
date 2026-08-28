import { Clock, FileText, Eye, Check, X, Shield, Sparkles, MessageSquareOff } from 'lucide-react';

export default function WhyEmailSection() {
  const comparisonRows = [
    {
      feature: 'Free Interactive Custom Mockup Upfront',
      sitespike: true,
      traditional: false,
    },
    {
      feature: 'Zero Forced Zoom / Phone Sales Calls',
      sitespike: true,
      traditional: false,
    },
    {
      feature: 'Permanent Written Audit Trail of All Revisions',
      sitespike: true,
      traditional: false,
    },
    {
      feature: 'Transparent Flat-Rate Pricing (No Hidden Fees)',
      sitespike: true,
      traditional: false,
    },
    {
      feature: 'Fast 7-Day Average Turnaround',
      sitespike: true,
      traditional: false,
    },
    {
      feature: '100% Full Ownership & Zero Platform Lock-in',
      sitespike: true,
      traditional: 'Rarely (Hostage Retainers)',
    },
  ];

  return (
    <section id="why-email" className="py-24 bg-[#0F172A]/50 relative z-10 border-y border-[#334155]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-semibold text-[#10B981] uppercase tracking-wider mb-4">
            <MessageSquareOff className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Zero Wasted Meetings</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Why We Work{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#06B6D4] bg-clip-text text-transparent">
              100% via Email
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            No scheduling friction. No phone tag. Just crystal-clear written requirements, rapid mockups, and transparent delivery that respects your busy schedule.
          </p>
        </div>

        {/* 3 Core Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1 */}
          <div className="p-8 rounded-2xl bg-[#0F172A] border border-[#334155] hover:border-[#06B6D4]/60 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-[#06B6D4]/15 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4] mb-6">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-3">
              Save Your Precious Time
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              No 45-minute discovery calls that could have been a quick bullet list. Review designs and feedback on your own terms—whether that's between appointments or late in the evening.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-2xl bg-[#0F172A] border border-[#334155] hover:border-[#10B981]/60 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-3">
              100% Written Accountability
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every design decision, milestone date, and requested adjustment is logged in a clean email chain. Zero forgotten verbal promises and zero miscommunication.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-2xl bg-[#0F172A] border border-[#334155] hover:border-[#06B6D4]/60 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-[#06B6D4]/15 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4] mb-6">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-3">
              See Before You Pay $1
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Traditional agencies demand thousands in non-refundable retainers upfront. We build your personalized mockup first so you have total peace of mind before investing.
            </p>
          </div>

        </div>

        {/* Agency Comparison Table */}
        <div className="bg-[#0F172A] border border-[#334155] rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
          <div className="px-6 py-4 bg-[#1E293B] border-b border-[#334155] flex items-center justify-between">
            <span className="font-heading font-bold text-sm sm:text-base text-white">
              SiteSpike vs. Traditional Web Agencies
            </span>
            <span className="text-xs text-[#10B981] font-semibold flex items-center gap-1 font-heading">
              <Shield className="w-3.5 h-3.5 text-[#10B981]" />
              Direct Comparison
            </span>
          </div>

          <div className="divide-y divide-[#334155]/60 text-xs sm:text-sm">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-[#1E293B]/70 transition-colors">
                <div className="col-span-6 sm:col-span-7 font-medium text-slate-200">
                  {row.feature}
                </div>
                <div className="col-span-3 sm:col-span-3 text-center flex items-center justify-center gap-1 font-bold text-[#10B981] font-heading">
                  <Check className="w-4 h-4 text-[#10B981]" />
                  <span className="hidden sm:inline">Included</span>
                </div>
                <div className="col-span-3 sm:col-span-2 text-center text-slate-500 flex items-center justify-center">
                  {typeof row.traditional === 'boolean' ? (
                    row.traditional ? (
                      <Check className="w-4 h-4 text-slate-400" />
                    ) : (
                      <X className="w-4 h-4 text-rose-500/80" />
                    )
                  ) : (
                    <span className="text-[11px] text-rose-400/90">{row.traditional}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
