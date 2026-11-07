import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TechStackSection from './components/TechStackSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import AchievementsSection from './components/AchievementsSection';
import CodingUniverseSection from './components/CodingUniverseSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-zinc-100 relative font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12">
        {/* 01 - Home */}
        <HeroSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* 02 - About */}
        <AboutSection />

        {/* 03 - Tech Stack */}
        <TechStackSection />

        {/* 04 - Featured Projects (Exactly 2 projects from resume) */}
        <ProjectsSection />

        {/* 05 - Experience (JP IT Staffing LLC) */}
        <ExperienceSection />

        {/* 06 - Education & Certifications */}
        <EducationSection />

        {/* 07 - Achievements */}
        <AchievementsSection />

        {/* 08 - Coding Universe */}
        <CodingUniverseSection />

        {/* 09 - Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
