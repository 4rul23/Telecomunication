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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-4"
              >
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 p-2.5 bg-blue-500/10 rounded-xl backdrop-blur-lg border border-blue-400/20">
                    <span className="text-3xl">{currentItem.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white leading-tight mb-2" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                      {currentItem.title}
                    </h3>
                    <p className="text-sm text-blue-200 font-semibold" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                      {currentItem.category}
                    </p>
                  </div>
                </div>

                <div className="border-2 border-blue-400/60 p-4 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl">
                  <p className="text-sm text-white leading-relaxed font-semibold" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                    {currentItem.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-3 right-3 flex justify-between transform -translate-y-1/2 pointer-events-none">
        <div className="pointer-events-auto">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.8)' }}
            whileTap={{ scale: 0.9 }}
            onClick={onPrevSlide}
            className="p-2.5 border-2 border-blue-400/60 bg-black/80 text-blue-200 hover:text-white hover:bg-blue-600/30 transition-all duration-300 backdrop-blur-lg rounded-lg shadow-2xl"
          >
            <ChevronLeft size={20} />
          </motion.button>
        </div>
        <div className="pointer-events-auto">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.8)' }}
            whileTap={{ scale: 0.9 }}
            onClick={onNextSlide}
            className="p-2.5 border-2 border-blue-400/60 bg-black/80 text-blue-200 hover:text-white hover:bg-blue-600/30 transition-all duration-300 backdrop-blur-lg rounded-lg shadow-2xl"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
