
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import CertificationsSection from './components/sections/CertificationsSection';
import ContactSection from './components/sections/ContactSection';
import CustomCursor from './components/layout/CustomCursor';
import { Suspense } from 'react';

// Loader for heavy 3D elements
const Loader = () => (
  <div className="w-full h-screen flex flex-col items-center justify-center bg-obsidian-900 text-neon-cyan">
    <div className="w-12 h-12 border-4 border-neon-cyan/20 border-t-neon-cyan rounded-full animate-spin mb-4"></div>
    <span className="font-mono text-sm tracking-widest uppercase animate-pulse">Initializing System...</span>
  </div>
);

function App() {
  return (
    <div className="w-full min-h-screen bg-obsidian-900 text-gray-light font-sans selection:bg-neon-cyan selection:text-obsidian-900 overflow-hidden">
      <CustomCursor />
      <Navbar />
      <Suspense fallback={<Loader />}>
        <main className="relative z-10 w-full flex flex-col items-center">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
