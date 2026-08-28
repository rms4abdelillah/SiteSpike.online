import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import BrandValuesSection from './components/BrandValuesSection';
import ProcessSection from './components/ProcessSection';
import PortfolioSection from './components/PortfolioSection';
import ProjectModal from './components/ProjectModal';
import WhyEmailSection from './components/WhyEmailSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Project } from './types';

export default function App() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('website-5');
  const [prefilledPlan, setPrefilledPlan] = useState<string>('');

  const scrollToContact = () => {
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId: string) => {
    setPrefilledService(serviceId);
    scrollToContact();
  };

  const handleSelectPlan = (planName: string) => {
    setPrefilledPlan(planName);
    scrollToContact();
  };

  const handleSelectProjectForMockup = (project: Project) => {
    setActiveModalProject(null);
    setPrefilledPlan(`Similar to ${project.title} (${project.categoryLabel})`);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 selection:bg-[#10B981] selection:text-slate-950 font-sans antialiased">
      {/* Background Animated Grid & Ambient Orbs */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0" />
      
      {/* Persistent Orbs */}
      <div className="fixed top-10 right-0 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-[120px] pointer-events-none z-0 animate-orb-1" />
      <div className="fixed bottom-20 left-0 w-[450px] h-[450px] bg-[#06B6D4]/10 rounded-full blur-[120px] pointer-events-none z-0 animate-orb-2" />
      <div className="fixed top-1/2 left-1/3 w-[350px] h-[350px] bg-[#10B981]/8 rounded-full blur-[100px] pointer-events-none z-0 animate-orb-3" />

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Navbar onOpenMockupForm={scrollToContact} />
        
        <main>
          <Hero onOpenMockupForm={scrollToContact} />
          
          <ServicesSection onSelectService={handleSelectService} />
          
          <BrandValuesSection onOpenMockupForm={scrollToContact} />
          
          <ProcessSection onOpenMockupForm={scrollToContact} />
          
          <PortfolioSection onOpenProjectModal={(proj) => setActiveModalProject(proj)} />
          
          <WhyEmailSection />
          
          <PricingSection onSelectPlan={handleSelectPlan} />
          
          <TestimonialsSection />
          
          <FAQSection />
          
          <CTASection onOpenMockupForm={scrollToContact} />
          
          <ContactSection
            prefilledService={prefilledService}
            prefilledPlan={prefilledPlan}
          />
        </main>

        <Footer />
      </div>

      {/* Interactive Project Case Study Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onSelectProjectForMockup={handleSelectProjectForMockup}
        />
      )}
    </div>
  );
}
