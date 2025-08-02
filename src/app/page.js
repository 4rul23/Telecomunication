"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AuthorProfile from "../components/AuthorProfile";
import TopNavigation from "../components/TopNavigation";
import LeftSidebar from "../components/LeftSidebar";
import ImageDisplay from "../components/ImageDisplay";
import ContentPanel from "../components/ContentPanel";
import { allFacts } from "../data/factsData";

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
  const sectionTitle = "Fun Facts Telekomunikasi Indonesia";

  // Safety check
  if (!currentItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-slate-950 to-blue-950 text-white overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>

        {/* Subtle floating particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-cyan-400/20 rounded-full animate-bounce" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Top Navigation */}
      <TopNavigation
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
        isAutoPlay={isAutoPlay}
        onAutoPlayToggle={handleAutoPlayToggle}
      />

      {/* Main Content */}
      <div className="relative h-[calc(100vh-3.5rem)]">
        <AnimatePresence mode="wait">
          {currentSection === 0 ? (
            <motion.div
              key="facts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex h-full gap-0"
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
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <div className="h-full p-6">
                <div className="bg-slate-900/60 backdrop-blur-lg border border-blue-500/20 rounded-2xl h-full overflow-hidden">
                  <AuthorProfile />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

        {/* Simplified CSS */}
        <style jsx global>{`
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

          html {
            scroll-behavior: smooth;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }

          .glass {
            background: rgba(15, 23, 42, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(59, 130, 246, 0.2);
          }

          /* Professional typography */
          h1, h2, h3, h4, h5, h6 {
            font-weight: 600;
            letter-spacing: -0.025em;
          }

          p {
            line-height: 1.6;
          }
        `}</style>
    </div>
  );
}
