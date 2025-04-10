import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// import logo from '../assets/images/logo.png'
import ServicesDropdown from './ServicesDropdown';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const routes = [
    { path: "/testimonials", label: "Testimonials" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/blogs", label: "Blogs" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" }
  ];

  const isActive = (path) => location.pathname === path;

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const menuItemVariants = {
    closed: {
      x: -20,
      opacity: 0
    },
    open: i => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <header style={{ backgroundColor: 'rgba(10, 10, 10, 0.9)' }} className="shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744309767/logo2_v4rrcd.png" alt="KDP Logo" className="h-12" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="relative text-white hover:text-orange-400 transition-colors text-sm lg:text-base group"
            >
              Home
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
                style={{
                  width: isActive("/") ? "100%" : "0%",
                  backgroundColor: isActive("/") ? "#fb923c" : ""
                }}
              />
            </Link>
            <ServicesDropdown />
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="relative text-white hover:text-orange-400 transition-colors text-sm lg:text-base group"
              >
                {route.label}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                  style={{
                    width: isActive(route.path) ? "100%" : "0%",
                    backgroundColor: isActive(route.path) ? "#fb923c" : ""
                  }}
                />
              </Link>
            ))}
            <a 
              href="tel:+18552490007" 
              className="text-orange-400 transition-colors text-sm lg:text-base px-6 py-2 rounded-full hover:bg-orange-400 hover:text-white"
            >
              +1 (855) 249-0007
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-orange-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </motion.svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden overflow-hidden bg-[rgba(10,10,10,0.95)]"
            >
              <motion.div className="flex flex-col space-y-2 py-4">
                <motion.div
                  variants={menuItemVariants}
                  custom={0}
                >
                  <Link
                    to="/"
                    className={`relative px-4 py-2 text-white transition-colors block ${
                      isActive("/") ? 'text-orange-400' : 'hover:text-orange-400'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Home</span>
                    {isActive("/") && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-4 w-[100px] h-0.5 bg-orange-400"
                      />
                    )}
                  </Link>
                </motion.div>

                <motion.div
                  variants={menuItemVariants}
                  custom={1}
                  className="px-4 py-2"
                >
                  <ServicesDropdown />
                </motion.div>

                {routes.map((route, index) => (
                  <motion.div
                    key={route.path}
                    variants={menuItemVariants}
                    custom={index + 2}
                  >
                    <Link
                      to={route.path}
                      className={`relative px-4 py-2 text-white transition-colors block ${
                        isActive(route.path) ? 'text-orange-400' : 'hover:text-orange-400'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{route.label}</span>
                      {isActive(route.path) && (
                        <motion.div
                          layoutId="underline"
                          className="absolute bottom-0 left-4 w-[100px] h-0.5 bg-orange-400"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={menuItemVariants}
                  custom={routes.length + 2}
                >
                  <a 
                    href="tel:+18552490007" 
                    className="px-4 py-2 text-orange-400 hover:text-white hover:bg-orange-400 transition-colors block"
                  >
                    +1 (855) 249-0007
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header; 