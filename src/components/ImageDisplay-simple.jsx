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
    <div className="col-span-5 bg-gradient-to-br from-slate-900/50 to-blue-950/30 border-r border-blue-400/10 relative backdrop-blur-xl overflow-hidden">
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

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-slate-900/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 to-transparent"></div>

            <div className="absolute bottom-10 left-10 right-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-5">
                  <div className="text-blue-400 p-3 bg-blue-500/10 rounded-2xl backdrop-blur-lg border border-blue-400/20">
                    {currentItem.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white leading-tight mb-2" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                      {currentItem.title}
                    </h3>
                    <p className="text-sm text-blue-200 font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                      {currentItem.category}
                    </p>
                  </div>
                </div>

                <div className="border border-blue-400/20 p-6 bg-black/60 backdrop-blur-xl rounded-2xl shadow-2xl">
                  <p className="text-base text-blue-100 leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                    {currentItem.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-6 right-6 flex justify-between transform -translate-y-1/2">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.8)' }}
          whileTap={{ scale: 0.9 }}
          onClick={onPrevSlide}
          className="p-4 border border-blue-400/40 bg-black/70 text-blue-300 hover:text-white transition-all duration-300 backdrop-blur-lg rounded-2xl shadow-2xl"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.8)' }}
          whileTap={{ scale: 0.9 }}
          onClick={onNextSlide}
          className="p-4 border border-blue-400/40 bg-black/70 text-blue-300 hover:text-white transition-all duration-300 backdrop-blur-lg rounded-2xl shadow-2xl"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </div>
  );
}
