import { motion } from 'framer-motion';
import { updates } from '../data/updates';
import { 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  Compass, 
  Box, 
  Layers, 
  Tv,
  Gamepad2,
  Cpu
} from 'lucide-react';

export default function HomeView({ setActiveTab }) {
  const latestUpdate = updates[0];

  const designPillars = [
    {
      icon: Compass,
      title: "Spatial Pacing & Flow",
      desc: "Guiding player movement through architectural landmarks, sightlines, and natural lighting cues."
    },
    {
      icon: Box,
      title: "Tactile Greyboxing",
      desc: "Iterative whitebox blockouts evaluated for jump arcs, mantle clearance, and combat traversal."
    },
    {
      icon: Layers,
      title: "Environmental Narrative",
      desc: "Constructing obsolete analog spaces that convey history without heavy UI handholding."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="w-full space-y-8 relative"
    >
      {/* 1. Hero / Welcome Header */}
      <section className="relative p-6 md:p-8 rounded-2xl border border-[#2a2f3d] bg-[#181b22]/90 backdrop-blur-md overflow-hidden bg-engine-grid">
        <div className="absolute top-3 right-4 text-[10px] font-mono text-gray-500 select-none">
          SYS::ACTIVE // URP 6.0
        </div>

        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[var(--color-brand-orange)]/10 border border-[var(--color-brand-orange)]/30 text-[11px] font-mono text-[var(--color-brand-orange)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)] animate-ping" />
            Level & World Design
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold font-[var(--font-display)] text-white tracking-tight">
            Building spaces that tell stories.
          </h2>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed font-sans pt-1">
            Welcome to my portfolio. I specialize in spatial layout, grayboxing, and player movement physics across Unity and Unreal. Explore current interactive mechanics, viewable 3D asset dioramas, or track progress across active project builds below.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('projects')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--color-brand-orange)] text-black hover:bg-orange-400 transition-all shadow-md shadow-[var(--color-brand-orange)]/20"
            >
              <span>Explore Projects</span>
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
            >
              <span>About My Approach</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Core Disciplines */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {designPillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div 
              key={pillar.title}
              className="p-5 rounded-xl border border-[#2a2f3d] bg-[#14171f] hover:border-[var(--color-brand-orange)]/40 transition-all space-y-2"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-orange)]/10 text-[var(--color-brand-orange)] flex items-center justify-center border border-[var(--color-brand-orange)]/20">
                <Icon size={16} />
              </div>
              <h3 className="text-sm font-bold font-[var(--font-display)] text-white">
                {pillar.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </section>

      {/* 3. 2-Column Responsive Layout for Desktop Screen Utilization */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Left 7 Columns: Latest Devlog Entry */}
        <div className="xl:col-span-7 space-y-6">
          {latestUpdate && (
            <section className="p-6 md:p-8 rounded-2xl border border-[#2a2f3d] bg-[#181b22] space-y-5 transition-all hover:border-white/20">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-sm bg-[var(--color-brand-orange)]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-brand-orange)]">
                    Latest Devlog Entry
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <Calendar size={13} className="text-[var(--color-brand-orange)]" />
                  <span>{latestUpdate.date}</span>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold font-[var(--font-display)] text-white">
                {latestUpdate.title}
              </h3>

              <div className="space-y-3 text-sm text-gray-300 leading-relaxed font-sans">
                {Array.isArray(latestUpdate.content) ? (
                  latestUpdate.content.map((p, idx) => <p key={idx}>{p}</p>)
                ) : (
                  <p>{latestUpdate.content}</p>
                )}
              </div>

              {latestUpdate.youtubeId && (
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-lg">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${latestUpdate.youtubeId}`}
                    title={latestUpdate.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* Mood GIF Terminal Panel */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-4 border-t border-white/5">
                {latestUpdate.mood?.gif && (
                  <div className="inline-block rounded-xl overflow-hidden border border-white/10 bg-black/40 p-2.5 shadow-md">
                    <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 pb-1.5 px-1 border-b border-white/5 mb-2">
                      <span className="flex items-center gap-1 text-[var(--color-brand-orange)]">
                        <Sparkles size={10} /> MOOD_BUFFER
                      </span>
                      <span>{latestUpdate.mood.label}</span>
                    </div>
                    <img 
                      src={latestUpdate.mood.gif} 
                      alt={latestUpdate.mood.label || "Mood animation"} 
                      className="max-h-56 w-auto rounded-lg object-contain"
                    />
                  </div>
                )}

                <button
                  onClick={() => setActiveTab('updates')}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--color-brand-orange)] hover:text-white transition-colors self-start sm:self-end"
                >
                  <span>View Update Archive</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </section>
          )}
        </div>

        {/* Right 5 Columns: Twitch Stream & Quick Radar Widget */}
        <div className="xl:col-span-5 space-y-6">
          {/* Live Twitch Stream Card */}
          <section className="p-6 rounded-2xl border border-[#2a2f3d] bg-[#181b22] space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <h3 className="text-sm font-bold font-[var(--font-display)] text-white">
                  Twitch Live Stream
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[var(--color-brand-orange)]">Broncodolphin</span>
            </div>

            <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-md">
              <iframe
                src={`https://player.twitch.tv/?channel=Broncodolphin&parent=${window.location.hostname}&autoplay=false`}
                title="Twitch Player"
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
            <p className="text-xs text-gray-400 font-sans">
              Watch live development passes, playthrough tests, and gameplay sessions.
            </p>
          </section>

          {/* Development Status Quick Card */}
          <section className="p-6 rounded-2xl border border-[#2a2f3d] bg-[#14171f] space-y-3 bg-engine-grid">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
              <Cpu size={14} className="text-[var(--color-brand-orange)]" />
              <span>Current Production Radar</span>
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Primary Project</span>
                <span className="text-white font-bold">Battricks Adventure</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-gray-400">Current Phase</span>
                <span className="text-[var(--color-brand-orange)]">Level 0 Overhaul</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Status</span>
                <span className="text-emerald-400">Actively Iterating</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}