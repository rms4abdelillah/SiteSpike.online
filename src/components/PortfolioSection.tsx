import React, { useState } from 'react';
import { Sparkles, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { projectsData } from '../data/mockData';
import { Project, ProjectCategory } from '../types';
import { getOptimizedImageUrl } from '../utils/imageOptimizer';

interface PortfolioSectionProps {
  onOpenProjectModal: (project: Project) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Website Design',
  'Website Development',
  'UX Design',
  'E-Commerce',
  'Web Applications',
];

interface ProjectCardProps {
  key?: string;
  project: Project;
  onOpenModal: (project: Project) => void;
}

function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const rawImg = (project.image && project.image.trim() !== '' && project.image !== '/')
    ? project.image
    : ((project.heroImage && project.heroImage.trim() !== '' && project.heroImage !== '/') ? project.heroImage : '');

  const hasImage = Boolean(rawImg && !hasError);
  const optimizedUrl = hasImage ? getOptimizedImageUrl(rawImg, 600, 80) : '';

  return (
    <div
      id={`portfolio-item-${project.id}`}
      onClick={() => onOpenModal(project)}
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0F172A] border border-[#334155] hover:border-[#10B981] cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70 group-hover:will-change-transform"
    >
      {/* Animated Dark Skeleton Pulse (shown while loading) */}
      {hasImage && !isLoaded && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse z-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#10B981]/30 border-t-[#10B981] animate-spin" />
        </div>
      )}

      {/* Card Background Media */}
      {hasImage ? (
        <img
          src={optimizedUrl}
          alt={project.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : null}

      {/* Fallback Graphic (shown if no image or error) */}
      {(!hasImage || hasError) && (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#1E293B] text-slate-400 p-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-3 shadow-lg shadow-[#10B981]/10 group-hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-sm font-bold text-white font-heading px-3 line-clamp-1 group-hover:text-[#10B981] transition-colors">
            {project.title}
          </span>
          <span className="text-xs text-[#10B981] mt-1 font-semibold">
            {project.categoryLabel}
          </span>
        </div>
      )}

      {/* Default subtle ambient vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />

      {/* Sleek Dark Hover Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 backdrop-blur-[2px]">
        <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
          {/* Category Accent */}
          <span className="text-[11px] font-bold text-[#10B981] uppercase tracking-wider font-heading block mb-1.5">
            {project.categoryLabel}
          </span>

          {/* Project Title */}
          <h3 className="font-heading text-lg font-bold text-white leading-snug mb-3 line-clamp-2">
            {project.title}
          </h3>

          {/* Minimalist Action Link */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-[#10B981] transition-colors font-heading pt-2 border-t border-[#334155]/60">
            <span>View Project</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-[#10B981]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection({ onOpenProjectModal }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === 'All') return true;
    return (
      p.category === selectedCategory ||
      p.categoryLabel.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (p.servicesProvided && p.servicesProvided.some(s => s.toLowerCase().includes(selectedCategory.toLowerCase())))
    );
  });

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 8);

  return (
    <section id="portfolio" className="py-24 relative z-10 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-semibold text-[#10B981] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Featured Client{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#06B6D4] bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Real websites engineered for real local businesses across America. Click on any project to explore the interactive case study, live metrics, and technology stack.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              id={`filter-btn-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer font-heading ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-slate-950 font-bold shadow-md shadow-[#10B981]/25 scale-105'
                  : 'bg-[#0F172A] text-slate-300 hover:text-white border border-[#334155] hover:border-[#10B981]/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={onOpenProjectModal}
            />
          ))}
        </div>

        {/* Show More / Show Less Toggle Button */}
        {filteredProjects.length > 8 && (
          <div className="mt-12 text-center">
            <button
              id="portfolio-show-more-toggle"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold text-slate-200 bg-[#0F172A] hover:bg-[#1E293B] border border-[#334155] hover:border-[#10B981] transition-all cursor-pointer shadow-lg font-heading"
            >
              <span>{showAll ? 'Show Less Projects' : `Show All ${filteredProjects.length} Projects`}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-[#10B981]" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
