import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center text-white hover:text-orange-400 transition-colors text-sm lg:text-base">
        <span>Services</span>
        <svg
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 mt-2 w-56 bg-[rgba(10,10,10,0.95)] rounded-md shadow-lg overflow-hidden z-50"
        >
          <div className="py-1 max-h-[calc(100vh-120px)] overflow-y-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="block px-4 py-2 text-sm text-white hover:bg-orange-500 transition-colors"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ServicesDropdown; 