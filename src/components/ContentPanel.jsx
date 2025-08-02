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
      y: 40,
      scale: 0.95,
      rotateX: 5,
      filter: "blur(8px)"
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        mass: 0.8,
        staggerChildren: 0.12,
        delayChildren: 0.15,
        duration: 1.2
      }
    },
    exit: {
      opacity: 0,
      y: -40,
      scale: 0.95,
      rotateX: -5,
      filter: "blur(8px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const itemVariants = {
    enter: {
      opacity: 0,
      y: 35,
      scale: 0.96,
      rotateY: 3
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 25,
        mass: 0.6,
        duration: 1.0
      }
    }
  };

  const headerVariants = {
    enter: {
      opacity: 0,
      x: -20,
      scale: 0.98
    },
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        delay: 0.1
      }
    }
  };

  const cardVariants = {
    enter: {
      opacity: 0,
      y: 30,
      scale: 0.94,
      rotateX: 10
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.02,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    },
    tap: {
      scale: 0.98
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
          <motion.div variants={headerVariants} className="flex items-center justify-between pb-4 border-b border-blue-400/20">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <motion.div
                  className="w-3 h-3 bg-blue-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <motion.div
                  className="w-3 h-3 bg-cyan-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                ></motion.div>
                <motion.div
                  className="w-3 h-3 bg-blue-300 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6
                  }}
                ></motion.div>
              </div>
              <motion.span
                className="text-sm font-semibold text-blue-300"
                style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
                whileHover={{ scale: 1.05, color: "#60a5fa" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {currentItem.category}
              </motion.span>
            </div>
            <motion.div
              className="text-xs text-blue-400 font-medium px-2 py-1 bg-blue-500/10 rounded-md border border-blue-400/20"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                borderColor: "rgba(96, 165, 250, 0.4)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {currentSlide + 1} / {currentData.length}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <motion.h2
              className="text-2xl font-bold text-white leading-tight"
              style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
              whileHover={{ scale: 1.02, color: "#60a5fa" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {currentItem.title}
            </motion.h2>
            <motion.p
              className="text-base text-cyan-200 font-medium leading-relaxed"
              style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {currentItem.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="border border-blue-400/20 p-4 bg-gradient-to-br from-slate-900/60 to-blue-950/30 backdrop-blur-lg rounded-xl"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              className="text-sm font-semibold text-blue-300 mb-3"
              style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
              animate={{
                textShadow: [
                  "0 0 0px rgba(96, 165, 250, 0)",
                  "0 0 8px rgba(96, 165, 250, 0.3)",
                  "0 0 0px rgba(96, 165, 250, 0)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              📖 Deskripsi Lengkap
            </motion.div>
            <motion.p
              className="text-sm text-blue-100 leading-relaxed"
              style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.0 }}
            >
              {currentItem.fullDescription}
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
