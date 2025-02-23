'use client';
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percent = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percent);
      setShowButton(percent > 10); // Show button only after 10% scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div 
      className={`fixed right-5 bottom-5 w-16 h-16 z-50 cursor-pointer flex items-center justify-center bg-white rounded-full shadow-lg border-2 border-gray-300 transition-all duration-300 ${
        showButton ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
      onClick={scrollToTop}
    >
      <svg className="absolute w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-gray-200"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
        <circle
          className="text-[#f84e1d] transition-all duration-300"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
          strokeDasharray="283"
          strokeDashoffset={`${283 - (scrollPercentage / 100) * 283}`}
        />
      </svg>
      <span className="absolute text-xl text-[#f84e1d] font-bold cursor-pointer">▲</span>
    </div>
  );
};

export default ScrollProgress;
