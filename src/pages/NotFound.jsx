import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <motion.div 
        className="max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-lg p-8 md:p-12 rounded-xl shadow-2xl border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-orange-500 text-9xl font-bold tracking-tight mb-2">404</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </motion.div>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Page Not Found
        </motion.h2>
        
        <motion.p 
          className="text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          We couldn't find the page you were looking for.<br />
          The path <span className="text-orange-400 font-mono bg-gray-800 px-2 py-1 rounded text-sm">{location.pathname}</span> doesn't exist on our website.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center"
        >
          <Link 
            to="/"
            className="px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all inline-block"
          >
            Return to Home
          </Link>
          
          <Link 
            to="/contact"
            className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all inline-block"
          >
            Contact Support
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-gray-400 text-sm"
        >
          <p>Suggested pages: <Link to="/services" className="text-orange-400 hover:underline">Services</Link>, <Link to="/blogs" className="text-orange-400 hover:underline">Blogs</Link>, <Link to="/portfolio" className="text-orange-400 hover:underline">Portfolio</Link></p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound; 