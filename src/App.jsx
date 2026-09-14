import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { projects } from './data/projects';
import Navigation from './components/Navigation';
import SectionHeader from './components/SectionHeader';
import ProjectCard from './components/ProjectCard';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ResumeView from './views/ResumeView';
import UpdatesView from './views/UpdatesView';
import ContactView from './views/ContactView';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] } 
  },
  exit: { 
    opacity: 0, 
    y: -12, 
    transition: { duration: 0.2, ease: "easeIn" } 
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  const categories = [
    'All', 
    'Level Design', 
    'Game Programming', 
    '3D Art', 
    '2D Art', 
    'Game Design', 
    'Team Project'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => {
        const projectCategories = Array.isArray(p.categories)
          ? p.categories
          : p.category
          ? [p.category]
          : [];

        return projectCategories.some(
          (cat) => cat.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
        );
      });

  return (
    <div className="min-h-screen bg-[#0f1115] text-[#e5e7eb] flex">
      {/* Persistent Left Sidebar (Desktop w-72) */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 md:ml-72 p-6 md:p-10 lg:p-12 pt-20 md:pt-12 min-h-screen">
        <div className="max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            {/* Home View */}
            {activeTab === 'home' && (
              <motion.div key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <HomeView setActiveTab={setActiveTab} />
              </motion.div>
            )}

            {/* Projects View */}
            {activeTab === 'projects' && (
              <motion.div key="projects" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-8 w-full">
                <div>
                  <SectionHeader 
                    tag="Project Registry"
                    title="Featured Projects"
                    subtitle="Interactive level designs, greybox layouts, and playable mechanics built across Unity and Unreal."
                    meta="TOTAL_BUILDS: 04"
                  />

                  {/* Filter Pills */}
                  <div className="flex flex-wrap gap-2 -mt-4 mb-8">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                          selectedCategory === cat
                            ? 'bg-[var(--color-brand-orange)] text-black border-[var(--color-brand-orange)] font-bold shadow-md shadow-[var(--color-brand-orange)]/15'
                            : 'bg-white/5 text-gray-400 border-white/5 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2-column or 3-column project cards layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* About View */}
            {activeTab === 'about' && (
              <motion.div key="about" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full">
                <AboutView />
              </motion.div>
            )}

            {/* Resume View */}
            {activeTab === 'resume' && (
              <motion.div key="resume" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full">
                <ResumeView />
              </motion.div>
            )}

            {/* Dev Updates View */}
            {activeTab === 'updates' && (
              <motion.div key="updates" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full">
                <UpdatesView />
              </motion.div>
            )}

            {/* Contact View */}
            {activeTab === 'contact' && (
              <motion.div key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="w-full">
                <ContactView />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}