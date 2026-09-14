import SectionHeader from '../components/SectionHeader';
import { Mail, Phone, ExternalLink, Radio } from 'lucide-react';

export default function ContactView() {
  return (
    <div className="w-full space-y-8">
      <SectionHeader 
        tag="Comms Terminal"
        title="Contact"
        subtitle="Get in touch for internships, project collaborations, or level design discussions."
        meta="STATUS: AVAILABLE_FOR_WORK"
      />

      {/* Direct Comm Line Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <a 
          href="mailto:kevinhoaglandinb@gmail.com"
          className="p-6 rounded-2xl border border-[#2a2f3d] bg-[#181b22] hover:border-[var(--color-brand-orange)] transition-all group flex flex-col justify-between"
        >
          <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-4">
            <span className="flex items-center gap-1.5 text-[var(--color-brand-orange)]">
              <Mail size={14} /> EMAIL
            </span>
            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <div className="text-sm font-bold text-white group-hover:text-[var(--color-brand-orange)] transition-colors truncate">
              kevinhoaglandinb@gmail.com
            </div>
            <p className="text-[11px] font-mono text-gray-500 mt-1">Direct communication</p>
          </div>
        </a>

        <div className="p-6 rounded-2xl border border-[#2a2f3d] bg-[#181b22] flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-4">
            <span className="flex items-center gap-1.5 text-[var(--color-brand-orange)]">
              <Phone size={14} /> PHONE
            </span>
            <span className="text-[10px] text-gray-500">SMS PREFERRED</span>
          </div>
          <div>
            <div className="text-sm font-bold text-white">
              208-608-3741
            </div>
            <p className="text-[11px] font-mono text-gray-500 mt-1">Mountain Time Zone</p>
          </div>
        </div>

        <a 
          href="https://www.linkedin.com/in/kevinjhoagland"
          target="_blank"
          rel="noreferrer"
          className="p-6 rounded-2xl border border-[#2a2f3d] bg-[#181b22] hover:border-[var(--color-brand-orange)] transition-all group flex flex-col justify-between"
        >
          <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-4">
            <span className="flex items-center gap-1.5 text-[var(--color-brand-orange)]">
              <ExternalLink size={14} /> LINKEDIN
            </span>
            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <div className="text-sm font-bold text-white group-hover:text-[var(--color-brand-orange)] transition-colors">
              kevinjhoagland
            </div>
            <p className="text-[11px] font-mono text-gray-500 mt-1">Professional Network</p>
          </div>
        </a>
      </div>

      {/* 2-Column Split: Channels on Left, Broadcast on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Connected Channels */}
        <section className="lg:col-span-5 p-6 rounded-2xl border border-[#2a2f3d] bg-[#181b22] space-y-4">
          <div className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-2">
            <Radio size={14} className="text-[var(--color-brand-orange)]" />
            <span>Connected Channels & Platforms</span>
          </div>

          <div className="space-y-3">
            <a
              href="https://www.youtube.com/@broncodolphin"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-[var(--color-brand-orange)] text-gray-300 hover:text-white transition-all"
            >
              <img src="/images/69.png" alt="YouTube" className="w-8 h-8 rounded object-cover" />
              <div className="truncate">
                <div className="text-xs font-bold text-white">YouTube</div>
                <div className="text-[10px] text-gray-400 font-mono truncate">@broncodolphin</div>
              </div>
            </a>

            <a
              href="https://discord.gg/n44eRHcKJp"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-[var(--color-brand-orange)] text-gray-300 hover:text-white transition-all"
            >
              <img src="/images/13.png" alt="Discord" className="w-8 h-8 rounded object-cover" />
              <div className="truncate">
                <div className="text-xs font-bold text-white">Discord</div>
                <div className="text-[10px] text-gray-400 font-mono truncate">Community Server</div>
              </div>
            </a>

            <a
              href="https://steamcommunity.com/id/Broncodolphin/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-[var(--color-brand-orange)] text-gray-300 hover:text-white transition-all"
            >
              <img src="/images/53.png" alt="Steam" className="w-8 h-8 rounded object-cover" />
              <div className="truncate">
                <div className="text-xs font-bold text-white">Steam</div>
                <div className="text-[10px] text-gray-400 font-mono truncate">Broncodolphin</div>
              </div>
            </a>
          </div>
        </section>

        {/* Live Broadcast Feed */}
        <section className="lg:col-span-7 p-6 rounded-2xl border border-[#2a2f3d] bg-[#181b22] space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-gray-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              BROADCAST // TWITCH
            </span>
            <span className="text-[var(--color-brand-orange)] font-bold">Broncodolphin</span>
          </div>
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-md">
            <iframe
              src={`https://player.twitch.tv/?channel=Broncodolphin&parent=${window.location.hostname}&autoplay=false`}
              title="Twitch Player"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </div>
  );
}