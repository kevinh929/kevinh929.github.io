import { useState } from 'react';
import { Play, Box, Images, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

export default function ProjectMedia({ media, title }) {
  const [tabIndex, setTabIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);

  if (!media || media.length === 0) return null;

  const currentTab = media[tabIndex];

  const getTabIcon = (type) => {
    switch (type) {
      case 'video': return <Play size={12} />;
      case 'model':
      case 'models': return <Box size={12} />;
      case 'gallery': return <Images size={12} />;
      default: return <Images size={12} />;
    }
  };

  const handlePrevImage = (e, total) => {
    e.stopPropagation();
    setGalleryIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNextImage = (e, total) => {
    e.stopPropagation();
    setGalleryIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Helper to grab active 3D asset if multiple exist
  const activeModel = currentTab.type === 'models' 
    ? currentTab.items[selectedModelIndex] 
    : currentTab;

  return (
    <div className="space-y-2">
      {/* 1. Main Viewport Canvas */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 bg-black/60 flex items-center justify-center">
        
        {/* Render Single or Multi 3D Model Viewport */}
        {(currentTab.type === 'model' || currentTab.type === 'models') && (
          <div className="relative w-full h-full">
            <model-viewer
              key={activeModel.src} // Forces clean re-render on model swap
              src={activeModel.src}
              poster={activeModel.poster}
              alt={activeModel.name || title}
              auto-rotate
              camera-controls
              shadow-intensity="1.5"
              exposure="1.0"
              style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
            />

            {/* Asset Technical Specs Overlay (Great for 3D portfolios) */}
            {activeModel.polycount && (
              <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/80 px-2 py-1 rounded border border-white/10 text-[10px] font-mono text-gray-300 pointer-events-none">
                <Layers size={11} className="text-[var(--color-brand-orange)]" />
                <span>{activeModel.polycount}</span>
                {activeModel.textureSize && (
                  <>
                    <span className="text-gray-600">•</span>
                    <span>{activeModel.textureSize}</span>
                  </>
                )}
              </div>
            )}

            <span className="absolute bottom-2 right-2 text-[10px] font-mono text-[var(--color-brand-orange)] bg-black/80 px-2 py-0.5 rounded border border-[var(--color-brand-orange)]/30 pointer-events-none">
              Drag to Orbit
            </span>
          </div>
        )}

        {/* Render YouTube Video */}
        {currentTab.type === 'video' && (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${currentTab.youtubeId}`}
            title={`${title} video player`}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        {/* Render Image Gallery */}
        {currentTab.type === 'gallery' && currentTab.images?.length > 0 && (
          <div className="relative w-full h-full group/gallery">
            <img
              src={currentTab.images[galleryIndex]}
              alt={`${title} slide ${galleryIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-300"
            />
            {currentTab.images.length > 1 && (
              <>
                <button
                  onClick={(e) => handlePrevImage(e, currentTab.images.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/70 text-white hover:text-[var(--color-brand-orange)] hover:bg-black transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={(e) => handleNextImage(e, currentTab.images.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/70 text-white hover:text-[var(--color-brand-orange)] hover:bg-black transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* 2. Sub-Bar: 3D Model Swapper (Only appears when viewing the 'models' tab) */}
      {currentTab.type === 'models' && currentTab.items.length > 1 && (
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 px-0.5">
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mr-1">
            Asset:
          </span>
          {currentTab.items.map((item, idx) => {
            const isSelected = selectedModelIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedModelIndex(idx)}
                className={`px-2 py-0.5 rounded text-xs font-mono transition-all border ${
                  isSelected
                    ? "bg-white/15 text-white border-[var(--color-brand-orange)] font-medium"
                    : "bg-black/40 text-gray-400 border-white/5 hover:text-gray-200 hover:bg-white/5"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      )}

      {/* 3. Primary Tab Switcher (Walkthrough vs 3D Assets vs Screenshots) */}
      {media.length > 1 && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {media.map((item, idx) => {
            const isActive = tabIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  setTabIndex(idx);
                  setGalleryIndex(0);
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-all flex-shrink-0 border ${
                  isActive
                    ? "bg-[var(--color-brand-orange)]/10 text-[var(--color-brand-orange)] border-[var(--color-brand-orange)]/40 font-semibold"
                    : "bg-white/5 text-gray-400 border-white/5 hover:text-white hover:bg-white/10"
                }`}
              >
                {getTabIcon(item.type)}
                <span>{item.label || item.type}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}