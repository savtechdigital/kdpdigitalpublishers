import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const services = [
    { title: "Book Publishing", path: "/services/publishing" },
    { title: "Book Marketing", path: "/services/marketing" },
    { title: "Ebook Publishing", path: "/services/ebook-publishing" },
    { title: "Ghost Writing", path: "/services/ghost-writing" },
    { title: "Editing & Proofreading", path: "/services/editing" },
    { title: "Formatting", path: "/services/formatting" },
    { title: "Cover Design", path: "/services/cover-design" },
    { title: "Illustrations", path: "/services/illustrations" },
    { title: "Audio Book", path: "/services/audio-book" },
    { title: "Author Website", path: "/services/author-website" },
    { title: "Video Trailer", path: "/services/video-trailer" }
  ];

  const isActive = (path) => location.pathname === path;
  const isServicesActive = services.some(service => location.pathname === service.path);
  const isMobile = window.innerWidth < 768;

  return (
    <div 
      className={`relative ${isMobile ? 'w-full' : 'group'}`}
      {...(!isMobile && {
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false)
      })}
    >
      <button 
        onClick={() => isMobile && setIsOpen(!isOpen)}
        className={`flex items-center text-white hover:text-orange-400 transition-colors text-sm lg:text-base relative ${
          isServicesActive ? 'text-orange-400' : ''
        } ${isMobile ? 'w-full justify-between' : ''}`}
      >
        <span>Services</span>
        <svg
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
        {!isMobile && (
          <motion.div
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"
            whileHover={{ width: "100%" }}
            style={{
              width: isServicesActive ? "100%" : "0%",
              backgroundColor: isServicesActive ? "#fb923c" : ""
            }}
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`${
              isMobile 
                ? 'w-full bg-[rgba(20,20,20,0.95)] mt-2' 
                : 'absolute left-0 mt-2 w-56 bg-[rgba(10,10,10,0.95)] rounded-md shadow-lg'
            } overflow-hidden z-50`}
          >
            <div className={`grid ${isMobile ? 'grid-cols-1' : ''}`}>
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2 text-sm text-white hover:bg-orange-500 transition-colors ${
                    isActive(service.path) ? 'text-orange-400 hover:text-white' : ''
                  }`}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesDropdown; 