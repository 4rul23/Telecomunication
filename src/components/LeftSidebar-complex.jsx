"use client";
import { motion } from "framer-motion";
import { Activity, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import TypewriterEffect from "./TypewriterEffect";

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
  const typewriterTexts = [
    "JARINGAN 5G DENGAN TEKNOLOGI MIMO SUPER CEPAT",
    "PROFESIONAL TELEKOMUNIKASI ARSITEK DIGITAL",
    "KONEKTIVITAS GLOBAL UNTUK SEMUA KELUARGA",
    "FONDASI DIGITAL PERADABAN MODERN",
    "MASSIVE MIMO PULUHAN HINGGA RATUSAN ANTENA",
    "BEAMFORMING 3D ADAPTIF REAL-TIME",
    "LEBIH DARI SEKADAR SINYAL - JEMBATAN DUNIA"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="col-span-3 bg-gradient-to-br from-slate-950/90 via-indigo-950/80 to-slate-900/90 border-r border-indigo-400/20 p-10 flex flex-col justify-between backdrop-blur-2xl relative overflow-hidden"
      style={{ boxShadow: 'inset -1px 0 0 rgba(99, 102, 241, 0.2), 8px 0 40px rgba(0, 0, 0, 0.3)' }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-400/30 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>

      <div className="space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-5xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-200 to-blue-300"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            TELEKOMUNIKASI
          </motion.h1>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl blur-xl"></div>
          <div className="relative border border-indigo-400/30 p-8 bg-gradient-to-br from-slate-900/80 via-indigo-950/60 to-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: ['0 0 5px rgba(99, 102, 241, 0.5)', '0 0 20px rgba(99, 102, 241, 0.8)', '0 0 5px rgba(99, 102, 241, 0.5)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-bold text-indigo-300 tracking-wide" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                FOKUS PENELITIAN
              </span>
            </div>
            <div className="relative">
              <TypewriterEffect texts={typewriterTexts} speed={60} delay={2500} />
            </div>
            <motion.div
              className="text-sm text-indigo-200/80 mt-6 leading-relaxed font-medium"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Eksplorasi mendalam teknologi telekomunikasi dari 5G MIMO hingga konektivitas global masa depan dengan pendekatan inovatif dan komprehensif.
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10 rounded-3xl blur-xl"></div>
          <div className="relative border border-indigo-400/30 p-8 bg-gradient-to-br from-indigo-950/60 via-blue-950/40 to-slate-900/60 backdrop-blur-xl rounded-3xl shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-indigo-400 text-xl"
              >
                ⚡
              </motion.div>
              <span className="text-sm font-bold text-indigo-300 tracking-wide" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                STATUS EKSPLORASI
              </span>
            </div>
            <div className="space-y-4">
              <motion.p
                className="text-sm font-mono text-indigo-300 font-medium"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                &gt;&gt; Menganalisis Teknologi Telekomunikasi
              </motion.p>
              <motion.p
                className="text-sm font-mono text-blue-300 font-medium"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                &gt;&gt; Optimasi Jaringan 5G MIMO
              </motion.p>
              <div className="flex items-center gap-3 mt-4" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                <motion.div
                  className="w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs text-emerald-300 font-bold tracking-wider">
                  AKTIF • REAL-TIME • PROFESIONAL
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="text-indigo-400 text-lg"
            >
              📊
            </motion.div>
            <span className="text-sm font-bold text-indigo-300 tracking-wide" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              PROGRESS EKSPLORASI [{currentSlide + 1}/{currentData.length}]
            </span>
          </div>

          <div className="flex gap-3 flex-wrap">
            {currentData.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setSlideDirection(index > currentSlide ? 1 : -1);
                  onSlideChange(index);
                }}
                className={`h-3 transition-all duration-700 rounded-full relative overflow-hidden ${
                  index === currentSlide
                    ? 'w-16 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 shadow-lg'
                    : 'w-3 bg-slate-600/60 hover:bg-indigo-400/60'
                }`}
                whileHover={{ scale: 1.3, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {index === currentSlide && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 via-indigo-500/5 to-blue-500/10 rounded-2xl blur-xl"></div>
            <div className="relative border border-indigo-400/30 p-6 bg-gradient-to-br from-slate-900/80 to-indigo-950/60 backdrop-blur-xl rounded-2xl shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-indigo-300 font-bold tracking-wider" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                  NAVIGASI SLIDE
                </span>
                <span className="text-xs text-blue-300 font-bold" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                  {Math.round(((currentSlide + 1) / currentData.length) * 100)}%
                </span>
              </div>

              <div className="h-3 bg-slate-800/60 border border-indigo-500/30 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 relative overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentSlide + 1) / currentData.length) * 100}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>

              <div className="flex items-center justify-between mt-4 text-xs">
                <span className="text-indigo-300 font-semibold" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                  Eksplorasi: {Math.round(((currentSlide + 1) / currentData.length) * 100)}% Selesai
                </span>
                <span className="text-blue-300 font-semibold bg-indigo-500/20 px-2 py-1 rounded-lg" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                  {currentItem.year}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Navigation Controls */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="space-y-6 relative z-10"
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-indigo-400 text-lg"
          >
            🎮
          </motion.div>
          <span className="text-sm font-bold text-indigo-300 tracking-wide" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            KONTROL NAVIGASI
          </span>
        </div>

        <div className="space-y-4">
          <motion.button
            whileHover={{
              scale: 1.03,
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              boxShadow: '0 8px 25px rgba(99, 102, 241, 0.2)'
            }}
            whileTap={{ scale: 0.97 }}
            onClick={onPrevSlide}
            className="group w-full text-left text-sm text-indigo-200 hover:text-white p-5 transition-all duration-500 border border-indigo-400/30 hover:border-indigo-400/60 bg-gradient-to-r from-slate-900/60 to-indigo-950/40 rounded-2xl backdrop-blur-xl relative overflow-hidden"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-4 relative z-10">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-indigo-400/30"
                whileHover={{ rotate: -15 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronLeft size={18} className="text-indigo-300" />
              </motion.div>
              <div>
                <span className="font-bold block">Slide Sebelumnya</span>
                <span className="text-xs text-indigo-400 opacity-80">Kembali ke konten sebelumnya</span>
              </div>
            </div>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.03,
              backgroundColor: 'rgba(99, 102, 241, 0.15)',
              boxShadow: '0 8px 25px rgba(99, 102, 241, 0.2)'
            }}
            whileTap={{ scale: 0.97 }}
            onClick={onNextSlide}
            className="group w-full text-left text-sm text-indigo-200 hover:text-white p-5 transition-all duration-500 border border-indigo-400/30 hover:border-indigo-400/60 bg-gradient-to-r from-slate-900/60 to-indigo-950/40 rounded-2xl backdrop-blur-xl relative overflow-hidden"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-4 relative z-10">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-indigo-400/30"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight size={18} className="text-indigo-300" />
              </motion.div>
              <div>
                <span className="font-bold block">Slide Selanjutnya</span>
                <span className="text-xs text-indigo-400 opacity-80">Lanjut ke konten berikutnya</span>
              </div>
            </div>
          </motion.button>
        </div>

        <motion.div
          className="border-t border-gradient-to-r from-transparent via-indigo-400/30 to-transparent pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="flex items-center justify-between bg-gradient-to-r from-indigo-950/40 to-slate-900/40 p-4 rounded-xl border border-indigo-400/20">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-indigo-400"
              >
                🏷️
              </motion.div>
              <span className="text-xs text-indigo-300 font-bold tracking-wide" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                KATEGORI
              </span>
            </div>
            <span className="text-xs text-blue-300 font-semibold bg-indigo-500/20 px-3 py-1 rounded-lg" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              {currentItem.category}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
