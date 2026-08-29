import { Star, Quote, MapPin, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../data/mockData';
import { TestimonialItem } from '../types';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#0F172A]/70 relative z-10 border-y border-[#334155]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-semibold text-[#10B981] uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>4.9 / 5.0 Star Verified Reviews</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            What American Business Owners{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#06B6D4] bg-clip-text text-transparent">
              Say About SiteSpike
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From tech companies and creative studios to healthcare practices and growing brands, see how our zero-call email workflow delivers outsized results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((item: TestimonialItem) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className="bg-[#0F172A] border border-[#334155] hover:border-[#10B981]/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 group"
            >
              <div>
                {/* Star rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#10B981]/30 group-hover:text-[#10B981]/70 transition-colors" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#334155]/70 flex items-center gap-3.5">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-tr ${item.avatarColor} flex items-center justify-center font-heading font-extrabold text-sm text-slate-950 shadow-md`}
                >
                  {item.avatarText}
                </div>

                <div className="overflow-hidden">
                  <h4 className="font-heading text-sm font-bold text-white truncate flex items-center gap-1">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  </h4>
                  <div className="text-xs text-[#06B6D4] font-medium truncate">
                    {item.role}, {item.business}
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
