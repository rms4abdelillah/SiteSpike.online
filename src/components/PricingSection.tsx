import { useState } from 'react';
import { Check, X, Sparkles, ArrowRight, Clock, Calculator } from 'lucide-react';
import { pricingPlansData } from '../data/mockData';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [activeTab, setActiveTab] = useState<'plans' | 'calculator'>('plans');

  // Custom estimator calculator state
  const [calcPageCount, setCalcPageCount] = useState<number>(5);
  const [calcHasEcommerce, setCalcHasEcommerce] = useState<boolean>(false);
  const [calcHasBooking, setCalcHasBooking] = useState<boolean>(false);
  const [calcHasSEO, setCalcHasSEO] = useState<boolean>(true);
  const [calcRushDelivery, setCalcRushDelivery] = useState<boolean>(false);

  // Calculate live estimate
  const basePrice = 297;
  const pageAddon = Math.max(0, calcPageCount - 1) * 75;
  const ecommerceAddon = calcHasEcommerce ? 900 : 0;
  const bookingAddon = calcHasBooking ? 350 : 0;
  const seoAddon = calcHasSEO ? 200 : 0;
  const rushAddon = calcRushDelivery ? 400 : 0;
  const totalEstimate = basePrice + pageAddon + ecommerceAddon + bookingAddon + seoAddon + rushAddon;

  return (
    <section id="pricing" className="py-24 relative z-10 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-semibold text-[#10B981] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Zero Hidden Fees</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Transparent Flat-Rate{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#06B6D4] bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Clear, honest pricing with 50% deposit only after you approve your free mockup. No hidden monthly hostage fees or surprise invoices.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0F172A] border border-[#334155]">
            <button
              onClick={() => setActiveTab('plans')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer font-heading ${
                activeTab === 'plans'
                  ? 'bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-slate-950 font-bold shadow-md shadow-[#10B981]/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Standard Packages
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer font-heading ${
                activeTab === 'calculator'
                  ? 'bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-slate-950 font-bold shadow-md shadow-[#10B981]/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Interactive Quote Builder</span>
            </button>
          </div>
        </div>

        {/* View 1: 3 Standard Tier Cards */}
        {activeTab === 'plans' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlansData.map((plan: PricingPlan) => (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  plan.featured
                    ? 'bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#0B1120] border-2 border-[#10B981] shadow-2xl shadow-[#10B981]/20 lg:-translate-y-2'
                    : 'bg-[#0F172A] border border-[#334155] hover:border-[#10B981]/50'
                }`}
              >
                {/* Popular Badge */}
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#10B981] to-[#06B6D4] shadow-lg shadow-[#10B981]/30 font-heading">
                    {plan.badge || 'Most Popular Choice'}
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 min-h-[38px] mb-6">
                    {plan.tagline}
                  </p>

                  {/* Price Block */}
                  <div className="pb-6 mb-6 border-b border-[#334155]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-slate-400 font-medium">Starting at</span>
                    </div>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
                        ${plan.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ flat project</span>
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-xs text-[#10B981] font-semibold font-heading">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {plan.deliveryTime}
                      </span>
                      <span>•</span>
                      <span>{plan.revisions}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8 text-xs sm:text-sm">
                    {plan.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2.5 ${
                          feat.included ? 'text-slate-200' : 'text-slate-500 opacity-60'
                        }`}
                      >
                        {feat.included ? (
                          <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                        )}
                        <span>{feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Select CTA */}
                <button
                  id={`select-plan-btn-${plan.id}`}
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer font-heading ${
                    plan.featured
                      ? 'bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-slate-950 shadow-xl shadow-[#10B981]/25 hover:from-[#22C55E] hover:to-[#38BDF8] hover:scale-105 active:scale-100'
                      : 'bg-[#1E293B] hover:bg-[#10B981] text-slate-200 hover:text-slate-950 border border-[#334155]'
                  }`}
                >
                  <span>Select {plan.name} & Request Mockup</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* View 2: Interactive Quote Calculator */}
        {activeTab === 'calculator' && (
          <div className="max-w-3xl mx-auto bg-[#0F172A] border border-[#334155] rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                Custom Website Investment Estimator
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Adjust sliders and toggle add-ons to simulate your exact customized scope.
              </p>
            </div>

            <div className="space-y-6">
              {/* Slider: Number of Pages */}
              <div className="p-4 rounded-2xl bg-[#0B1120] border border-[#334155]">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-white">Number of Custom Pages</label>
                  <span className="text-base font-bold text-[#10B981] font-heading">{calcPageCount} Pages</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={calcPageCount}
                  onChange={(e) => setCalcPageCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#1E293B] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>1 Page (Landing Page)</span>
                  <span>5 Pages (Standard)</span>
                  <span>15 Pages (Enterprise)</span>
                </div>
              </div>

              {/* Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex items-center justify-between p-4 rounded-xl bg-[#0B1120] border border-[#334155] cursor-pointer hover:border-[#10B981]/50 transition-colors">
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-white">E-Commerce & Cart</div>
                    <div className="text-[11px] text-slate-400">Stripe/Shopify payments</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={calcHasEcommerce}
                    onChange={(e) => setCalcHasEcommerce(e.target.checked)}
                    className="w-5 h-5 accent-[#10B981] rounded cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-4 rounded-xl bg-[#0B1120] border border-[#334155] cursor-pointer hover:border-[#10B981]/50 transition-colors">
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-white">Online Booking Engine</div>
                    <div className="text-[11px] text-slate-400">Calendar & appointment sync</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={calcHasBooking}
                    onChange={(e) => setCalcHasBooking(e.target.checked)}
                    className="w-5 h-5 accent-[#10B981] rounded cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-4 rounded-xl bg-[#0B1120] border border-[#334155] cursor-pointer hover:border-[#10B981]/50 transition-colors">
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-white">Advanced Local SEO Pack</div>
                    <div className="text-[11px] text-slate-400">Schema & Google Maps sync</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={calcHasSEO}
                    onChange={(e) => setCalcHasSEO(e.target.checked)}
                    className="w-5 h-5 accent-[#10B981] rounded cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-4 rounded-xl bg-[#0B1120] border border-[#334155] cursor-pointer hover:border-[#10B981]/50 transition-colors">
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-white">Rush 4-Day Turnaround</div>
                    <div className="text-[11px] text-slate-400">Priority expedited delivery</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={calcRushDelivery}
                    onChange={(e) => setCalcRushDelivery(e.target.checked)}
                    className="w-5 h-5 accent-[#10B981] rounded cursor-pointer"
                  />
                </label>
              </div>

              {/* Total Calculated Output */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#10B981]/15 via-[#1E293B] to-[#06B6D4]/15 border border-[#10B981]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold font-heading">
                    Estimated Project Investment
                  </div>
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                    ${totalEstimate.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-[#10B981] font-semibold">50% (${Math.round(totalEstimate / 2).toLocaleString()}) only due after mockup approval</div>
                </div>

                <button
                  onClick={() => onSelectPlan(`Custom Scope (~$${totalEstimate})`)}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-sm text-slate-950 bg-gradient-to-r from-[#10B981] to-[#06B6D4] hover:from-[#22C55E] hover:to-[#38BDF8] shadow-lg shadow-[#10B981]/25 hover:scale-105 active:scale-100 transition-all cursor-pointer shrink-0 font-heading"
                >
                  Lock In Estimate & Get Free Mockup
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
