import React, { useState } from 'react';
import ThreeWorkspace from './components/ThreeWorkspace';
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
    <div className="min-h-screen bg-[#05070f] text-slate-100 relative font-sans selection:bg-cyan-500 selection:text-black">
      {/* Smooth 3D Interactive Background */}
      <ThreeWorkspace />

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

        {/* 04 - Featured Projects */}
        <ProjectsSection />

        {/* 05 - Experience */}
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
