"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AuthorProfile from "../components/AuthorProfile";
import TopNavigation from "../components/TopNavigation";
import LeftSidebar from "../components/LeftSidebar";
import ImageDisplay from "../components/ImageDisplay";
import ContentPanel from "../components/ContentPanel";
import { allFacts } from "../data/factsData-fixed";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [slideDirection, setSlideDirection] = useState(1);
  const [currentSection, setCurrentSection] = useState(0); // 0: Facts, 1: Profile

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && currentSection === 0) {
      const interval = setInterval(() => {
        setSlideDirection(1);
        setCurrentSlide((prev) => (prev + 1) % allFacts.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, isAutoPlay, currentSection]);

  const nextSlide = () => {
    if (currentSection === 0) {
      setSlideDirection(1);
      setCurrentSlide((prev) => (prev + 1) % allFacts.length);
    }
  };

  const prevSlide = () => {
    if (currentSection === 0) {
      setSlideDirection(-1);
      setCurrentSlide((prev) => (prev - 1 + allFacts.length) % allFacts.length);
    }
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleSectionChange = (section) => {
    setCurrentSection(section);
    setCurrentSlide(0);
  };

  const handleAutoPlayToggle = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const currentItem = allFacts[currentSlide];
  const sectionTitle = "5G MIMO & PROFESIONAL TELEKOMUNIKASI INDONESIA";

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-950 to-blue-950 text-white overflow-hidden" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Simple Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 to-transparent"></div>
      </div>

      {/* Top Navigation */}
      <TopNavigation
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
        isAutoPlay={isAutoPlay}
        onAutoPlayToggle={handleAutoPlayToggle}
      />

      {/* Main Content */}
      <div className="relative h-[calc(100vh-5rem)]">
        <AnimatePresence mode="wait">
          {currentSection === 0 ? (
            <motion.div
              key="facts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-12 h-full"
            >
              <LeftSidebar
                currentSlide={currentSlide}
                currentData={allFacts}
                currentItem={currentItem}
                onSlideChange={handleSlideChange}
                onPrevSlide={prevSlide}
                onNextSlide={nextSlide}
                slideDirection={slideDirection}
                setSlideDirection={setSlideDirection}
              />

              <ImageDisplay
                currentSlide={currentSlide}
                currentItem={currentItem}
                slideDirection={slideDirection}
                onPrevSlide={prevSlide}
                onNextSlide={nextSlide}
              />

              <ContentPanel
                currentSlide={currentSlide}
                currentItem={currentItem}
                currentData={allFacts}
                sectionTitle={sectionTitle}
              />
            </motion.div>
          ) : (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="h-full bg-gradient-to-br from-black/80 to-slate-900/80 backdrop-blur-xl"
            >
              <AuthorProfile />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        /* Simple scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.3);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.6);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.8);
        }
      `}</style>
    </div>
  );
}
