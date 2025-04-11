import Calendly from "../calendly/Calendly";
import Form from "../form/Form";
import Payment from "../payment/Payment";
import Slider from "../slider/slider";
import Banner from "../bannersections/Banner";
import { useModal } from "../../context/ModalContext";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

  const EbookPublishing = () => {
  const { openModal } = useModal();
  return (
    <>
      <section
        className="relative min-h-screen bg-cover bg-center overflow-hidden py-16 md:py-24"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dncqhipqk/image/upload/v1744045715/222_bekzik.jpg')",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          backgroundBlendMode: "overlay",
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent opacity-40"></div>

        {/* Main content container with extra padding */}
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 max-w-7xl mx-auto">
            {/* Left side - Text content with reduced width */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white md:w-2/5 mb-12 md:mb-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative"
              >
                {/* Decorative accent for professional look */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="absolute -left-4 top-0 bottom-0 w-1 bg-orange-500 rounded-full"
                ></motion.div>

                <h3 className="text-xl md:text-xl font-medium mb-4 pl-4">
                  E-Book Publishing Made Simple
                </h3>

                <h1 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
                  E-Book <span className="text-orange-400">Publishing</span>
                  Service Provider In USA!
                </h1>
                <p className="text-md md:text-md mb-10 text-gray-200 leading-relaxed">
                  Your story deserves nothing less than recognition. We're here
                  to help turn it into a bestseller every step of the way.
                </p>
                <div className="flex flex-wrap gap-6 mt-10">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 5px 15px rgba(255,165,0,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openModal("apply-now-button")}
                    className="px-4 py-2 bg-transparent border-2 border-white text-white text-lg font-semibold hover:bg-white hover:text-black transition-all rounded-lg"
                  >
                    Get A Quote
                  </motion.button>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 5px 15px rgba(255,165,0,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-orange-500 text-white text-lg font-semibold hover:bg-orange-600 transition-all rounded-lg"
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Form with reduced width */}
            <Form />
          </div>
        </div>
      </section>
      <Slider />
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="bg-white py-10 px-4 lg:py-20 lg:px-20"
      >
        <div className="container mx-auto md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              className="relative w-full h-full flex justify-center"
            >
              <motion.div>
                <motion.img
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.4 },
                  }}
                  src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744045855/BookPublishing-blog_bdw5od.jpg"
                  alt="Book Journey to Bestsellerdom"
                  className="w-full max-h-[500px] object-contain"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-3 md:p-4 rounded-full shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </motion.div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="space-y-6"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-black mb-2"
              >
                <motion.span
                  initial={{ color: "#000" }}
                  animate={{ color: "#f97316" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  W
                </motion.span>
                hat is e book{" "}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                An eBook is like an electronic version of a book. It can be
                opened on various appliances, including appliances, e-readers,
                tablets, and computers. The amazing convenience of portability
                allows readers to have unlimited access to a vast number of
                titles in the palm of their hands, at any time and at any place.
                eBooks often include features such as adjustable font size,
                interactive elements, and hyperlinks that make reading an
                exciting experience.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-700"
              >
                Universal Writing provides a comprehensive eBook service,
                offering professional editing, formatting for various platforms,
                eye-catching cover design, and publishing guidance.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-4 mt-6 flex-wrap"
              >
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
                    backgroundColor: "#ea580c",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  onClick={() => openModal("apply-now-button")}
                  className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition-all"
                >
                  Get A Quote
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
                    backgroundColor: "#ea580c",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition-all"
                >
                  Live Chat
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="h-1 bg-gradient-to-r from-orange-500 to-transparent mt-4"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
            {/* Left side - Image */}

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-2/5"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                E-Book Publishing
              </h2>

              <p className="text-gray-700 mb-6">
                We are streamlining the author's book publishing process. The
                services here include professional editing, eye-catching cover
                designs, and expert formatting for strategic marketing.
                Self-publishing and distribution help you reach your audience
                more effectively: let our team support you along the path to
                published author status.
              </p>
              <p className="text-gray-700 mb-6">
                Universal Writing is your comprehensive, full-service ebook
                service; there at every point in the publishing process,
                professional editing, expert formatting, and impressive cover
                design, right through to helping your ebook stand out.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                Understanding Book Publishing
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>
                    Traditional Publishing

                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>
                    Academic Publishing
                    publishing.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>
                    Self-Publishing
                    </span>
                  </li>
                </ul>
              </div>

              

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal("apply-now-button")}
                  className="px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-all"
                >
                  Get A Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white border border-orange-500 text-orange-500 font-medium rounded-md hover:bg-orange-50 transition-all"
                >
                  Live Chat
                </motion.button>
              </div>
            </motion.div>
            <motion.div>
              <motion.img
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.4 },
                }}
                src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744045713/2_yc0wii.png"
                alt="Book Journey to Bestsellerdom"
                className="w-full max-h-[500px] object-contain rounded-xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* /////////////////////////////////////////////////////////////// */}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dncqhipqk/image/upload/v1744045734/ai-4_khyjrg.jpg')`,
        }}
        className="bg-white bg-no-repeat bg-cover bg-center py-10 px-4 lg:py-20 lg:px-20"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
            >What We Provide

            </motion.h2>
           
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Professional editing:",
                content: "The first step is refining your manuscript. Get yourself connected with professional editors who will give the finishing touch to your work. KDP provides expert editing services to ensure your work is flawless and professional."
              },
              {
                title: "Formatting services:",
                content: "Your book’s cover is its first impression. We’ll help you create a stunning design that grabs attention and reflects your story. From typography to illustrations, every detail matters."
              },
              {
                title: "Proofreading",
                content: "Formatting is the most important step before publishing. KDP's formatting team is well-trained to meet industry standards for both print and digital formats. This gives readers a professional and enjoyable experience."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6 transition-all"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  className="text-xl md:text-2xl font-bold mb-4 text-orange-500"
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="text-gray-600 text-sm md:text-base"
                >
                  {service.content}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* ///////////////////////////// */}
      <Banner/>
      {/* ////////////////////////////// */}
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
      
      {/* ////////////////////////////////////// */}
      {/* ////////////////////////////////////////////// */}

      {/* Publishing Mistakes That Are Just Not It */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full -mr-10 -mt-10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-100 rounded-full -ml-20 -mb-20 opacity-50"></div>
        <div className="absolute top-1/4 left-10 w-6 h-6 bg-orange-300 rounded-full opacity-40"></div>
        <div className="absolute top-3/4 right-10 w-8 h-8 bg-orange-300 rounded-full opacity-40"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744045718/50-off_yg3tkm.png" 
                alt="Book Icon" 
                className="w-16 h-16 mx-auto mb-4"
              />
              <h2 className="text-3xl md:text-4xl font-bold mb-6  text-orange-500 ">
                Publishing Mistakes That Are Just Not It
              </h2>
              <div className="w-[calc(100%-250px)] h-1 bg-orange-500 mx-auto mb-8"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <img
                src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744045716/4_1_ujye7y.png"
                alt="Children reading a book"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                loading="lazy"
              />
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 space-y-8"
            >
              {/* Mistake 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500"
              >
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Skipping Professional Editing Is a Major Red Flag</h3>
                    <p className="text-gray-700 text-sm">
                      The best writers even need professional eyes to catch errors and improve flow. Never underestimate the power of a professional editor in making your book shine.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Mistake 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500"
              >
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Underestimating the Power of a Great Cover</h3>
                    <p className="text-gray-700 text-sm">
                      Your book's cover is its first impression. Make it count! A poorly designed cover can put off the readers.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Mistake 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500"
              >
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Choosing the Wrong Publishing Partner</h3>
                    <p className="text-gray-700 text-sm">
                      Always research and look for a publisher that aligns its services with your goals. Kinetic Digital Publishers has helped countless authors avoid these mistakes and achieve their publishing dreams. Let's make your book a success.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-16 w-full"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Write. Publish. Succeed.</h3>
            <p className="text-gray-600 max-w-5xl text-sm mx-auto mb-2">
              Every bestselling book begins with a dream, and Kinetic Digital Publishers turns those dreams into reality. From the beginning to the final page, we work together with you to create a successful book that fits your story and your vision. Publishing isn't just about printing pages—it's about creating something that relates with readers and leaves a lasting impact.
            </p>
            <p className="text-gray-600 max-w-5xl text-sm mx-auto mb-2">
             KDP doesn't believe in the idea of traditional publishing. Rather, they help you build an author brand that sets you apart. They help you bring your story to the world. Your book isn’t just another project; it’s a legacy in the making. Well, we’re here to make it extraordinary.
            </p>
            <p className="text-gray-600 max-w-5xl text-sm mx-auto mb-8">
            KDP doesn’t leave you alone on this journey. Our publishing team guides you every step of the way. We create stories that aren't just kept on the shelves. They stay in hearts for long. Are you ready to take the leap of faith? Your story deserves to shine, and we’re here to make it happen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(249, 115, 22, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all"
              >
                Call Us +1 (855) 248-0007
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(107, 114, 128, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all"
              >
                Live Chat
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(249, 115, 22, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all"
              >
                Get A Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* /////////////////////////////// */}
      <Calendly />
      <Payment />
    </>
  );
};

export default EbookPublishing;
