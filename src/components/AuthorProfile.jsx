'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Code,
  Globe,
  Award,
  BookOpen,
  Zap,
  GraduationCap,
  FileText,
  MapPin,
  School,
  Monitor,
  Camera,
  Star,
  Terminal,
  Activity,
  ChevronRight,
  Cpu,
  Database,
  Settings,
  Signal,
  Wifi,
  Radio,
  Satellite,
  Network,
  Antenna,
  Waves,
  Router,
  Cable
} from 'lucide-react';
import Image from 'next/image';

const AuthorProfile = () => {
  // Enhanced Animation Variants with slower, smoother transitions
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

  // Enhanced photo animation variants
  const photoVariants = {
    initial: {
      opacity: 0,
      scale: 0.7,
      y: 50,
      rotateX: 15,
      filter: "blur(10px)"
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 25,
        duration: 1.5,
        delay: 0.8
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6
      }
    }
  };

  const overlayVariants = {
    initial: { opacity: 0, x: 20, scale: 0.8 },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
        delay: 1.5,
        duration: 0.8
      }
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white overflow-hidden" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Source Code Pro', monospace" }}>
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px'
             }}>
        </div>
        <div className="absolute top-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{
            opacity: 0.03,
            scale: 1,
            rotate: 0,
            y: [0, -10, 0]
          }}
          transition={{
            duration: 3,
            delay: 0.5,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute top-20 left-10"
        >
          <Signal size={100} className="text-blue-400" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
          animate={{
            opacity: 0.03,
            scale: 1,
            rotate: 0,
            x: [0, 10, 0]
          }}
          transition={{
            duration: 3,
            delay: 0.7,
            x: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute bottom-32 right-16"
        >
          <Satellite size={80} className="text-blue-500" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative h-full grid grid-cols-12 gap-0"
      >

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-3 bg-black/60 border-r border-blue-500/20 p-8 backdrop-blur-sm flex flex-col justify-between"
        >
          <motion.div
            variants={contentVariants}
            initial="enter"
            animate="center"
            className="space-y-8"
          >

            <motion.div variants={itemVariants}>
              <h1 className="text-4xl font-black uppercase tracking-tighter leading-none text-white mb-4" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                DEVELOPER<br/>PROFILE
              </h1>
              <div className="text-sm text-blue-400 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                SISTEM_PROFIL_01.SYS
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="border border-blue-500/30 p-6 bg-gray-900/40 backdrop-blur-sm">
              <div className="text-base font-bold mb-4 uppercase tracking-wider text-blue-300" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                STATUS:
              </div>
              <div className="text-sm font-mono text-white mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                &gt;&gt; STUDENT DEVELOPER ACTIVE
              </div>
              <div className="text-sm text-blue-400" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                SMK TELKOM MAKASSAR • CLASS XII
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-4" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                MENU NAVIGASI
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.02, backgroundColor: 'rgb(59 130 246 / 0.2)' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 p-4 border border-blue-500/30 cursor-pointer transition-all duration-300 backdrop-blur-sm bg-blue-500 text-black"
              >
                <User size={16} />
                <span className="text-sm font-bold uppercase tracking-wider" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                  PROFIL UTAMA
                </span>
                <ChevronRight size={16} className="ml-auto" />
              </motion.div>
            </motion.div>

            {/* Research Focus */}
            <motion.div variants={itemVariants} className="border border-blue-500/50 p-6 bg-gray-900/40 backdrop-blur-sm">
              <div className="text-sm font-bold mb-4 uppercase tracking-wider text-blue-300" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                FOKUS PENELITIAN:
              </div>
              <div className="text-sm h-8 flex items-center mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="border-r-2 border-blue-400 pr-3 animate-pulse text-white">
                  TELEKOMUNIKASI INDONESIA
                </span>
              </div>
              <div className="text-sm text-blue-400 leading-relaxed" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                Mengeksplorasi infrastruktur telekomunikasi modern Indonesia
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="border border-blue-500/30 p-4 bg-blue-600/80 text-white backdrop-blur-sm"
          >
            <p className="text-sm font-mono uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              &gt;&gt; SISTEM INFORMASI MAHASISWA
            </p>
          </motion.div>
        </motion.div>

        {/* Center: Photo Section - Moved up and enhanced animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="col-span-5 bg-gray-900/40 border-r border-blue-500/20 relative flex items-start justify-center pt-16 backdrop-blur-sm"
        >
          <motion.div
            variants={slideVariants}
            initial="enter"
            animate="center"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-6 w-full max-w-md px-8"
          >
            {/* Enhanced Main Profile Photo */}
            <motion.div
              variants={photoVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="relative w-full"
            >
              <motion.div
                className="w-full aspect-square border-2 border-blue-500/40 bg-gray-900/60 flex items-center justify-center mx-auto backdrop-blur-sm overflow-hidden shadow-2xl shadow-blue-500/30"
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)",
                  borderColor: "rgba(59, 130, 246, 0.8)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/image.png"
                  alt="Student Developer Profile"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Enhanced Fallback */}
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col items-center justify-center p-8"
                  style={{display: 'none'}}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <User size={60} className="text-white mb-4" />
                  </motion.div>
                  <div className="text-white text-lg font-bold uppercase tracking-wider mb-2" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                    NAMA SAYA ADALAH....
                  </div>
                  <div className="text-blue-200 text-sm uppercase tracking-wider" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                    SMK TELKOM MAKASSAR
                  </div>
                </motion.div>
              </motion.div>

              {/* Enhanced Photo Overlay */}
              <motion.div
                variants={overlayVariants}
                initial="initial"
                animate="animate"
                className="absolute bottom-4 right-4 bg-blue-600/90 border border-blue-500/30 px-3 py-2 backdrop-blur-sm"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(59, 130, 246, 0.95)"
                }}
              >
                <div className="text-xs font-bold text-white uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  XII • ACTIVE
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right: Simplified Content Panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="col-span-4 bg-black/60 p-8 backdrop-blur-sm flex flex-col justify-center"
        >
          <motion.div
            variants={contentVariants}
            initial="enter"
            animate="center"
            className="space-y-10"
          >
            {/* Main Title */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h2
                className="text-4xl font-black uppercase text-white leading-tight tracking-wider"
                style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
                whileHover={{
                  scale: 1.02,
                  color: "#60a5fa"
                }}
                transition={{ duration: 0.3 }}
              >
                NAMA SAYA<br/>ADALAH....
              </motion.h2>
              <p className="text-lg text-blue-300 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                TELECOMMUNICATIONS ENGINEERING
              </p>
              <motion.div
                className="w-16 h-1 bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
              ></motion.div>
            </motion.div>

            {/* About Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <User size={20} className="text-blue-400" />
                <h3 className="text-xl font-bold uppercase tracking-wider text-white" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                  ABOUT ME
                </h3>
              </motion.div>
              <motion.p
                className="text-base text-blue-200 leading-relaxed"
                style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
              >
                Mahasiswa akhir di SMK Telkom Makassar dengan passion mendalam pada teknologi telekomunikasi dan pengembangan web. Saat ini aktif melakukan penelitian tentang infrastruktur telekomunikasi Indonesia bagian timur.
              </motion.p>
            </motion.div>

            {/* Fun Facts */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Star size={20} className="text-blue-400" />
                <h3 className="text-xl font-bold uppercase tracking-wider text-white" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                  FUN FACTS
                </h3>
              </motion.div>
              <div className="space-y-4">
                {[
                  "Passionate about 5G technology and its implementation in Indonesia",
                  "Love exploring fiber optic networks and smart city infrastructure",
                  "Enjoys coding interactive presentations and web applications"
                ].map((fact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.0 + index * 0.2, duration: 0.6 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    ></motion.div>
                    <p className="text-base text-blue-200" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                      {fact}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.6 }}
              className="border-t border-blue-500/20 pt-6"
            >
              <motion.div
                className="flex items-center gap-3 text-sm text-blue-400"
                style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
                whileHover={{ scale: 1.02 }}
              >
                <MapPin size={16} />
                <span>MAKASSAR, SULAWESI SELATAN • SMK TELKOM STUDENT • CLASS XII</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthorProfile;
