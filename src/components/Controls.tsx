import React from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Eye, EyeOff } from 'lucide-react';
import { useMapStore } from '../store/mapStore';

const Controls = () => {
  const { zoom, setZoom, reset, showAllCountries, toggleShowAllCountries } = useMapStore();

  return (
    <div className="absolute bottom-8 right-8 flex flex-col gap-2">
      <button
        onClick={() => setZoom(Math.min(zoom + 1, 8))}
        className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
        aria-label="Zoom in"
      >
        <ZoomIn className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => setZoom(Math.max(zoom - 1, 1))}
        className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
        aria-label="Zoom out"
      >
        <ZoomOut className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={toggleShowAllCountries}
        className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
        aria-label={showAllCountries ? "Hide other countries" : "Show all countries"}
      >
        {showAllCountries ? (
          <Eye className="w-6 h-6 text-white" />
        ) : (
          <EyeOff className="w-6 h-6 text-white" />
        )}
      </button>
      <button
        onClick={reset}
        className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
        aria-label="Reset view"
      >
        <RotateCcw className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default Controls;