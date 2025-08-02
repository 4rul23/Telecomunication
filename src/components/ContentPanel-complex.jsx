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
    <div className="col-span-4 bg-gradient-to-br from-black/90 via-slate-900/80 to-indigo-950/60 p-12 flex flex-col justify-center backdrop-blur-xl relative">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-blue-500/8 to-purple-600/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(99,102,241,0.08)_0%,_transparent_50%)]"></div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-2xl"
      ></motion.div>

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-xl"
      ></motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={contentVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="space-y-10 relative z-10"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-6 pb-8 border-b border-gradient-to-r from-transparent via-indigo-400/30 to-transparent">
            <div className="flex gap-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full shadow-lg"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-lg"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-indigo-300 rounded-full shadow-lg"
              ></motion.div>
            </div>
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-indigo-400 text-lg"
              >
                🔬
              </motion.div>
              <span className="text-sm font-bold text-indigo-300 tracking-wider uppercase" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                {currentItem.category}
              </span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2
              className="text-5xl font-bold leading-tight bg-gradient-to-r from-white via-indigo-100 to-blue-200 bg-clip-text text-transparent"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              {currentItem.title}
            </motion.h2>
            <motion.p
              className="text-xl text-indigo-200 font-medium leading-relaxed"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              {currentItem.subtitle}
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl blur-xl"></div>
            <div className="relative border border-indigo-400/30 p-8 bg-gradient-to-br from-slate-900/80 via-indigo-950/40 to-blue-950/60 backdrop-blur-xl rounded-3xl shadow-2xl">
              <p className="text-lg text-indigo-100 leading-relaxed font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                {currentItem.fullDescription}
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-indigo-400 text-lg"
              >
                ⚙️
              </motion.div>
              <span className="text-sm font-bold text-indigo-300 tracking-wider uppercase" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                Spesifikasi Teknis
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {currentItem.keyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative border border-indigo-400/30 p-6 bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-blue-950/40 backdrop-blur-xl rounded-2xl shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="text-indigo-400 text-xl p-2 bg-indigo-500/20 rounded-xl border border-indigo-400/30"
                      >
                        {stat.icon}
                      </motion.div>
                      <span className="text-xs text-indigo-300 font-bold tracking-wider uppercase" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                        {stat.label}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                      {stat.value}
                    </div>

                    {/* Hover effect indicator */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl blur-xl"></div>
            <div className="relative border border-indigo-400/30 p-8 bg-gradient-to-br from-slate-900/80 via-indigo-950/40 to-blue-950/60 backdrop-blur-xl rounded-3xl shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-indigo-400 text-lg"
                >
                  💻
                </motion.div>
                <span className="text-sm font-bold text-indigo-300 tracking-wider uppercase" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                  Implementasi Kode
                </span>
              </div>

              <div className="relative">
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>

                <pre className="text-sm text-indigo-100 overflow-x-auto font-mono leading-relaxed p-6 bg-slate-900/60 rounded-2xl border border-indigo-400/20">
                  <code>{currentItem.code}</code>
                </pre>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl blur-xl"></div>
            <div className="relative border border-indigo-400/30 p-8 bg-gradient-to-br from-indigo-950/60 via-slate-900/70 to-blue-950/50 backdrop-blur-xl rounded-3xl shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="text-indigo-400 text-lg"
                    >
                      📊
                    </motion.div>
                    <span className="text-sm font-bold text-indigo-300 tracking-wider uppercase" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                      Progress Eksplorasi
                    </span>
                  </div>
                  <span className="text-sm text-blue-300 font-bold bg-indigo-500/20 px-4 py-2 rounded-xl border border-indigo-400/30" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                    {currentSlide + 1} dari {currentData.length}
                  </span>
                </div>

                <div className="h-4 bg-slate-800/60 border border-indigo-500/30 rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 relative overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentSlide + 1) / currentData.length) * 100}%` }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-indigo-300 font-bold" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                    {Math.round(((currentSlide + 1) / currentData.length) * 100)}% Selesai
                  </span>
                  <motion.span
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-blue-300 font-bold bg-indigo-500/20 px-3 py-1 rounded-lg"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    PENELITIAN AKTIF
                  </motion.span>
                </div>

                <div className="border-t border-gradient-to-r from-transparent via-indigo-400/30 to-transparent pt-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-indigo-400 text-lg"
                    >
                      🎯
                    </motion.div>
                    <div className="flex-1">
                      <span className="text-sm text-indigo-400 font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                        Fokus Penelitian:
                      </span>
                      <div className="text-lg text-blue-300 font-bold" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                        {sectionTitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
