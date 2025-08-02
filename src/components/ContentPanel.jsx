"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ContentPanel({
  currentSlide,
  currentItem,
  currentData,
  sectionTitle
}) {
  const contentVariants = {
    enter: {
      opacity: 0,
      y: 30,
      scale: 0.98
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 35,
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.98,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    enter: { opacity: 0, y: 25 },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 0.8
      }
    }
  };

  return (
    <div className="col-span-4 bg-gradient-to-br from-black/80 to-slate-900/80 p-10 flex flex-col justify-center backdrop-blur-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={contentVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 pb-6 border-b border-blue-400/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
            </div>
            <span className="text-sm font-semibold text-blue-300" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              {currentItem.category}
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-5">
            <h2 className="text-4xl font-bold text-white leading-tight" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              {currentItem.title}
            </h2>
            <p className="text-lg text-blue-200 font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              {currentItem.subtitle}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="border border-blue-400/20 p-6 bg-gradient-to-br from-slate-900/60 to-blue-950/30 backdrop-blur-lg rounded-2xl">
            <p className="text-base text-blue-100 leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              {currentItem.fullDescription}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-5">
            <div className="text-sm font-semibold text-blue-300" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              Spesifikasi Teknis
            </div>
            <div className="grid grid-cols-2 gap-4">
              {currentItem.keyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="border border-blue-400/20 p-4 bg-gradient-to-br from-blue-950/40 to-slate-900/40 backdrop-blur-lg rounded-xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-blue-400">{stat.icon}</div>
                    <span className="text-xs text-blue-300 font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                      {stat.label}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="border border-blue-400/20 p-6 bg-gradient-to-br from-slate-900/60 to-blue-950/30 backdrop-blur-lg rounded-2xl">
            <div className="text-sm font-semibold text-blue-300 mb-4" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              Implementasi Kode
            </div>
            <pre className="text-sm text-blue-100 overflow-x-auto font-mono leading-relaxed">
              <code>{currentItem.code}</code>
            </pre>
          </motion.div>

          <motion.div variants={itemVariants} className="border border-blue-400/20 p-6 bg-gradient-to-br from-blue-950/40 to-slate-900/40 backdrop-blur-lg rounded-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-200 font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                  Progress Eksplorasi
                </span>
                <span className="text-sm text-blue-300 font-semibold" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                  {currentSlide + 1} dari {currentData.length}
                </span>
              </div>

              <div className="h-3 bg-slate-800 border border-blue-500/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentSlide + 1) / currentData.length) * 100}%` }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-blue-400 font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                  {Math.round(((currentSlide + 1) / currentData.length) * 100)}% Selesai
                </span>
                <span className="text-blue-300 font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                  Penelitian Aktif
                </span>
              </div>

              <div className="border-t border-blue-400/20 pt-4">
                <div className="text-sm text-blue-300 font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                  Fokus: {sectionTitle}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
