import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const ImageSlider = () => {
  return (
   <>
    {/* image slider */}
      {/* ////////////////////////////////////// */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dncqhipqk/image/upload/v1744045732/ai-3_fcgdct.jpg')`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-4 text-white"
            >
              Our Recent Portfolio
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white text-lg max-w-2xl mx-auto"
            >
              Our work speaks for itself. We believe in offering the best value and most personalised service to you.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Book Slider with Swiper */}
            <div className="max-w-6xl mx-auto">
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                  slideShadows: true,
                }}
                pagination={{ clickable: true }}
                navigation={false}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="portfolio-swiper"
              >
                {[
                  { src: "/src/assets/images/religious/1.webp", title: "The Apocalypse Cometh", author: "Lew Osteen" },
                  { src: "/src/assets/images/children/1.webp", title: "The Bengal Rose Princess", author: "Lloyd E. Bateman" },
                  { src: "/src/assets/images/Autobiography/1.webp", title: "I'm Staying!", author: "No Thanks" },
                  { src: "/src/assets/images/children/2.webp", title: "Don't Feed the Goat!", author: "Alisha Jackson" },
                  { src: "/src/assets/images/religious/2.webp", title: "Sacred Wisdom", author: "Spiritual Insights" },
                  { src: "/src/assets/images/fantasy/1.webp", title: "The Crimson Triangle", author: "Magical Adventures" },
                  { src: "/src/assets/images/selfhelp/1.webp", title: "Overcome Obstacles", author: "Personal Growth" },
                  { src: "/src/assets/images/Business/1.webp", title: "Business Strategies", author: "Success Path" }
                ].map((book, index) => (
                  <SwiperSlide key={index} className="py-12 px-4">
                    <motion.div
                      whileHover={{ 
                        y: -15,
                        boxShadow: "0px 20px 25px rgba(0,0,0,0.4)",
                        transition: { duration: 0.3 } 
                      }}
                      className="relative h-[420px] md:h-[450px] w-[280px] mx-auto"
                    >
                      <img
                        src={book.src}
                        // alt={book.title}
                        className="w-full h-full object-cover rounded-lg shadow-2xl"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 rounded-b-lg">
                        {/* <h3 className="text-white text-lg font-bold">{book.title}</h3> */}
                        {/* <p className="text-gray-300 text-sm">{book.author}</p> */}
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Decorative yellow petals/flowers to match the image */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-20 z-0">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFD700" d="M41.9,-51.2C55.3,-41.7,67.9,-28.7,71.3,-13.5C74.8,1.7,69.2,19.1,59.2,32C49.2,44.9,34.9,53.1,19.2,58.9C3.5,64.7,-13.6,68,-29.7,63.2C-45.8,58.4,-60.8,45.4,-67.9,29C-75,12.5,-74.1,-7.3,-66.1,-22.4C-58.1,-37.4,-42.9,-47.7,-28.7,-56.9C-14.6,-66.1,-1.5,-74.1,7.2,-72.2C15.8,-70.3,28.4,-60.7,41.9,-51.2Z" transform="translate(100 100)" />
              </svg>
            </div>
            <div className="absolute -top-20 right-0 w-60 h-60 opacity-20 z-0">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFD700" d="M41.9,-51.2C55.3,-41.7,67.9,-28.7,71.3,-13.5C74.8,1.7,69.2,19.1,59.2,32C49.2,44.9,34.9,53.1,19.2,58.9C3.5,64.7,-13.6,68,-29.7,63.2C-45.8,58.4,-60.8,45.4,-67.9,29C-75,12.5,-74.1,-7.3,-66.1,-22.4C-58.1,-37.4,-42.9,-47.7,-28.7,-56.9C-14.6,-66.1,-1.5,-74.1,7.2,-72.2C15.8,-70.3,28.4,-60.7,41.9,-51.2Z" transform="translate(100 100)" />
              </svg>
            </div>
          </motion.div>
          
          {/* Custom styles for the Swiper */}
          <style jsx>{`
            .portfolio-swiper {
              padding: 30px 0;
            }
            .swiper-pagination-bullet {
              background-color: #fff;
              opacity: 0.7;
            }
            .swiper-pagination-bullet-active {
              background-color: #f97316;
              opacity: 1;
            }
          `}</style>
        </div>
      </motion.section>
   </>
  )
}

export default ImageSlider
