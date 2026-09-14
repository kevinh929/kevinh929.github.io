import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Gamepad2, Layers, Terminal, Sparkles, Compass } from 'lucide-react';

export default function AboutView() {
  return (
    <div className="w-full space-y-8">
      <SectionHeader 
        tag="Profile Dossier"
        title="About Me"
        subtitle="Background, design philosophy, and core motivations."
        meta="STATUS::SENIOR // BSU_GIMM"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Photo & Tech Spec Panel */}
        <div className="lg:col-span-4 space-y-4">
          <div className="rounded-2xl overflow-hidden border border-[#2a2f3d] bg-[#14171f] p-3 bg-engine-grid">
            <img 
              src="/images/MyselfEdited.jpg" 
              alt="Kevin Hoagland" 
              className="w-full h-auto rounded-xl object-cover border border-white/10"
            />
            <div className="pt-3 px-1">
              <h3 className="text-base font-bold font-[var(--font-display)] text-white">
                Kevin Hoagland
              </h3>
              <p className="text-xs font-mono text-[var(--color-brand-orange)]">
                Boise State University
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-[#2a2f3d] bg-[#14171f] space-y-2.5 text-xs font-mono text-gray-400">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>Standing</span>
              <span className="text-white font-bold">Senior</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>Program</span>
              <span className="text-white">GIMM</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span>Primary Engine</span>
              <span className="text-[var(--color-brand-orange)]">Unity</span>
            </div>
            <div className="flex justify-between">
              <span>Discipline</span>
              <span className="text-white">Level & World Design</span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Core Pillars */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 md:p-8 rounded-2xl border border-[#2a2f3d] bg-[#181b22] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-brand-orange)] uppercase tracking-wider">
              <Terminal size={14} />
              <span>Bio & Core Mission</span>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans">
              My name is Kevin Hoagland, and I am a game design student at Boise State University! I am currently in my senior year. I am a passionate gamer and game developer, and I enjoy playing and creating games that I can share with others! My main development focus is in Unity. My favorite games are currently Overwatch 2 and Minecraft with Destiny 2 sprinkled in but has taken the back burner post EOS. I occasionally stream on Twitch and YouTube, but I am looking to get back into it primarily as a way to document my progress on my projects and share them with others! The thing that drives me to keep moving towards game development and learning the skills I need to be successful is the idea of creating something that others can enjoy and share with their friends and family. I want to be able to create games that people can play and enjoy, and I want to be able to share my passion for gaming with others.
            </p>
          </div>

          {/* Pillars Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-[#2a2f3d] bg-[#14171f] flex items-start gap-3.5">
              <div className="p-2.5 rounded bg-[var(--color-brand-orange)]/10 text-[var(--color-brand-orange)] shrink-0">
                <Layers size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-[var(--font-display)]">Level Architecture</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">Greybox blockouts, sightline framing, environmental storytelling, and intentional pacing.</p>
              </div>
            </div>
            <div className="p-5 rounded-xl border border-[#2a2f3d] bg-[#14171f] flex items-start gap-3.5">
              <div className="p-2.5 rounded bg-[var(--color-brand-orange)]/10 text-[var(--color-brand-orange)] shrink-0">
                <Gamepad2 size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-[var(--font-display)]">Player Feel & Logic</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">Finite state machines, responsive movement buffering, coyote time, and physics controllers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}