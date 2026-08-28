import { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, Clock, Calendar, Laptop, MapPin, Tag, ArrowRight, Layers } from 'lucide-react';
import { Project } from '../types';
import { getOptimizedImageUrl } from '../utils/imageOptimizer';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProjectForMockup: (project: Project) => void;
}

export default function ProjectModal({ project, onClose, onSelectProjectForMockup }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);
  const [hasHeroError, setHasHeroError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Reset loaded state when changing image or project
  useEffect(() => {
    setIsHeroLoaded(false);
    setHasHeroError(false);
  }, [activeImageIndex, project?.id]);

  if (!project) return null;

  const modalImg = (project.heroImage && project.heroImage.trim() !== '' && project.heroImage !== '/')
    ? project.heroImage
    : ((project.image && project.image.trim() !== '' && project.image !== '/')
      ? project.image
      : (project.gallery && project.gallery.length > 0 && project.gallery[0]?.trim() !== '' ? project.gallery[0] : ''));

  const rawDisplayImage = activeImageIndex !== null
    ? (project.gallery[activeImageIndex] || modalImg)
    : modalImg;

  const hasDisplayImage = Boolean(rawDisplayImage && !hasHeroError);
  const optimizedHeroUrl = hasDisplayImage ? getOptimizedImageUrl(rawDisplayImage, 1200, 85) : '';

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#0F172A] border border-[#334155] rounded-3xl shadow-2xl shadow-black/90 my-8 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0B1120]/95 backdrop-blur-md border-b border-[#334155]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-heading">
              Project Case Study
            </span>
          </div>
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full bg-[#1E293B] hover:bg-[#10B981] text-slate-300 hover:text-slate-950 border border-[#334155] transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto custom-scrollbar p-6 sm:p-8 space-y-8">
          
          {/* Main Hero Image Display (Scrollable uncropped full-length view) */}
          <div className="relative w-full max-h-[70vh] overflow-y-auto rounded-xl bg-slate-950 border border-slate-800 custom-scrollbar group">
            {/* Loading Skeleton */}
            {hasDisplayImage && !isHeroLoaded && (
              <div className="absolute inset-0 min-h-[300px] bg-slate-800 animate-pulse z-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-2 border-[#10B981]/30 border-t-[#10B981] animate-spin" />
              </div>
            )}

            {hasDisplayImage ? (
              <img
                src={optimizedHeroUrl}
                alt={project.title}
                loading="lazy"
                decoding="async"
                onLoad={() => setIsHeroLoaded(true)}
                onError={() => setHasHeroError(true)}
                className={`w-full h-auto block object-top transition-all duration-500 ${
                  isHeroLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ) : null}

            {(!hasDisplayImage || hasHeroError) && (
              <div className="w-full min-h-[280px] flex flex-col items-center justify-center bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#1E293B] text-slate-400 p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-4 shadow-lg shadow-[#10B981]/10">
                  <Sparkles className="w-8 h-8" />
                </div>
                <span className="text-xl font-bold text-white font-heading">{project.title}</span>
                <span className="text-sm text-[#10B981] mt-1 font-semibold">{project.categoryLabel}</span>
                {project.servicesProvided && project.servicesProvided.length > 0 && (
                  <div className="mt-3 flex items-center gap-2 flex-wrap justify-center">
                    {project.servicesProvided.map((s, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 rounded-full bg-[#1E293B] text-slate-300 border border-[#334155]">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {/* Metric Floating Badge */}
            {project.metrics && (
              <div className="sticky bottom-4 left-4 z-10 inline-flex m-4 px-4 py-2 rounded-xl bg-[#1E293B]/90 border border-[#10B981]/40 backdrop-blur-md text-xs sm:text-sm font-bold text-[#10B981] shadow-lg items-center gap-2 font-heading">
                <Sparkles className="w-4 h-4 text-[#10B981]" />
                <span>{project.metrics}</span>
              </div>
            )}
          </div>

          {/* Screenshot Gallery Selector */}
          {project.gallery && project.gallery.length > 0 && project.gallery.some(img => img.trim() !== '') && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider font-heading">
                <Layers className="w-4 h-4 text-[#06B6D4]" />
                <span>Screenshots & Details (Click to preview)</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {project.heroImage && (
                  <button
                    onClick={() => setActiveImageIndex(null)}
                    className={`relative rounded-xl overflow-hidden aspect-video border-2 transition-all cursor-pointer bg-[#0F172A] ${
                      activeImageIndex === null ? 'border-[#10B981] scale-105 shadow-md shadow-[#10B981]/20' : 'border-[#334155] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={getOptimizedImageUrl(project.heroImage, 300, 75)}
                      alt="Main view"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </button>
                )}
                {project.gallery.filter(img => img.trim() !== '').map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-video border-2 transition-all cursor-pointer bg-[#0F172A] ${
                      activeImageIndex === idx ? 'border-[#10B981] scale-105 shadow-md shadow-[#10B981]/20' : 'border-[#334155] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={getOptimizedImageUrl(img, 300, 75)}
                      alt={`Gallery view ${idx + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Title & Category Bar */}
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/30 font-heading">
                {project.categoryLabel}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-slate-300 bg-[#1E293B] border border-[#334155]">
                {project.platform}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-slate-300 bg-[#1E293B] border border-[#334155] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#06B6D4]" />
                {project.location}
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#0B1120] border border-[#334155]">
            <div className="p-2">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-1 font-heading">
                <Clock className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>Turnaround</span>
              </div>
              <div className="text-sm font-bold text-white font-heading">{project.duration}</div>
            </div>

            <div className="p-2">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-1 font-heading">
                <Laptop className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Framework</span>
              </div>
              <div className="text-sm font-bold text-white font-heading">{project.platform}</div>
            </div>

            <div className="p-2">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-1 font-heading">
                <Calendar className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>Delivered</span>
              </div>
              <div className="text-sm font-bold text-white font-heading">{project.year}</div>
            </div>

            <div className="p-2">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-1 font-heading">
                <Tag className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Client</span>
              </div>
              <div className="text-sm font-bold text-white truncate font-heading">{project.client}</div>
            </div>
          </div>

          {/* Detailed Project Story */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-3">
              Project Overview & Challenge Solved
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features Built */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
              <span>Key Features & Conversions Engineered</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 p-2.5 rounded-lg bg-[#1E293B]/60 border border-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services Provided */}
          {project.servicesProvided && project.servicesProvided.length > 0 && (
            <div>
              <h3 className="font-heading text-lg font-bold text-white mb-3">
                Services Provided
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.servicesProvided.map((service, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/30 font-heading"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Stack */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-3">
              Technologies & Integrations
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 font-heading"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Box inside Modal */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#10B981]/15 via-[#1E293B] to-[#06B6D4]/15 border border-[#10B981]/30 text-center space-y-4">
            <h4 className="font-heading text-xl font-bold text-white">
              Want a similar high-converting website for your business?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
              We can craft a free custom mockup tailored to your exact industry in 48 hours. No calls, no pressure.
            </p>
            <button
              onClick={() => onSelectProjectForMockup(project)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-gradient-to-r from-[#10B981] to-[#06B6D4] hover:from-[#22C55E] hover:to-[#38BDF8] shadow-xl shadow-[#10B981]/25 hover:scale-105 active:scale-100 transition-all cursor-pointer font-heading"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Request Free Mockup in This Style</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
