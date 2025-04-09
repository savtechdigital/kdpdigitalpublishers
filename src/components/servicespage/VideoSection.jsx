import { motion } from "framer-motion";
import { useRef } from "react";
import { useVideo } from "../../context/VideoContext";

const VideoSection = ({ title, description, videoSrc, posterSrc, lineWidth = "230px" }) => {
  const videoRef = useRef(null);
  const { handleVideoPlay } = useVideo();

  const onPlay = () => {
    handleVideoPlay(videoRef.current);
  };

  return (
    <section className="relative bg-white overflow-hidden py-10 md:py-20">
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: lineWidth }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-orange-500 mx-auto mb-4 md:mb-6"
          />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="aspect-video relative"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster={posterSrc}
              loading="lazy"
              controls
              preload="metadata"
              onPlay={onPlay}
            >
              <source
                src={videoSrc}
                type="video/mp4"
              />
            </video>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection; 