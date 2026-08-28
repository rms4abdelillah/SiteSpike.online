import { useState, useEffect, FormEvent } from 'react';
import { Mail, Clock, Sparkles, MapPin, ShieldCheck, Send, CheckCircle2, ArrowRight, RefreshCw, Copy, Check } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  prefilledService?: string;
  prefilledPlan?: string;
}

export default function ContactSection({ prefilledService, prefilledPlan }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    business: '',
    industry: '',
    service: 'website-5',
    budget: '1000-2500',
    references: '',
    message: '',
    preferredTimeline: '7-10 days',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{
    id: string;
    submittedAt: string;
    data: ContactFormData;
  } | null>(null);
  const [copiedTicket, setCopiedTicket] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledPlan) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message
          ? `${prev.message}\n(Interested in Plan: ${prefilledPlan})`
          : `I am interested in getting a free mockup for the ${prefilledPlan} package.`,
      }));
    }
  }, [prefilledPlan]);

  const SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbz8SNT2aI7Z9PONIsdhRJrjT6J5b8mzaVDowdXEYSP08mOTqtJhJbvS-FHJVBN0Cnh8Cg/exec';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      fullName: formData.name,
      email: formData.email,
      businessName: formData.business,
      industry: formData.industry,
      websiteSolution: formData.service,
      budget: formData.budget,
      referenceSites: formData.references,
      goals: formData.message,
      preferredTimeline: formData.preferredTimeline,
      source: window.location.href,
    };

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const randomTicketId = `SSPK-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicket({
        id: randomTicketId,
        submittedAt: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        data: { ...formData },
      });
    } catch (error) {
      alert('Something went wrong while sending your request. Please try again or email spike@sitespike.online');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyTicket = () => {
    if (!submittedTicket) return;
    navigator.clipboard?.writeText(submittedTicket.id);
    setCopiedTicket(true);
    setTimeout(() => setCopiedTicket(false), 2500);
  };

  const handleResetForm = () => {
    setSubmittedTicket(null);
    setFormData({
      name: '',
      email: '',
      business: '',
      industry: '',
      service: 'website-5',
      budget: '1000-2500',
      references: '',
      message: '',
      preferredTimeline: '7-10 days',
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#0B1120] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-semibold text-[#10B981] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Zero-Cost Mockup Request</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Request Your Free{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#06B6D4] bg-clip-text text-transparent">
              Custom Mockup
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Fill out the brief form below and our design architects will deliver an interactive custom mockup of your future website within 48 hours. Completely free, no calls, no commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Guarantees & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0F172A] border border-[#334155] rounded-3xl p-8 space-y-6">
              <h3 className="font-heading text-2xl font-bold text-white">
                How Our Free Mockup Works
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We review your business vision, research your top competitors in your local market, and engineer a customized visual preview. Everything is delivered directly to your inbox with zero sales pressure.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#334155]">
                
                {/* Method 1: Email */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#1E293B]/60 border border-[#334155]">
                  <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Direct Design Inbox</div>
                    <div className="text-sm font-bold text-white font-heading">spike@sitespike.online</div>
                  </div>
                </div>

                {/* Method 2: Response Time */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#1E293B]/60 border border-[#334155]">
                  <div className="w-10 h-10 rounded-xl bg-[#06B6D4]/20 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Mockup Delivery Window</div>
                    <div className="text-sm font-bold text-white font-heading">Within 48 Business Hours</div>
                  </div>
                </div>

                {/* Method 3: Location */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#1E293B]/60 border border-[#334155]">
                  <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">Geographic Coverage</div>
                    <div className="text-sm font-bold text-white font-heading">Serving All 50 US States</div>
                  </div>
                </div>

                {/* Method 4: Guarantee */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#1E293B]/60 border border-[#334155]">
                  <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">100% Zero-Risk Guarantee</div>
                    <div className="text-sm font-bold text-white font-heading">No Obligation • No Credit Card</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Micro-Review snippet */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#10B981]/15 to-[#06B6D4]/15 border border-[#10B981]/30">
              <div className="flex items-center gap-1 text-amber-400 text-xs mb-2">
                ★★★★★ <span className="text-slate-300 font-semibold ml-1">Verified Client</span>
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "Seeing the custom mockup first gave us total confidence. SiteSpike launched our site in 6 days flat!"
              </p>
              <div className="text-[11px] text-slate-400 font-medium mt-2 font-heading">
                — Maria Rodriguez, Casa Bella Trattoria (Austin, TX)
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form or Confirmation Ticket */}
          <div className="lg:col-span-7">
            {submittedTicket ? (
              /* Success Confirmation Card */
              <div
                id="mockup-success-confirmation"
                className="bg-[#0F172A] border-2 border-[#10B981] rounded-3xl p-8 sm:p-10 shadow-2xl shadow-[#10B981]/20 animate-fadeIn"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#10B981]/20 border border-[#10B981] text-[#10B981] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="text-center mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#10B981] to-[#06B6D4] px-3 py-1 rounded-full font-heading">
                    Request Received Successfully
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-2">
                    Your Free Mockup is Being Crafted!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    We have dispatched your project details to our senior web architect. You will receive an email confirmation and mockup link within 48 hours.
                  </p>
                </div>

                {/* Ticket Details Summary */}
                <div className="p-5 rounded-2xl bg-[#0B1120] border border-[#334155] space-y-3 mb-8 text-xs sm:text-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-[#334155]">
                    <span className="text-slate-400">Mockup Ticket Reference</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[#10B981]">{submittedTicket.id}</span>
                      <button
                        onClick={handleCopyTicket}
                        className="p-1 text-slate-400 hover:text-white rounded transition-colors cursor-pointer"
                        title="Copy ticket ID"
                      >
                        {copiedTicket ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Client Name & Business</span>
                    <span className="font-semibold text-white">
                      {submittedTicket.data.name} ({submittedTicket.data.business})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Destination Email</span>
                    <span className="font-semibold text-[#06B6D4]">{submittedTicket.data.email}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Estimated Delivery</span>
                    <span className="font-semibold text-[#10B981]">Within 48 Hours</span>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-[#1E293B] border border-[#334155] hover:border-[#10B981] transition-all cursor-pointer font-heading"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Project Request</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Intake Form */
              <form
                id="contactForm"
                onSubmit={handleSubmit}
                className="bg-[#0F172A] border border-[#334155] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6"
              >
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-slate-300 mb-2 font-heading">
                      Full Name <span className="text-[#10B981]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#0B1120] border border-[#334155] rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-300 mb-2 font-heading">
                      Email Address <span className="text-[#10B981]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="john@yourbusiness.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#0B1120] border border-[#334155] rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Business & Industry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="business" className="block text-xs sm:text-sm font-medium text-slate-300 mb-2 font-heading">
                      Business Name <span className="text-[#10B981]">*</span>
                    </label>
                    <input
                      type="text"
                      id="business"
                      required
                      placeholder="e.g. Peak Dental LLC"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#0B1120] border border-[#334155] rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-xs sm:text-sm font-medium text-slate-300 mb-2 font-heading">
                      Industry / Business Niche <span className="text-[#10B981]">*</span>
                    </label>
                    <input
                      type="text"
                      id="industry"
                      required
                      placeholder="e.g. Restaurant, Dental, Fitness, Law, Roofing"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#0B1120] border border-[#334155] rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Service & Budget Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-slate-300 mb-2 font-heading">
                      Desired Website Solution <span className="text-[#10B981]">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#0B1120] border border-[#334155] rounded-xl text-white text-sm focus:outline-none focus:border-[#10B981] transition-all"
                    >
                      <option value="landing">Single Landing Page ($297+)</option>
                      <option value="website-3">Business Website — 3 Pages ($597+)</option>
                      <option value="website-5">Business Website — 5–7 Pages ($997+ / Most Popular)</option>
                      <option value="website-10">Business Website — 10+ Pages ($1,497+)</option>
                      <option value="ecommerce">E-Commerce Store ($1,997+)</option>
                      <option value="webapp">Custom Web App & Portal ($3,997+)</option>
                      <option value="redesign">Website Modern Redesign ($497+)</option>
                      <option value="other">Other / Custom Scope</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs sm:text-sm font-medium text-slate-300 mb-2 font-heading">
                      Approximate Budget Range
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#0B1120] border border-[#334155] rounded-xl text-white text-sm focus:outline-none focus:border-[#10B981] transition-all"
                    >
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 — $1,000</option>
                      <option value="1000-2500">$1,000 — $2,500 (Recommended)</option>
                      <option value="2500-5000">$2,500 — $5,000</option>
                      <option value="5000+">$5,000+</option>
                    </select>
                  </div>
                </div>

                {/* Reference Websites Input */}
                <div>
                  <label htmlFor="references" className="block text-xs sm:text-sm font-medium text-slate-300 mb-2 font-heading">
                    2–3 Websites You Love the Design or Feel Of
                  </label>
                  <input
                    type="text"
                    id="references"
                    placeholder="e.g. apple.com, airbnb.com, mycompetitor.com"
                    value={formData.references}
                    onChange={(e) => setFormData({ ...formData, references: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#0B1120] border border-[#334155] rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all"
                  />
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Helps our designers match your exact visual taste.
                  </span>
                </div>

                {/* Message / Project Goals */}
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-slate-300 mb-2 font-heading">
                    Tell Us About Your Goals & Target Customers <span className="text-[#10B981]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="What services do you offer? What is the main action you want visitors to take (call, book online, purchase, submit quote)? Any must-have features?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#0B1120] border border-[#334155] rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl font-bold text-base text-slate-950 bg-gradient-to-r from-[#10B981] to-[#06B6D4] hover:from-[#22C55E] hover:to-[#38BDF8] shadow-xl shadow-[#10B981]/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed font-heading"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin text-slate-950" />
                      <span>Transmitting Project Brief...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-slate-950" />
                      <span>Request 100% Free Custom Mockup (48h)</span>
                      <ArrowRight className="w-5 h-5 text-slate-950" />
                    </>
                  )}
                </button>

                <div className="text-center text-[11px] text-slate-400">
                  🔒 We respect your privacy. No spam. 100% confidential & zero obligation.
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
