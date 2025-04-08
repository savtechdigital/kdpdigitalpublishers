import { motion } from "framer-motion";
import Slider from "../components/slider/slider";
import Calendly from "../components/calendly/Calendly";
import Payment from "../components/payment/Payment";
import Banner from "../components/bannersections/banner";
import { useState, useRef, useEffect } from 'react';

const Testmonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRefs = useRef([]);

  const videoData = [
    {
      id: 1,
      title: "Client Testimonial 1",
      description: "Hear what our clients have to say about our services",
      videoUrl: 'https://res.cloudinary.com/dncqhipqk/video/upload/v1744040738/9_ez4drn.mp4',
      thumbnail: 'https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg'
    },
    {
      id: 2,
      title: "Client Testimonial 2",
      description: "Success stories from our satisfied authors",
      videoUrl: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744040740/10_v5m1r0.mp4",
     thumbnail: 'https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg'
    },
    {
      id: 3,
      title: "Client Testimonial 3",
      description: "Real experiences from our publishing journey",
      videoUrl: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744040745/5_qp6pvl.mp4",
      thumbnail: 'https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg'
    },
    {
      id: 4,
      title: "Client Testimonial 4",
      description: "Author success stories and experiences",
      videoUrl: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744041113/6_i57skv.mp4",
     thumbnail: 'https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg'
    },
    {
      id: 5,
      title: "Client Testimonial 5",
      description: "Hear from our published authors",
      videoUrl: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744040738/7_c6byah.mp4",
      thumbnail: 'https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg'
    },
    {
      id: 6,
      title: "Client Testimonial 6",
      description: "Hear from our published authors",
      videoUrl: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744040739/8_nqwwrq.mp4",
      thumbnail: 'https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg'
    },
    {
      id: 7,
      title: "Client Testimonial 6",
      description: "Hear from our published authors",
      videoUrl: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744040744/1_lulldu.mp4",
      thumbnail: 'https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg'
    },
    {
      id: 8,
      title: "Client Testimonial 6",
      description: "Hear from our published authors",
      videoUrl: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744040753/2_wjw8ky.mp4",
      thumbnail: 'https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg'
    },
    {
      id: 9,
      title: "Client Testimonial 6",
      description: "Hear from our published authors",
      videoUrl: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744041405/3_wbtoxp.mp4",
      thumbnail: 'https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg'
    },
    {
      id: 10,
      title: "Client Testimonial 6",
      description: "Hear from our published authors",
      videoUrl: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744040734/4_wfi9yv.mp4",
      thumbnail: 'https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg'
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target;
            video.load();
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section
        variants={childVariants}
        style={{
          backgroundImage: `url('/src/assets/images/testimonials.png')`,
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
              What Our Clients Say
            </motion.h1>
            <motion.h2
              variants={childVariants}
              className="text-4xl font-bold mb-8"
            >
              Testimonials
            </motion.h2>
          </motion.div>
        </div>
      </motion.section>

      <Slider />
      
      {/* video sections */}
      <section className="py-10 md:py-14 bg-white lg:px-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              variants={childVariants}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              What Our Clients Say About Us
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl"
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.videoUrl}
                  poster={item.thumbnail}
                  className="w-full h-full object-cover"
                  controls
                  muted
                  preload="none"
                  loading="lazy"
                  playsInline
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Banner /> 
      <Calendly />
      <Payment />
    </motion.div>
  );
};

export default Testmonials;

