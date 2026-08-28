import { useState } from 'react';
import { HelpCircle, ChevronDown, Mail, Search } from 'lucide-react';
import { faqData } from '../data/mockData';
import { FAQItem } from '../types';

export default function FAQSection() {
  const [openIds, setOpenIds] = useState<string[]>(['1']);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 relative z-10 bg-[#0B1120]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-semibold text-[#10B981] uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#06B6D4] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-base text-slate-300 max-w-xl mx-auto mb-8">
            Everything you need to know about our free mockup guarantee, 100% email workflow, timelines, and ownership.
          </p>

          {/* Quick FAQ Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. mockup, payments, timeline)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#0F172A] border border-[#334155] rounded-full text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-all"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq: FAQItem) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#0F172A] border-[#10B981]/60 shadow-lg shadow-black/40'
                      : 'bg-[#0F172A]/70 border-[#334155] hover:border-[#334155]/90'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-heading text-sm sm:text-base font-bold text-white">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`p-1.5 rounded-full bg-[#1E293B] text-[#10B981] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 bg-[#10B981] text-slate-950' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#334155]/50 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-slate-400">
              No questions found matching "{searchQuery}". Email us directly below!
            </div>
          )}
        </div>

        {/* Have more questions helper */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#0F172A] border border-[#334155] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-white text-sm sm:text-base">
              Still have a question before requesting your mockup?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Email our senior web architects directly — average reply within 2 hours.
            </p>
          </div>
          <a
            href="mailto:spike@sitespike.online"
            className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#1E293B] hover:bg-[#10B981] hover:text-slate-950 border border-[#334155] hover:border-[#10B981] transition-all flex items-center gap-2 shrink-0 font-heading"
          >
            <Mail className="w-4 h-4 text-[#10B981]" />
            <span>spike@sitespike.online</span>
          </a>
        </div>

      </div>
    </section>
  );
}
