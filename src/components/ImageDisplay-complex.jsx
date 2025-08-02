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
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      rotateY: direction > 0 ? 15 : -15,
      filter: "blur(5px)"
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 40,
        duration: 1.2
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      rotateY: direction < 0 ? 15 : -15,
      filter: "blur(5px)",
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 35,
        duration: 1.0
      }
    })
  };

  return (
    <div className="col-span-5 bg-gradient-to-br from-slate-900/70 via-indigo-950/50 to-blue-950/60 border-r border-indigo-400/20 relative backdrop-blur-xl overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-blue-500/10 to-purple-600/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(99,102,241,0.1)_0%,_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.08)_0%,_transparent_50%)]"></div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(99,102,241,0.05)_0%,_transparent_70%)]"
      ></motion.div>
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

            {/* Professional Image Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-slate-900/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/30 via-transparent to-blue-950/20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-900/10 to-black/60"></div>

            {/* Enhanced Content Overlay */}
            <div className="absolute bottom-10 left-10 right-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="space-y-8"
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.0, duration: 0.8, type: "spring", stiffness: 200 }}
                    className="text-indigo-400 p-4 bg-gradient-to-br from-indigo-500/20 via-blue-500/15 to-purple-500/10 rounded-3xl backdrop-blur-xl border border-indigo-400/30 shadow-xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50"></div>
                    <div className="relative z-10 text-2xl">
                      {currentItem.icon}
                    </div>
                  </motion.div>

                  <div className="flex-1 space-y-3">
                    <motion.h3
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      className="text-3xl font-bold leading-tight bg-gradient-to-r from-white via-indigo-100 to-blue-100 bg-clip-text text-transparent"
                      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                    >
                      {currentItem.title}
                    </motion.h3>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4, duration: 0.8 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full animate-pulse"></div>
                      <p className="text-sm text-indigo-300 font-bold tracking-wider uppercase" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                        {currentItem.category}
                      </p>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 1 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl blur-xl"></div>
                  <div className="relative border border-indigo-400/30 p-8 bg-gradient-to-br from-black/80 via-slate-900/70 to-indigo-950/60 backdrop-blur-xl rounded-3xl shadow-2xl">
                    <div className="absolute top-4 right-4">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-3 h-3 border-2 border-indigo-400/60 border-t-indigo-400 rounded-full"
                      ></motion.div>
                    </div>

                    <p className="text-lg text-indigo-100 leading-relaxed font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                      {currentItem.description}
                    </p>

                    <div className="mt-6 flex items-center gap-4">
                      <div className="flex items-center gap-2 text-xs text-indigo-400 font-semibold bg-indigo-500/10 px-3 py-2 rounded-xl border border-indigo-400/20">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 bg-indigo-400 rounded-full"
                        ></motion.div>
                        <span style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                          TEKNOLOGI {currentItem.year}
                        </span>
                      </div>

                      <div className="flex-1 h-px bg-gradient-to-r from-indigo-400/30 via-blue-400/50 to-transparent"></div>

                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-xs text-blue-300 font-bold tracking-wide"
                        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                      >
                        EKSPLORASI AKTIF
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Navigation Arrows */}
      <div className="absolute top-1/2 left-8 right-8 flex justify-between transform -translate-y-1/2 z-20">
        <motion.button
          whileHover={{
            scale: 1.15,
            backgroundColor: 'rgba(99, 102, 241, 0.9)',
            boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrevSlide}
          className="group p-5 border border-indigo-400/50 bg-gradient-to-br from-black/80 via-slate-900/70 to-indigo-950/60 text-indigo-300 hover:text-white transition-all duration-500 backdrop-blur-xl rounded-3xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <motion.div
            whileHover={{ x: -3 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <ChevronLeft size={28} />
          </motion.div>

          {/* Hover indicator */}
          <motion.div
            className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-indigo-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.15,
            backgroundColor: 'rgba(99, 102, 241, 0.9)',
            boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onNextSlide}
          className="group p-5 border border-indigo-400/50 bg-gradient-to-br from-black/80 via-slate-900/70 to-indigo-950/60 text-indigo-300 hover:text-white transition-all duration-500 backdrop-blur-xl rounded-3xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <motion.div
            whileHover={{ x: 3 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <ChevronRight size={28} />
          </motion.div>

          {/* Hover indicator */}
          <motion.div
            className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-indigo-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </motion.button>
      </div>
    </div>
  );
}
