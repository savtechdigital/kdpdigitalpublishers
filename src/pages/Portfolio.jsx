import { motion } from 'framer-motion';
import Slider from '../components/slider/slider';
import Filterbooks from './Filterbooks';
import Calendly from '../components/calendly/Calendly';
import Payment from '../components/payment/Payment';
import Banner from '../components/bannersections/Banner';

function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section
        variants={childVariants}
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dncqhipqk/image/upload/v1744389809/portfolio_qptzlk.png')`,
        }}
        className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50 bg-no-repeat bg-cover bg-center"
      >
        <div className="container mx-auto px-4 text-white">
          <motion.div
            variants={childVariants}
            className="text-center"
          >
            <motion.h1
              variants={childVariants}
              className="text-2xl mb-6"
            >
             Our Work
            </motion.h1>
            <motion.h2
              variants={childVariants}
              className="text-4xl font-bold mb-8"
            >
             Portfolio
            </motion.h2>
          </motion.div>
        </div>
      </motion.section>
      
      <Slider />
      
      {/* bookfilter section */}
      <Filterbooks />
      
      <Banner /> 
      
      {/* Calendly section */}
      <Calendly />

      <Payment />
    </motion.div>
  );
}

export default Portfolio; 
