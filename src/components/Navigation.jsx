import { useState } from 'react';
import { 
  Home,
  FolderGit2, 
  User, 
  FileText, 
  Newspaper, 
  Mail, 
  Phone,
  MapPin,
  Menu, 
  X,
  ExternalLink
} from 'lucide-react';

function LinkedInIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63" />
    </svg>
  );
}

export default function Navigation({ activeTab, setActiveTab }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'updates', label: 'Dev Updates', icon: Newspaper },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#0f1115]/95 backdrop-blur-md border-b border-[#2a2f3d] px-6 flex items-center justify-between z-50">
        <span className="font-extrabold font-[var(--font-display)] text-white text-lg tracking-tight">
          Kevin <span className="text-[var(--color-brand-orange)]">H.</span>
        </span>
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-gray-400 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#0f1115]/95 z-40 p-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-[var(--color-brand-orange)] text-black font-semibold'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#2a2f3d] space-y-3 text-xs text-gray-400 font-mono">
            <a href="mailto:kevinhoaglandinb@gmail.com" className="flex items-center gap-2 hover:text-white">
              <Mail size={14} className="text-[var(--color-brand-orange)]" /> kevinhoaglandinb@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[var(--color-brand-orange)]" /> 208-608-3741
            </div>
          </div>
        </div>
      )}

      {/* Desktop Persistent Left Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 bottom-0 w-72 bg-[#14171f] border-r border-[#2a2f3d] p-6 flex-col justify-between z-40 overflow-y-auto">
        <div className="space-y-6">
          {/* Profile Header */}
          <div className="flex items-center gap-3.5 pb-4 border-b border-white/5">
            <img 
              src="/images/MyselfEdited.jpg" 
              alt="Kevin Hoagland" 
              className="w-12 h-12 rounded-xl object-cover border border-[var(--color-brand-orange)]/40 shadow-sm shadow-[var(--color-brand-orange)]/20"
            />
            <div>
              <h1 className="text-base font-bold font-[var(--font-display)] text-white leading-tight">
                Kevin Hoagland
              </h1>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[var(--color-brand-orange)] mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Level & 3D Designer
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-mono transition-all ${
                    isActive 
                      ? 'bg-[var(--color-brand-orange)] text-black font-bold shadow-md shadow-[var(--color-brand-orange)]/20'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer: Contact & Platforms */}
        <div className="space-y-4 pt-5 border-t border-[#2a2f3d]">
          {/* Quick Contact Specs */}
          <div className="space-y-2 text-[11px] font-mono text-gray-400">
            <a 
              href="mailto:kevinhoaglandinb@gmail.com" 
              className="flex items-center gap-2 hover:text-[var(--color-brand-orange)] transition-colors truncate"
              title="Email"
            >
              <Mail size={13} className="text-[var(--color-brand-orange)] shrink-0" />
              <span className="truncate">kevinhoaglandinb@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 truncate">
              <Phone size={13} className="text-[var(--color-brand-orange)] shrink-0" />
              <span>208-608-3741</span>
            </div>
            <div className="flex items-center gap-2 truncate text-gray-500">
              <MapPin size={13} className="text-gray-500 shrink-0" />
              <span>Boise, Idaho</span>
            </div>
          </div>

          {/* Connected Channels */}
          <div className="flex items-center gap-2 pt-2 border-t border-white/5">
            <a 
              href="https://www.linkedin.com/in/kevinjhoagland" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded bg-white/5 text-gray-400 hover:text-[var(--color-brand-orange)] hover:bg-white/10 transition-colors"
              title="LinkedIn"
            >
              <LinkedInIcon size={15} />
            </a>
            <a 
              href="https://www.youtube.com/@broncodolphin" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded bg-white/5 text-gray-400 hover:text-[var(--color-brand-orange)] hover:bg-white/10 transition-colors"
              title="YouTube"
            >
              <img src="/images/69.png" alt="YouTube" className="w-3.5 h-3.5 object-cover" />
            </a>
            <a 
              href="https://discord.gg/n44eRHcKJp" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded bg-white/5 text-gray-400 hover:text-[var(--color-brand-orange)] hover:bg-white/10 transition-colors"
              title="Discord"
            >
              <img src="/images/13.png" alt="Discord" className="w-3.5 h-3.5 object-cover" />
            </a>
            <a 
              href="https://steamcommunity.com/id/Broncodolphin/" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded bg-white/5 text-gray-400 hover:text-[var(--color-brand-orange)] hover:bg-white/10 transition-colors"
              title="Steam"
            >
              <img src="/images/53.png" alt="Steam" className="w-3.5 h-3.5 object-cover" />
            </a>
          </div>

          <p className="text-[10px] text-gray-500 font-mono">
            &copy; 2026 Kevin Hoagland
          </p>
        </div>
      </aside>
    </>
  );
}