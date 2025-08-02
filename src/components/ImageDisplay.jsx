"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ImageDisplay({
  currentSlide,
  currentItem,
  slideDirection,
  onPrevSlide,
  onNextSlide
}) {
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1200 : -1200,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 25 : -25,
      rotateX: 5,
      filter: "blur(10px)",
      z: -100
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      filter: "blur(0px)",
      z: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 0.8,
        duration: 1.4
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1200 : -1200,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 25 : -25,
      rotateX: -5,
      filter: "blur(10px)",
      z: -100,
      transition: {
        type: "spring",
        stiffness: 280,
        damping: 30,
        duration: 1.2
      }
    })
  };

  const overlayVariants = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 1.0,
        type: "spring",
        stiffness: 200,
        damping: 25
      }
    }
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(59, 130, 246, 0.3)",
      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-slate-900/50 to-blue-950/30 border-r border-blue-400/10 relative backdrop-blur-xl overflow-hidden">
      <AnimatePresence mode="wait" custom={slideDirection}>
        <motion.div
          key={currentSlide}
          custom={slideDirection}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="h-full relative"
        >
          <div className="absolute inset-0">
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 to-transparent"></div>

            <div className="absolute bottom-8 left-6 right-6">
              <motion.div
                variants={overlayVariants}
                initial="initial"
                animate="animate"
                className="space-y-4"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="text-blue-400 p-2.5 bg-blue-500/10 rounded-xl backdrop-blur-lg border border-blue-400/20"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                      borderColor: "rgba(96, 165, 250, 0.4)",
                      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.span
                      className="text-3xl"
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {currentItem.icon}
                    </motion.span>
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3
                      className="text-lg font-bold text-white leading-tight mb-2"
                      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0, duration: 0.8 }}
                      whileHover={{
                        color: "#60a5fa",
                        scale: 1.02,
                        textShadow: "0 0 8px rgba(96, 165, 250, 0.5)"
                      }}
                    >
                      {currentItem.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm text-blue-200 font-semibold"
                      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    >
                      {currentItem.category}
                    </motion.p>
                  </div>
                </div>

                <motion.div
                  className="border-2 border-blue-400/60 p-4 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.8, type: "spring", stiffness: 200, damping: 25 }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(96, 165, 250, 0.8)",
                    boxShadow: "0 15px 35px rgba(59, 130, 246, 0.2)"
                  }}
                >
                  <motion.p
                    className="text-sm text-white leading-relaxed font-semibold"
                    style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 1.0 }}
                  >
                    {currentItem.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-3 right-3 flex justify-between transform -translate-y-1/2 pointer-events-none">
        <div className="pointer-events-auto">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            onClick={onPrevSlide}
            className="p-3 border-2 border-blue-400/60 bg-black/80 text-blue-200 hover:text-white transition-all duration-300 backdrop-blur-lg rounded-xl shadow-2xl group"
          >
            <motion.div
              animate={{ x: [-2, 0, -2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronLeft size={22} />
            </motion.div>
          </motion.button>
        </div>
        <div className="pointer-events-auto">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            onClick={onNextSlide}
            className="p-3 border-2 border-blue-400/60 bg-black/80 text-blue-200 hover:text-white transition-all duration-300 backdrop-blur-lg rounded-xl shadow-2xl group"
          >
            <motion.div
              animate={{ x: [2, 0, 2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronRight size={22} />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
