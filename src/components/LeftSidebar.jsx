"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Zap, Users, TrendingUp, Activity, Eye } from "lucide-react";

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 1.0,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -40,
      scale: 0.95,
      rotateY: -10
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 280,
        damping: 20,
        mass: 0.8,
        duration: 0.8
      }
    }
  };

  const statCardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.05,
      y: -3,
      rotateY: 2,
      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        width: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.5,
          duration: 1.5
        },
        opacity: {
          duration: 0.3,
          delay: 0.3
        }
      }
    }
  };

  return (
    <div className="w-64 flex-shrink-0 bg-gradient-to-br from-black/80 to-slate-900/80 border-r border-blue-400/10 backdrop-blur-xl overflow-hidden">
      <div className="h-full flex flex-col p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="flex items-center gap-2 pb-3 border-b border-blue-400/20">
              <div className="flex gap-1">
                <motion.div
                  className="w-3 h-3 bg-blue-500 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                    boxShadow: [
                      "0 0 0px rgba(59, 130, 246, 0)",
                      "0 0 12px rgba(59, 130, 246, 0.6)",
                      "0 0 0px rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <motion.div
                  className="w-3 h-3 bg-cyan-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                    boxShadow: [
                      "0 0 0px rgba(34, 211, 238, 0)",
                      "0 0 12px rgba(34, 211, 238, 0.6)",
                      "0 0 0px rgba(34, 211, 238, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4
                  }}
                ></motion.div>
                <motion.div
                  className="w-3 h-3 bg-blue-300 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                    boxShadow: [
                      "0 0 0px rgba(147, 197, 253, 0)",
                      "0 0 12px rgba(147, 197, 253, 0.6)",
                      "0 0 0px rgba(147, 197, 253, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8
                  }}
                ></motion.div>
              </div>
              <motion.div
                className="text-sm font-semibold text-blue-300"
                style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
                whileHover={{
                  scale: 1.05,
                  color: "#60a5fa",
                  textShadow: "0 0 8px rgba(96, 165, 250, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                STATISTIK TELEKOMUNIKASI
              </motion.div>
            </div>
          </motion.div>

          {/* Telecom Stats */}
          <motion.div variants={itemVariants} className="space-y-2">
            <motion.div
              className="text-sm font-semibold text-blue-300 mb-2"
              style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
              whileHover={{ scale: 1.02, color: "#60a5fa" }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Indonesia Telekomunikasi
            </motion.div>
            {telecomStats.map((stat, index) => {
              const IconComponent = getIconComponent(stat.iconName);
              return (
                <motion.div
                  key={index}
                  variants={statCardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-900/60 to-blue-950/30 rounded-lg border border-blue-400/20 backdrop-blur-sm cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="p-1.5 bg-blue-500/20 rounded-md border border-blue-400/30"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(59, 130, 246, 0.3)",
                        rotate: 5
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <IconComponent className="w-4 h-4 text-blue-400" />
                    </motion.div>
                    <motion.div
                      className="text-xs text-cyan-200 font-medium"
                      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
                      whileHover={{ color: "#ffffff" }}
                      transition={{ duration: 0.2 }}
                    >
                      {stat.label}
                    </motion.div>
                  </div>
                  <motion.div
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
                    whileHover={{
                      scale: 1.1,
                      color: "#60a5fa",
                      textShadow: "0 0 8px rgba(96, 165, 250, 0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {stat.value}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Progress Tracking */}
          <motion.div variants={itemVariants} className="space-y-3">
            <motion.div
              className="text-sm font-semibold text-blue-300"
              style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
              whileHover={{ scale: 1.02, color: "#60a5fa" }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Progress Eksplorasi
            </motion.div>
            <div className="space-y-2">
              <motion.div
                className="flex justify-between text-sm text-blue-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}>Slide</span>
                <motion.span
                  style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
                  key={currentSlide}
                  initial={{ scale: 1.2, color: "#60a5fa" }}
                  animate={{ scale: 1, color: "#bfdbfe" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {currentSlide + 1} dari {currentData.length}
                </motion.span>
              </motion.div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full relative"
                  variants={progressVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ width: `${((currentSlide + 1) / currentData.length) * 100}%` }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <motion.div variants={itemVariants} className="space-y-3">
            <motion.div
              className="text-sm font-semibold text-blue-300"
              style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
              whileHover={{ scale: 1.02, color: "#60a5fa" }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Navigasi Cepat
            </motion.div>
            <div className="grid grid-cols-3 gap-2">
              {currentData.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: index === currentSlide ? "rgba(59, 130, 246, 0.8)" : "rgba(59, 130, 246, 0.3)",
                    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSlideChange(index)}
                  className={`p-2 rounded-lg text-sm transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-500 text-white border-2 border-blue-400'
                      : 'bg-slate-800/50 text-blue-300 border border-blue-400/20 hover:border-blue-400/40'
                  }`}
                  style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    backgroundColor: index === currentSlide ? "rgba(59, 130, 246, 0.6)" : "rgba(30, 41, 59, 0.5)"
                  }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  {index + 1}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Footer Info */}
          <motion.div variants={itemVariants} className="border-t border-blue-400/20 pt-3 text-sm text-blue-400 font-medium" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}>
            <div className="flex items-center gap-2">
              <Eye size={14} />
              <span>{currentItem.category}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
