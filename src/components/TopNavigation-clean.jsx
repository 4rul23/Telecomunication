"use client";
import { Play, Pause } from "lucide-react";

export default function TopNavigation({
  currentSection,
  onSectionChange,
  isAutoPlay,
  onAutoPlayToggle
}) {
  return (
    <div className="relative h-20 bg-gradient-to-r from-black/80 to-slate-900/80 backdrop-blur-xl border-b border-blue-400/20 px-8 flex items-center justify-between">
      {/* Logo/Title */}
      <div className="flex items-center gap-4">
        <div className="text-blue-400 text-2xl">📡</div>
        <div>
          <h1 className="text-xl font-bold text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            Telekomunikasi Indonesia
          </h1>
          <p className="text-xs text-blue-300" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            Eksplorasi Teknologi 5G & MIMO
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6">
        <div className="flex gap-2">
          <button
            onClick={() => onSectionChange(0)}
            className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
              currentSection === 0
                ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                : 'text-slate-400 hover:text-blue-300'
            }`}
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Fakta Teknologi
          </button>
          <button
            onClick={() => onSectionChange(1)}
            className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
              currentSection === 1
                ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                : 'text-slate-400 hover:text-blue-300'
            }`}
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Profil Penulis
          </button>
        </div>

        {currentSection === 0 && (
          <button
            onClick={onAutoPlayToggle}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg border ${
              isAutoPlay
                ? 'bg-blue-500/20 text-blue-300 border-blue-400/30'
                : 'text-slate-400 hover:text-blue-300 border-slate-600/30 hover:border-blue-400/30'
            }`}
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
            {isAutoPlay ? 'Pause' : 'Auto Play'}
          </button>
        )}
      </div>
    </div>
  );
}
