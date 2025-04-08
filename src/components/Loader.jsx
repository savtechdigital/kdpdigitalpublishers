import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[rgba(10,10,10,0.98)] flex items-center justify-center z-50">
      <div className="relative">
        {/* Main rotating circle */}
        <motion.div
          className="w-16 h-16 border-4 border-orange-400 rounded-full"
          animate={{
            rotate: 360,
            borderRadius: ["50%", "40%", "50%"]
          }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity
          }}
        />
        
        {/* Inner pulsing circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-8 h-8 bg-orange-400"
          initial={{ scale: 0.5, x: "-50%", y: "-50%" }}
          animate={{
            scale: [0.5, 1, 0.5],
            borderRadius: ["20%", "50%", "20%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />

        {/* Text below */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading...
        </motion.div>

        {/* Orbiting dots */}
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-400 rounded-full"
            initial={{
              x: "-50%",
              y: "-50%",
              scale: 0
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: 360,
              x: ["-50%", "-50%"],
              y: ["-50%", "-50%"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              delay: index * 0.3
            }}
            style={{
              transformOrigin: "center center",
              margin: "-1px 0 0 -1px"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader; 