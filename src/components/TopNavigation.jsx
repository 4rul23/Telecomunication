"use client";
import { motion } from "framer-motion";
import { Wifi, Signal } from "lucide-react";

export default function TopNavigation({
  currentSection,
  onSectionChange,
  isAutoPlay,
  onAutoPlayToggle
}) {
  const logoVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 300,
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

  return (
    <motion.div
      className="relative h-14 bg-gradient-to-br from-black/80 to-slate-900/80 backdrop-blur-xl border-b border-blue-400/20 px-4 flex items-center justify-between shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.8
      }}
    >
      {/* Logo/Title */}
      <motion.div
        className="flex items-center gap-4"
        variants={logoVariants}
        initial="initial"
        whileHover="hover"
      >
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-500/20 rounded-lg border border-blue-400/30">
            <Signal className="w-5 h-5 text-blue-400" />
          </div>
          <Wifi className="w-4 h-4 text-blue-300 opacity-60" />
        </div>
        <div>
          <h1
            className="text-lg font-bold text-white tracking-tight"
            style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
          >
            Telekomunikasi Indonesia
          </h1>
          <p
            className="text-xs text-blue-200/80 font-medium tracking-wide"
            style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
          >
            Exploring Telecommunications Excellence
          </p>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="flex gap-2">
          <motion.button
            onClick={() => onSectionChange(0)}
            className={`px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg border ${
              currentSection === 0
                ? 'bg-blue-500/20 text-white border-blue-400/40 shadow-lg'
                : 'text-blue-200 hover:text-white hover:bg-slate-800/50 border-blue-400/20 hover:border-blue-400/40'
            }`}
            style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            Fun Facts
          </motion.button>
          <motion.button
            onClick={() => onSectionChange(1)}
            className={`px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg border ${
              currentSection === 1
                ? 'bg-blue-500/20 text-white border-blue-400/40 shadow-lg'
                : 'text-blue-200 hover:text-white hover:bg-slate-800/50 border-blue-400/20 hover:border-blue-400/40'
            }`}
            style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            Profil
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
