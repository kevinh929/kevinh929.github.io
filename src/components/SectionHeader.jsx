export default function SectionHeader({ tag, title, subtitle, meta }) {
  return (
    <div className="relative border-b border-[#2a2f3d] pb-6 mb-8">
      {/* Top Coordinate / Engine Flag */}
      <div className="flex items-center justify-between text-[11px] font-mono mb-2">
        <div className="flex items-center gap-2 text-[var(--color-brand-orange)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)]" />
          <span className="uppercase tracking-widest">{tag}</span>
        </div>
        {meta && (
          <span className="text-gray-500 hidden sm:inline-block">
            {meta}
          </span>
        )}
      </div>

      {/* Main Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold font-[var(--font-display)] text-white tracking-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm text-gray-400 mt-2 font-sans max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Viewport Corner Mark */}
      <div className="absolute -bottom-[5px] -right-[5px] text-gray-600 font-mono text-xs select-none pointer-events-none">
        +
      </div>
    </div>
  );
}