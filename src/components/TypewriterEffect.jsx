"use client";
import { useState, useEffect } from "react";

export default function TypewriterEffect({ texts, speed = 80, delay = 2000 }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const text = texts[currentIndex];
    let index = 0;

    const timer = setInterval(() => {
      if (index <= text.length) {
        setCurrentText(text.slice(0, index));
        index++;
      } else {
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setCurrentText("");
        }, delay);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [currentIndex, texts, speed, delay]);

  return (
    <div className="text-base h-12 flex items-center" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <span className="border-r-2 border-blue-400 pr-4 animate-pulse text-white font-medium">
        {currentText}
      </span>
    </div>
  );
}
