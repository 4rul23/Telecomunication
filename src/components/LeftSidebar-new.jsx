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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 0.6
      }
    }
  };

  return (
    <div className="w-72 flex-shrink-0 bg-gradient-to-br from-slate-900/50 to-blue-950/30 border-r border-blue-400/10 backdrop-blur-xl overflow-hidden">
      <div className="h-full flex flex-col p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="space-y-3">
            <div className="flex items-center gap-3 pb-3 border-b border-blue-400/20">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-blue-300 rounded-full"></div>
              </div>
              <div className="text-xs font-semibold text-blue-300" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                STATISTIK TELEKOMUNIKASI
              </div>
            </div>
          </motion.div>

          {/* Telecom Stats */}
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="text-xs font-semibold text-blue-300 mb-3" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              Indonesia Telekomunikasi
            </div>
            {telecomStats.map((stat, index) => {
              const IconComponent = getIconComponent(stat.iconName);
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-3 bg-slate-900/40 border border-blue-400/20 rounded-xl backdrop-blur-lg hover:bg-slate-900/60 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-blue-400">
                      <IconComponent size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-blue-200 font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                        {stat.label}
                      </div>
                      <div className="text-sm font-bold text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                        {stat.value}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Progress Tracking */}
          <motion.div variants={itemVariants} className="space-y-3">
            <div className="text-xs font-semibold text-blue-300" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              Progress Eksplorasi
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-blue-200">
                <span>Slide</span>
                <span>{currentSlide + 1} dari {currentData.length}</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-1.5 rounded-full"
                  style={{ width: `${((currentSlide + 1) / currentData.length) * 100}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentSlide + 1) / currentData.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <motion.div variants={itemVariants} className="space-y-3">
            <div className="text-xs font-semibold text-blue-300" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              Navigasi Cepat
            </div>
            <div className="grid grid-cols-3 gap-2">
              {currentData.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onSlideChange(index)}
                  className={`p-2 rounded-lg text-xs transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-500 text-white border-2 border-blue-400'
                      : 'bg-slate-800/50 text-blue-300 border border-blue-400/20 hover:border-blue-400/40'
                  }`}
                >
                  {index + 1}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="text-xs font-semibold text-blue-300" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              Kontrol Navigasi
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onPrevSlide}
                className="flex-1 flex items-center justify-center gap-2 text-xs text-blue-200 hover:text-white p-3 transition-all duration-300 border border-blue-400/20 hover:border-blue-400/40 bg-slate-900/30 rounded-lg backdrop-blur-lg"
              >
                <ChevronLeft size={14} />
                <span className="font-medium">Prev</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNextSlide}
                className="flex-1 flex items-center justify-center gap-2 text-xs text-blue-200 hover:text-white p-3 transition-all duration-300 border border-blue-400/20 hover:border-blue-400/40 bg-slate-900/30 rounded-lg backdrop-blur-lg"
              >
                <span className="font-medium">Next</span>
                <ChevronRight size={14} />
              </motion.button>
            </div>
          </motion.div>

          {/* Footer Info */}
          <motion.div variants={itemVariants} className="border-t border-blue-400/20 pt-3 text-xs text-blue-400 font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            <div className="flex items-center gap-2">
              <Eye size={12} />
              <span>{currentItem.category}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
