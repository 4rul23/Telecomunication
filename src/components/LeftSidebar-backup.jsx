"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe, Zap, Users, TrendingUp, Activity, Eye } from "lucide-react";

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
  // Indonesian telecommunications statistics
  const telecomStats = [
    { label: "Pengguna Internet", value: "210+ Juta", iconName: "Globe" },
    { label: "Penetrasi 4G", value: "95%", iconName: "Zap" },
    { label: "Operator Seluler", value: "3 Utama", iconName: "Users" },
    { label: "Pertumbuhan 5G", value: "2024+", iconName: "TrendingUp" }
  ];

  // Icon mapping function
  const getIconComponent = (iconName) => {
    const iconMap = {
      Globe,
      Zap,
      Users,
      TrendingUp,
      Activity,
      Eye
    };
    return iconMap[iconName] || Globe;
  };

  // Animation variants matching ContentPanel style
  const contentVariants = {
    enter: {
      opacity: 0,
      x: -30,
      scale: 0.98
    },
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 35,
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      x: -30,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    enter: { opacity: 0, x: -20 },
    center: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 0.6
      }
    }
  };

  return (
    <div className="w-80 flex-shrink-0 bg-gradient-to-br from-slate-900/50 to-blue-950/30 border-r border-blue-400/10 backdrop-blur-xl overflow-hidden">
      <div className="h-full flex flex-col p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Header Section - Similar to ContentPanel */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-4 pb-4 border-b border-blue-400/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
              </div>
              <span className="text-sm font-semibold text-blue-300" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                Eksplorasi Teknologi
              </span>
            </div>

            <h2 className="text-lg font-bold text-white leading-tight" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              {currentItem.title}
            </h2>

            <p className="text-sm text-blue-200" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              {currentItem.year} • {currentItem.category}
            </p>
          </motion.div>

          {/* Progress Section */}
          <motion.div variants={itemVariants} className="border border-blue-400/20 p-3 bg-gradient-to-br from-slate-900/60 to-blue-950/30 backdrop-blur-lg rounded-2xl space-y-3">
            <div className="flex items-center gap-3">
              <Activity size={16} className="text-blue-400" />
              <span className="text-sm font-semibold text-blue-300" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                Progress [{currentSlide + 1}/{currentData.length}]
              </span>
            </div>

            {/* Slide Navigation Dots */}
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

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="text-xs text-blue-300 font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
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
              <div className="flex justify-between text-xs text-blue-200 font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                <span>{Math.round(((currentSlide + 1) / currentData.length) * 100)}% Selesai</span>
                <span>{currentItem.year}</span>
              </div>
            </div>
          </motion.div>

          {/* Statistics Section */}
          <motion.div variants={itemVariants} className="border border-blue-400/20 p-3 bg-gradient-to-br from-slate-900/60 to-blue-950/30 backdrop-blur-lg rounded-2xl space-y-3">
            <div className="text-sm font-semibold text-blue-300 mb-3" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              Statistik Telekomunikasi Indonesia
            </div>
            <div className="space-y-3">
              {telecomStats.map((stat, index) => {
                const IconComponent = getIconComponent(stat.iconName);
                return (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-900/60 to-blue-950/30 backdrop-blur-lg rounded-xl border border-blue-500/20">
                    <div className="p-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-lg border border-blue-400/30">
                      <IconComponent className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-blue-200" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="space-y-4"
      >
        <div className="text-sm font-semibold text-blue-300" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          Kontrol Navigasi
        </div>
        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onPrevSlide}
            className="w-full text-left text-sm text-blue-200 hover:text-white p-4 transition-all duration-300 border border-blue-400/20 hover:border-blue-400/40 bg-slate-900/30 rounded-2xl backdrop-blur-lg"
          >
            <div className="flex items-center gap-3">
              <ChevronLeft size={16} />
              <span className="font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                Slide Sebelumnya
              </span>
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onNextSlide}
            className="w-full text-left text-sm text-blue-200 hover:text-white p-4 transition-all duration-300 border border-blue-400/20 hover:border-blue-400/40 bg-slate-900/30 rounded-2xl backdrop-blur-lg"
          >
            <div className="flex items-center gap-3">
              <ChevronRight size={16} />
              <span className="font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                Slide Selanjutnya
              </span>
            </div>
          </motion.button>
        </div>

        {/* Footer Info */}
        <div className="border-t border-blue-400/20 pt-4 text-xs text-blue-400 font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          <div className="flex items-center gap-2">
            <Eye size={12} />
            <span>{currentItem.category}</span>
          </div>
        </div>
      </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
