import { motion } from 'framer-motion';
import brand1 from '../../assets/images/slider/cl-1.png';
import brand2 from '../../assets/images/slider/cl-2.png';
import brand3 from "../../assets/images/slider/cl-3.png";
import brand4 from "../../assets/images/slider/cl-4.png";
import brand5 from "../../assets/images/slider/cl-5.png";
import brand6 from "../../assets/images/slider/cl-6.png";  
import brand7 from "../../assets/images/slider/cl-7.png";  
import brand9 from "../../assets/images/slider/cl-9.png";  
import brand10 from "../../assets/images/slider/cl-10.png";  
import brand11 from "../../assets/images/slider/partner1.svg";  
import brand12 from "../../assets/images/slider/partner2.svg";  
import brand13 from "../../assets/images/slider/partner3.svg";  
import brand14 from "../../assets/images/slider/partner4.svg";  
import brand15 from "../../assets/images/slider/partner5.svg";  
import brand16 from "../../assets/images/slider/partner6.svg";  


const Slider = () => {
    const brandLogos = [
        // brand1,
        // brand2,
        // brand3,
        // brand4,
        // brand5,
        // brand6,
        // brand7,
        // brand9,
        // brand10,
        brand11,
        brand12,
        brand13,
        brand14,
        brand15,
        brand16,
      ];
      const logos = [...brandLogos, ...brandLogos]; 

  return (
    <section 
    // style={{ backgroundColor: 'rgba(10, 10, 10, 0.9)' }}  
    className="py-4 overflow-hidden bg-gray-900">
      <div className="container mx-auto px-4">
        

        {/* Logo Slider Container */}
        <div className="relative w-full">
          {/* Logo Slider */}
          <motion.div
            className="flex gap-4 md:gap-8"
            animate={{
              x: ["0", "-50%"], // Adjust this value based on your content width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 5,
                ease: "easeIn",
              },
            }}
            drag="x"
            dragConstraints={{ left: -500, right: 0 }} // Limits drag movement
            whileTap={{ cursor: "grabbing" }} 
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 md:w-40 h-16 md:h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-4"
              >
                <img
                  src={logo}
                  alt={`Brand Logo ${index + 1}`}
                  className="max-h-10 md:max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 "
                />
              </div>
            ))}
            
      
          </motion.div>

          {/* Gradient Overlays */}
          {/* <div className="absolute top-0 left-0 h-full w-20 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-20 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div> */}
        </div>
      </div>
    </section>
  )
}

export default Slider;
