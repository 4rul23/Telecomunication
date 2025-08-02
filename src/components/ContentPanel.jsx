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
    <div className="w-96 flex-shrink-0 bg-gradient-to-br from-black/80 to-slate-900/80 p-4 flex flex-col justify-start pt-4 backdrop-blur-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={contentVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="space-y-4"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-between pb-4 border-b border-blue-400/20">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
              </div>
              <span className="text-sm font-semibold text-blue-300" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                {currentItem.category}
              </span>
            </div>
            <div className="text-xs text-blue-400 font-medium px-2 py-1 bg-blue-500/10 rounded-md border border-blue-400/20">
              {currentSlide + 1} / {currentData.length}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-2xl font-bold text-white leading-tight" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              {currentItem.title}
            </h2>
            <p className="text-base text-cyan-200 font-medium leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              {currentItem.subtitle}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="border border-blue-400/20 p-4 bg-gradient-to-br from-slate-900/60 to-blue-950/30 backdrop-blur-lg rounded-xl">
            <div className="text-sm font-semibold text-blue-300 mb-3" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              📖 Deskripsi Lengkap
            </div>
            <p className="text-sm text-blue-100 leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              {currentItem.fullDescription}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
