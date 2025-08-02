"use client";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Activity, Eye } from "lucide-react";

export default function LeftSidebar({
  currentSlide,
  currentData,
  currentItem,
  onSlideChange,
  onPrevSlide,
  onNextSlide,
  slideDirection,
  setSlideDirection
}) {
  return (
    <div className="col-span-3 bg-gradient-to-br from-slate-900/80 to-blue-950/40 border-r border-blue-400/20 p-8 flex flex-col justify-between backdrop-blur-xl">
      {/* Header */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-4"
        >
          <div className="text-sm font-semibold text-blue-300" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            Eksplorasi Teknologi
          </div>
          <h2 className="text-lg font-bold text-white leading-tight" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            {currentItem.title}
          </h2>
          <p className="text-sm text-blue-200" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            {currentItem.year} • {currentItem.category}
          </p>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-6"
        >
          <div className="text-sm font-semibold text-blue-300 flex items-center gap-3" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            <Activity size={14} />
            Progress [{currentSlide + 1}/{currentData.length}]
          </div>

          <div className="flex gap-2">
            {currentData.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setSlideDirection(index > currentSlide ? 1 : -1);
                  onSlideChange(index);
                }}
                className={`h-2 transition-all duration-500 rounded-full ${
                  index === currentSlide
                    ? 'w-12 bg-gradient-to-r from-blue-500 to-cyan-400'
                    : 'w-2 bg-slate-600 hover:bg-blue-400/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <div className="border border-blue-400/20 p-5 bg-gradient-to-br from-slate-900/60 to-blue-950/30 backdrop-blur-lg rounded-xl">
            <div className="text-xs text-blue-300 mb-3 font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              Navigasi Slide
            </div>
            <div className="h-2 bg-slate-800 border border-blue-500/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${((currentSlide + 1) / currentData.length) * 100}%` }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              />
            </div>
            <div className="text-xs text-blue-200 mt-3 flex justify-between font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              <span>{Math.round(((currentSlide + 1) / currentData.length) * 100)}% Selesai</span>
              <span>{currentItem.year}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="space-y-5"
      >
        <div className="text-sm font-semibold text-blue-300" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          Kontrol Navigasi
        </div>
        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onPrevSlide}
            className="w-full text-left text-sm text-blue-200 hover:text-white p-4 transition-all duration-300 border border-blue-400/20 hover:border-blue-400/40 bg-slate-900/30 rounded-xl backdrop-blur-lg"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            <div className="flex items-center gap-3">
              <ChevronLeft size={16} />
              <span className="font-medium">Slide Sebelumnya</span>
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onNextSlide}
            className="w-full text-left text-sm text-blue-200 hover:text-white p-4 transition-all duration-300 border border-blue-400/20 hover:border-blue-400/40 bg-slate-900/30 rounded-xl backdrop-blur-lg"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            <div className="flex items-center gap-3">
              <ChevronRight size={16} />
              <span className="font-medium">Slide Selanjutnya</span>
            </div>
          </motion.button>
        </div>
        <div className="border-t border-blue-400/20 pt-4 text-xs text-blue-400 font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          <div className="flex items-center gap-2">
            <Eye size={12} />
            <span>{currentItem.category}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
