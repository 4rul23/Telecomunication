"use client";
import { Wifi, Signal } from "lucide-react";

export default function TopNavigation({
  currentSection,
  onSectionChange,
  isAutoPlay,
  onAutoPlayToggle
}) {
  return (
    <div className="relative h-14 bg-gradient-to-br from-black/80 to-slate-900/80 backdrop-blur-xl border-b border-blue-400/20 px-4 flex items-center justify-between shadow-lg">
      {/* Logo/Title */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-500/20 rounded-lg border border-blue-400/30">
            <Signal className="w-5 h-5 text-blue-400" />
          </div>
          <Wifi className="w-4 h-4 text-blue-300 opacity-60" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}>
            Telekomunikasi Indonesia
          </h1>
          <p className="text-xs text-blue-200/80 font-medium tracking-wide" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}>
            Exploring Telecommunications Excellence
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button
            onClick={() => onSectionChange(0)}
            className={`px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg border ${
              currentSection === 0
                ? 'bg-blue-500/20 text-white border-blue-400/40 shadow-lg'
                : 'text-blue-200 hover:text-white hover:bg-slate-800/50 border-blue-400/20 hover:border-blue-400/40'
            }`}
            style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
          >
            Fun Facts
          </button>
          <button
            onClick={() => onSectionChange(1)}
            className={`px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg border ${
              currentSection === 1
                ? 'bg-blue-500/20 text-white border-blue-400/40 shadow-lg'
                : 'text-blue-200 hover:text-white hover:bg-slate-800/50 border-blue-400/20 hover:border-blue-400/40'
            }`}
            style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
          >
            Profil
          </button>
        </div>
      </div>
    </div>
  );
}
