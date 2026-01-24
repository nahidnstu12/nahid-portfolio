import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { AboutSection } from '@/sections/About';
import { Experience } from '@/sections/Experience';
import { Education } from '@/sections/Education';
import { SkillsSection } from '@/sections/Toolbox';
import { ProjectsSection } from '@/sections/Projects';
import { TapeSection } from '@/sections/Tape';
import { ContactSection } from '@/sections/Contact';
import { CTASection } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';
import { SkipLink } from '@/components/accessibility/SkipLink';

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <Experience />
        <Education />
        <SkillsSection />
        <TapeSection />
        <ProjectsSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
