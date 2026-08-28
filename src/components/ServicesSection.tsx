import { Rocket, Laptop, ShoppingCart, Code2, Sparkles, TrendingUp, Check, ArrowRight, Tag } from 'lucide-react';
import { servicesData } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-[#06B6D4]" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-[#10B981]" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-6 h-6 text-[#06B6D4]" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#10B981]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#06B6D4]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#10B981]" />;
      default:
        return <Laptop className="w-6 h-6 text-[#10B981]" />;
    }
  };

  return (
    <section id="services" className="py-24 relative z-10 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-semibold text-[#10B981] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Growth Services</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Engineered For{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#06B6D4] bg-clip-text text-transparent">
              Speed & Conversions
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From hyper-converting landing pages to full e-commerce storefronts and custom web applications, we build digital solutions that drive real results.
          </p>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service: ServiceItem) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative bg-[#0F172A] hover:bg-[#1E293B] border border-[#334155] hover:border-[#10B981]/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Icon & Popular Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-xl bg-[#1E293B] border border-[#334155] group-hover:border-[#10B981]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  {service.popular && (
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/30 px-3 py-1 rounded-full font-heading">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="font-heading text-xl font-bold text-white mb-2.5 group-hover:text-[#10B981] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Price Tag */}
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10B981] bg-[#10B981]/10 px-3 py-1.5 rounded-lg border border-[#10B981]/25 mb-6 font-heading">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Starting at {service.price}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 pt-5 border-t border-[#334155]/70 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.id)}
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-[#1E293B] hover:bg-[#10B981] hover:text-slate-950 border border-[#334155] hover:border-[#10B981] transition-all flex items-center justify-center gap-2 group/btn cursor-pointer font-heading"
              >
                <span>Request {service.title} Mockup</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
