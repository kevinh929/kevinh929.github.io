import SectionHeader from '../components/SectionHeader';
import { updates } from '../data/updates';
import { Calendar, Sparkles } from 'lucide-react';

export default function UpdatesView() {
  return (
    <div className="w-full space-y-8">
      <SectionHeader 
        tag="Devlog & Archive"
        title="Development Updates"
        subtitle="Chronological milestones, engine builds, level layout breakdowns, and devlogs."
        meta="TOTAL_ENTRIES: 07"
      />

      <div className="relative border-l border-[#2a2f3d] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12 w-full">
        {updates.map((post) => (
          <article key={post.id} className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-[#181b22] border-2 border-[var(--color-brand-orange)] group-hover:scale-125 transition-transform" />

            <div className="p-6 md:p-8 rounded-2xl border border-[#2a2f3d] bg-[#181b22] space-y-5 hover:border-white/20 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <Calendar size={13} className="text-[var(--color-brand-orange)]" />
                  <span>{post.date}</span>
                </div>

                {post.mood?.label && (
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                    <Sparkles size={12} className="text-[var(--color-brand-orange)]" />
                    Status: <strong className="text-white">{post.mood.label}</strong>
                  </span>
                )}
              </div>

              <h3 className="text-xl md:text-2xl font-bold font-[var(--font-display)] text-white">
                {post.title}
              </h3>

              <div className="space-y-3 text-sm text-gray-300 leading-relaxed font-sans">
                {Array.isArray(post.content) ? (
                  post.content.map((para, idx) => <p key={idx}>{para}</p>)
                ) : (
                  <p>{post.content}</p>
                )}
              </div>

              {post.youtubeId && (
                <div className="mt-4 aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-lg">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${post.youtubeId}`}
                    title={post.title}
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
              )}

              {post.mood?.gif && (
                <div className="pt-2">
                  <div className="inline-block rounded-xl overflow-hidden border border-white/10 bg-black/40 p-2.5 shadow-md">
                    <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 pb-1.5 px-1 border-b border-white/5 mb-2">
                      <span className="flex items-center gap-1 text-[var(--color-brand-orange)]">
                        <Sparkles size={10} /> MOOD_BUFFER
                      </span>
                      <span>{post.mood.label}</span>
                    </div>
                    <img 
                      src={post.mood.gif} 
                      alt={post.mood.label || "Mood animation"} 
                      className="max-h-64 sm:max-h-72 w-auto rounded-lg object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}