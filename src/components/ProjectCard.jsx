import ProjectMedia from './ProjectMedia';
import { Gamepad2, Download, ExternalLink, Code2 } from 'lucide-react';

function ItchIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M2.5 5.5A1.5 1.5 0 0 1 4 4h16a1.5 1.5 0 0 1 1.5 1.5v1.8a2.5 2.5 0 0 1-1.3 2.2L19 10.2v6.3a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 16.5v-6.3l-1.2-.7A2.5 2.5 0 0 1 2.5 7.3V5.5zm4 4.5v1h2v-1h-2zm7 0v1h2v-1h-2zM9 13.5v2h2v-2H9zm4 0v2h2v-2h-2z" />
    </svg>
  );
}

function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function ProjectCard({ project }) {
  if (!project) return null;

const getLinkIcon = (type) => {
    switch (type) {
      case 'itch': return <ItchIcon size={15} />;
      case 'github': return <GithubIcon size={16} />;
      case 'play': return <Gamepad2 size={16} />;
      case 'download': return <Download size={16} />;
      default: return <ExternalLink size={16} />;
    }
  };

  // Safe category display (handles arrays, strings, or missing values)
  const categoryDisplay = Array.isArray(project.categories)
    ? project.categories.join(" / ")
    : project.category || "Game Dev";

  return (
    <div className="group relative rounded-xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] p-5 transition-all duration-300 hover:border-[var(--color-brand-orange)] hover:shadow-lg hover:shadow-[var(--color-brand-orange)]/10 flex flex-col justify-between">
      <div>
        {/* Media Viewport */}
        {project.media && (
          <div className="mb-4">
            <ProjectMedia media={project.media} title={project.title} />
          </div>
        )}

        {/* Categories & Timeline */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[var(--color-brand-orange)]">
            {categoryDisplay}
          </span>
          {project.timeline && (
            <span className="text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
              {project.timeline}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-3 text-xl font-bold font-[var(--font-display)] text-white group-hover:text-[var(--color-brand-orange)] transition-colors">
          {project.title}
        </h3>

        {/* Engine Subtitle */}
        {project.engine && (
          <div className="text-xs font-mono text-gray-400 mt-1">
            Stack: <span className="text-gray-300">{project.engine}</span>
          </div>
        )}

        {/* Description */}
        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
          {project.description}
        </p>

        {/* Action Links */}
        {project.links && project.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--color-brand-orange)] text-black hover:bg-orange-400 transition-all shadow-md shadow-[var(--color-brand-orange)]/20"
              >
                {getLinkIcon(link.type)}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Tags Footer */}
      {project.tags && project.tags.length > 0 && (
        <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="rounded bg-white/5 px-2 py-0.5 text-xs text-gray-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}