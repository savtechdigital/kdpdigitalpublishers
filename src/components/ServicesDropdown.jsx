import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <button className="flex items-center space-x-2 text-white hover:text-orange-400 transition-colors">
        <span>Services</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-orange-400 rounded shadow-lg py-1 z-50">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="block px-4 py-2 text-black hover:bg-orange-500 transition-colors border-b border-orange-500 last:border-none"
            >
              {service.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown; 