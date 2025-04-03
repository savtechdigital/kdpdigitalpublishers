import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: 'rgba(10, 10, 10, 0.9)' }} className="shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="KDP Logo" className="h-12" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/"  className="text-white hover:text-blue-600 ">Home</Link>
            <Link to="/services" className="text-white hover:text-blue-600">Services</Link>
            <Link to="/portfolio" className="text-white hover:text-blue-600">Portfolio</Link>
            <Link to="/about" className="text-white hover:text-blue-600">About Us</Link>
            <Link to="/contact" className="text-white hover:text-blue-600">Contact</Link>
            <a href="tel:+18552490007" className=" text-white px-6 py-2 rounded-full">
              +1 (855) 249-0007
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-white">Home</Link>
              <Link to="/services" className="block px-3 py-2 text-white">Services</Link>
              <Link to="/portfolio" className="block px-3 py-2 text-white">Portfolio</Link>
              <Link to="/about" className="block px-3 py-2 text-white">About Us</Link>
              <Link to="/contact" className="block px-3 py-2 text-white">Contact</Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

export default Header; 