'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
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
  ChevronLeft,
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
  Cable,
  Users,
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  Play,
  Pause,
  Quote,
  Calendar,
  Heart
} from 'lucide-react';
import Image from 'next/image';

const AuthorProfile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Team members data - XII TEL Class
  const teamSlides = [
    {
      id: 1,
      name: "WIRA SATYA MANSUR",
      role: "TEAM MEMBER",
      specialization: "Telecommunications Student",
      class: "XII TEL",
      nis: "2024.12.001",
      image: "/member/Satya.png",
      birthPlace: "Kendari",
      birthDate: "17 Agustus 2008",
      motto: "Belajar tidak pernah berhenti, karena hidup adalah proses pembelajaran tanpa akhir",
      description: "Siswa SMK Telkom Makassar yang berfokus pada bidang telekomunikasi dan teknologi informasi."
    },
    {
      id: 2,
      name: "MUHAMMAD FAIZ MANILET",
      role: "TEAM MEMBER",
      specialization: "Telecommunications Student",
      class: "XII TEL",
      nis: "2024.12.002",
      image: "/member/Faiz.png",
      birthPlace: "Makassar",
      birthDate: "3 September 2008",
      motto: "Ciptakan Masa Depan Mu, Jangan Menunggu Takdir",
      description: "Siswa SMK Telkom Makassar yang aktif dalam pembelajaran teknologi telekomunikasi modern."
    },
    {
      id: 3,
      name: "DIONISIANA AGNESIA MAKU",
      role: "TEAM MEMBER",
      specialization: "Telecommunications Student",
      class: "XII TEL",
      nis: "2024.12.003",
      image: "/member/Agnes.png",
      birthPlace: "Makassar",
      birthDate: "1 Desember 2007",
      motto: "Terus belajar, terus bertumbuh",
      description: "Siswa SMK Telkom Makassar yang berkomitmen dalam pengembangan diri di bidang telekomunikasi."
    },
    {
      id: 4,
      name: "YUNI ARYANA. Y",
      role: "TEAM MEMBER",
      specialization: "Telecommunications Student",
      class: "XII TEL",
      nis: "2024.12.004",
      image: "/member/Yuni.png",
      birthPlace: "Makassar",
      birthDate: "7 Juni 2007",
      motto: "Tetaplah fokus mengejar impian, karena sukses tidak selalu di ukur dari pendidikan, tapi juga dari usaha",
      description: "Siswa SMK Telkom Makassar yang memiliki semangat tinggi dalam mencapai cita-cita di bidang teknologi."
    },
    {
      id: 5,
      name: "MUHAMMAD FAYRUZ IMTIYAZ AL GHAZALI",
      role: "TEAM MEMBER",
      specialization: "Telecommunications Student",
      class: "XII TEL",
      nis: "2024.12.005",
      image: "/member/Fayruz.png",
      birthPlace: "Sorowako",
      birthDate: "29 Januari 2008",
      motto: "Mengubah ide sederhana menjadi karya yang penuh makna",
      description: "Siswa SMK Telkom Makassar yang kreatif dalam mengembangkan ide-ide inovatif di bidang telekomunikasi."
    },
    {
      id: 6,
      name: "MOH.FARID AKBAR",
      role: "TEAM MEMBER",
      specialization: "Telecommunications Student",
      class: "XII TEL",
      nis: "2024.12.006",
      image: "/member/Farid.png",
      birthPlace: "Makassar",
      birthDate: "21 Mei 2008",
      motto: "Tetaplah beribadah dimana pun kau berada",
      description: "Siswa SMK Telkom Makassar yang menjunjung tinggi nilai-nilai keagamaan dalam menuntut ilmu."
    },
    {
      id: 7,
      name: "Farrel Sebastian Fritzwel",
      role: "TEAM MEMBER",
      specialization: "Telecommunications Student",
      class: "XII TEL",
      nis: "2024.12.006",
      image: "/member/Farrel.png",
      birthPlace: "Makassar",
      birthDate: "04 Mei 2008",
      motto: "Berjuang dalam diam, menang dalam waktu.",
      description: "Siswa SMK Telkom Makassar yang menjunjung tinggi nilai-nilai keagamaan dalam menuntut ilmu."
    }
  ];

  // Enhanced Animation Variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      rotateY: direction > 0 ? 15 : -15,
      filter: "blur(10px)"
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
        damping: 30,
        duration: 0.8
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      rotateY: direction < 0 ? 15 : -15,
      filter: "blur(10px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
        duration: 0.6
      }
    })
  };

  const contentVariants = {
    enter: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 35,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    enter: { opacity: 0, y: 20, x: -20 },
    center: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 35,
        duration: 0.6
      }
    }
  };

  // Navigation Functions
  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % teamSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + teamSlides.length) % teamSlides.length);
  };

  const goToSlide = (slideIndex) => {
    setDirection(slideIndex > currentSlide ? 1 : -1);
    setCurrentSlide(slideIndex);
  };

  const currentMember = teamSlides[currentSlide];

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white overflow-hidden" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Source Code Pro', monospace" }}>
      {/* Background Effects */}
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

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 0.03,
            scale: 1,
            y: [0, -10, 0]
          }}
          transition={{
            duration: 3,
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
      </div>

      {/* Navigation Controls */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4">
        <motion.button
          onClick={prevSlide}
          className="p-3 bg-blue-600/80 hover:bg-blue-500 border border-blue-400/50 backdrop-blur-sm transition-all duration-300"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={20} />
        </motion.button>

        <motion.div
          className="bg-black/60 backdrop-blur-sm px-6 py-3 border border-blue-400/50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-sm font-mono text-blue-300">
            {currentSlide + 1} / {teamSlides.length}
          </span>
        </motion.div>

        <motion.button
          onClick={nextSlide}
          className="p-3 bg-blue-600/80 hover:bg-blue-500 border border-blue-400/50 backdrop-blur-sm transition-all duration-300"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
        {teamSlides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 border border-blue-400/50 transition-all duration-300 ${
              currentSlide === index ? 'bg-blue-500' : 'bg-transparent hover:bg-blue-600/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative h-full grid grid-cols-12 gap-0"
      >
        {/* Left Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-3 bg-black/60 border-r border-blue-500/20 p-6 backdrop-blur-sm flex flex-col"
        >
          <motion.div
            variants={contentVariants}
            initial="enter"
            animate="center"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl font-black uppercase tracking-tighter leading-none text-white mb-3" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                TEAM<br/>XII TEL
              </h1>
              <div className="text-xs text-blue-400 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                PRESENTATION_MODE.SYS
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="border border-blue-500/30 p-4 bg-gray-900/40 backdrop-blur-sm">
              <div className="text-sm font-bold mb-3 uppercase tracking-wider text-blue-300" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                CURRENT SLIDE:
              </div>
              <div className="text-xs font-mono text-white mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                &gt;&gt; MEMBER #{currentSlide + 102}
              </div>
              <div className="text-xs text-blue-400" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                {currentMember.name}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-3" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                NAVIGATION
              </div>
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: 'rgb(59 130 246 / 0.2)' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 p-3 border border-blue-500/30 cursor-pointer transition-all duration-300 backdrop-blur-sm bg-blue-500 text-black"
                onClick={nextSlide}
              >
                <Users size={14} />
                <span className="text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                  TEAM PROFILE
                </span>
                <ChevronRight size={14} className="ml-auto" />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="border border-blue-500/50 p-4 bg-gray-900/40 backdrop-blur-sm">
              <div className="text-xs font-bold mb-3 uppercase tracking-wider text-blue-300" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                PROJECT:
              </div>
              <div className="text-xs h-6 flex items-center mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="border-r-2 border-blue-400 pr-2 animate-pulse text-white">
                  TELEKOMUNIKASI RESEARCH
                </span>
              </div>
              <div className="text-xs text-blue-400 leading-relaxed" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                SMK Telkom Makassar • 2025
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="border border-blue-500/30 p-3 bg-blue-600/80 text-white backdrop-blur-sm mt-auto"
          >
            <p className="text-xs font-mono uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              &gt;&gt; 6 TEAM MEMBERS
            </p>
          </motion.div>
        </motion.div>

        {/* Center: Photo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="col-span-5 bg-gray-900/40 border-r border-blue-500/20 relative flex items-center justify-center backdrop-blur-sm overflow-hidden"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-center space-y-6 w-full max-w-md px-8"
            >
              <motion.div
                className="relative w-full aspect-square max-w-sm mx-auto"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="w-full h-full border-2 border-blue-500/40 bg-gray-900/60 flex items-center justify-center backdrop-blur-sm overflow-hidden shadow-2xl shadow-blue-500/20"
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)",
                    borderColor: "rgba(59, 130, 246, 0.8)"
                  }}
                >
                  <Image
                    src={currentMember.image}
                    alt={currentMember.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col items-center justify-center p-8"
                    style={{display: 'none'}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
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
                      {currentMember.name.split(' ').slice(0, 2).join(' ')}
                    </div>
                    <div className="text-blue-200 text-sm uppercase tracking-wider" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                      {currentMember.class}
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 right-4 bg-blue-600/90 border border-blue-500/30 px-3 py-2 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(59, 130, 246, 0.95)"
                  }}
                >
                  <div className="text-xs font-bold text-white uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {currentMember.class}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Right: Content Panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="col-span-4 bg-black/60 p-6 backdrop-blur-sm overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-blue-500"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-8 pb-20"
            >
              {/* Main Title */}
              <motion.div variants={itemVariants} className="space-y-4">
                <motion.h2
                  className="text-2xl font-black uppercase text-white leading-tight tracking-wider"
                  style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
                  whileHover={{ scale: 1.02, color: "#60a5fa" }}
                >
                  {currentMember.name}
                </motion.h2>
                <p className="text-sm text-blue-300 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {currentMember.role} • {currentMember.specialization}
                </p>
                <motion.div
                  className="w-16 h-1 bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                />
                <div className="text-xs text-blue-400 font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  NIS: {currentMember.nis}
                </div>
              </motion.div>

              {/* Birth Info */}
              <motion.div variants={itemVariants} className="space-y-4">
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                  <Calendar size={18} className="text-blue-400" />
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                    BIRTH INFO
                  </h3>
                </motion.div>
                <div className="space-y-2">
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ x: 5 }}
                  >
                    <MapPin size={14} className="text-blue-400" />
                    <span className="text-sm text-blue-200" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                      {currentMember.birthPlace}
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    whileHover={{ x: 5 }}
                  >
                    <Calendar size={14} className="text-blue-400" />
                    <span className="text-sm text-blue-200" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                      {currentMember.birthDate}
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* About Section */}
              <motion.div variants={itemVariants} className="space-y-4">
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                  <User size={18} className="text-blue-400" />
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                    ABOUT
                  </h3>
                </motion.div>
                <p className="text-sm text-blue-200 leading-relaxed" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                  {currentMember.description}
                </p>
              </motion.div>

              {/* Motto/Quote */}
              <motion.div variants={itemVariants} className="space-y-4">
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                  <Quote size={18} className="text-blue-400" />
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                    MOTTO
                  </h3>
                </motion.div>
                <motion.div
                  className="border-l-4 border-blue-500/50 pl-4 py-2 bg-blue-900/20 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 }}
                  whileHover={{
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    borderColor: "rgba(59, 130, 246, 0.8)",
                    x: 5
                  }}
                >
                  <motion.p
                    className="text-sm text-blue-200 leading-relaxed italic"
                    style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
                    animate={{
                      color: ["#bfdbfe", "#60a5fa", "#bfdbfe"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    "{currentMember.motto}"
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthorProfile;
