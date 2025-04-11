import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Slider from "../slider/slider";
import Form from "../form/Form";
import Banner from "../bannersections/Banner";
import Calendly from "../calendly/Calendly";
import Payment from "../payment/Payment";
import { useModal } from "../../context/ModalContext";

const BookMarketing = () => {
  const { openModal } = useModal();
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [isVisible, setIsVisible] = useState(false);
  const videoRefs = useRef([]);

  const videoData = [
    {
      id: 1,
      title: "Client Testimonial 1",
      description: "Hear what our clients have to say about our services",
      videoUrl:
        "https://res.cloudinary.com/dncqhipqk/video/upload/v1744040738/9_ez4drn.mp4",
      thumbnail:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg",
    },
    {
      id: 2,
      title: "Client Testimonial 2",
      description: "Success stories from our satisfied authors",
      videoUrl:
        "https://res.cloudinary.com/dncqhipqk/video/upload/v1744040740/10_v5m1r0.mp4",
      thumbnail:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg",
    },
    {
      id: 3,
      title: "Client Testimonial 3",
      description: "Real experiences from our publishing journey",
      videoUrl:
        "https://res.cloudinary.com/dncqhipqk/video/upload/v1744040745/5_qp6pvl.mp4",
      thumbnail:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg",
    },
    {
      id: 4,
      title: "Client Testimonial 4",
      description: "Author success stories and experiences",
      videoUrl:
        "https://res.cloudinary.com/dncqhipqk/video/upload/v1744041113/6_i57skv.mp4",
      thumbnail:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg",
    },
    //   {
    //     id: 5,
    //     title: "Client Testimonial 5",
    //     description: "Hear from our published authors",
    //     videoUrl: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744040738/7_c6byah.mp4",
    //     thumbnail: 'https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg'
    //   },
    //   {
    //     id: 6,
    //     title: "Client Testimonial 6",
    //     description: "Hear from our published authors",
    //     videoUrl: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744040739/8_nqwwrq.mp4",
    //     thumbnail: 'https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg'
    //   },
    //   {
    //     id: 7,
    //     title: "Client Testimonial 6",
    //     description: "Hear from our published authors",
    //     videoUrl: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744040744/1_lulldu.mp4",
    //     thumbnail: 'https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg'
    //   },
    //   {
    //     id: 8,
    //     title: "Client Testimonial 6",
    //     description: "Hear from our published authors",
    //     videoUrl: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744040753/2_wjw8ky.mp4",
    //     thumbnail: 'https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg'
    //   },
    //   {
    //     id: 9,
    //     title: "Client Testimonial 6",
    //     description: "Hear from our published authors",
    //     videoUrl: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744041405/3_wbtoxp.mp4",
    //     thumbnail: 'https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg'
    //   },
    //   {
    //     id: 10,
    //     title: "Client Testimonial 6",
    //     description: "Hear from our published authors",
    //     videoUrl: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744040734/4_wfi9yv.mp4",
    //     thumbnail: 'https://res.cloudinary.com/dncqhipqk/image/upload/v1744040740/1_yoep6i.jpg'
    //   },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
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
        rootMargin: "100px",
        threshold: 0.1,
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
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <section
        className="relative min-h-screen bg-cover bg-center overflow-hidden py-16 md:py-24"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dncqhipqk/image/upload/v1744066685/Untitled_design_cuwfxh.jpg')",
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
                  Turning Manuscripts into Must-Read Masterpieces
                </h3>
                <h1 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
                  Book <span className="text-orange-400">Publishing</span> That
                  Elevates Your Literary Vision
                </h1>
                <p className="text-md md:text-md mb-10 text-gray-200 leading-relaxed">
                  At Kinetic Digital Publishers, we provide exceptional book
                  publishing services tailored to your unique vision. From
                  comprehensive editing and striking cover design to worldwide
                  distribution, we handle every step of the journey. The best
                  part? You retain 100% of your rights and royalties.
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
      {/* ////////////////////////// */}
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
                  src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744067206/3_e8anrd.png"
                  alt="Book Journey to Bestsellerdom"
                  className="w-full max-h-[500px] object-contain"
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
                  R
                </motion.span>
                eady to Get Your Book in Front of the Right Audience?{" "}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                Promoting a book isn't just about selling copies. It's about
                branding yourself as an author first. Sounds cliché? Well, this
                is how you can promote your book successfully. The first step is
                to know your audience. Gain insights related to your audience
                and what they prefer doing both online and offline. Once you're
                well aware of that, conveying your message would just require a
                medium.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-700"
              >
                With consistency and perseverance, you can get success in your
                book marketing campaign. There are several marketing strategies
                for authors. Be it social media marketing or newsletter updates.
                One tip for book marketing is to design a plan that is focused
                on your target audience. Try building a relationship with them.
                Lastly, all you need is a spotlight, which is where you can
                partner with influencers and other authors.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-700"
              >
                Kinetic Digital Publishers provides you with a medium to
                successfully publish and market your books. We ensure that book
                marketing feels like an exciting journey rather than another
                stressed-out chore that needs to be done. If you’re searching
                for the best book marketer in Dallas, we're here to help you
                slay the marketing game like never before.
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
      {/* /////////////////////////////// */}

      {/* /////////////////////////////////////// bg image and card section */}
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
            >
              Kinetic Digital Publishers Premium Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-base md:text-md"
            >
              Kinetic Digital Publishers provides top-quality, custom-tailored
              solutions for all your Book Writing, Editing, Publishing, and
              Marketing needs.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Book Publishing",
                content:
                  "From comprehensive editing, the copyright of your work, interior layout and design, creation of your book cover, ISBN, and listing of your published book with The Library of Congress — Kinetic Digital Publishers handles all of your publishing needs. Best of all, you retain 100% of your book rights and royalties. We take none.",
              },
              {
                title: "Book Writing",
                content:
                  "Be mentored by the Co Founder of Kinetic Digital Publishers, and the industry's leading book-writing coach, Marvin Mahoney. His proprietary writing method will guide you to complete your book from start to finish in 90 days or less. Certain restrictions apply, so contact us today to see if you qualify.",
              },
              {
                title: "Book Promotion",
                content:
                  "Our team of experts willsetup a strategic marketing campaign to ensure and guarantee your book becomes a #1 Bestseller on Amazon, NY Times, Wall Street Journal and USA Today. You'll achieve the new title of 'Bestselling Author' and receive the Amazon seal. Certain restrictions apply, so contact us today to see if you qualify.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                }}
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
      {/* /////////////////////////////////////// */}
      <Banner />
      {/* ////////////////////////////////////////////////////////////////////vedio section */}
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
      {/* ////////////////////////////////////////////////////////////////////vedio section */}
      {/* ///////////////////////////////////////////////////// */}
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
                src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744045718/4_tvwsui.png"
                alt="Book Icon"
                className="w-16 h-16 mx-auto mb-4"
                loading="lazy"
              />
              <h2 className="text-3xl md:text-4xl font-bold mb-6  text-orange-500 ">
                Book Marketing Tips for Authors
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
                src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744045718/4_tvwsui.png"
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
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </div>
                  <div>
                  
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Be Authentic and Be Yourself
                    </h3>
                    <p className="text-gray-700 text-sm">
                    Share your journey, challenges,
                    and triumphs. Readers love connecting with real people
                    behind the stories they love. Show off your personality and
                    let them see the writer behind the words.
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
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Engage… Don’t Just
                    Broadcast
                    </h3>
                    <p className="text-gray-700 text-sm">
                    Reply to comments, join discussions, and show your
                    audience you value their input. Share their reviews or
                    shoutouts to build a loyal community.
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
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Use Visuals
                    </h3>
                    <p className="text-gray-700 text-sm">
                  
                    Eye-catching images and videos perform better than anything.
                    Use your book cover or short reels to highlight your book's
                    themes. Add captions that spark curiosity and encourage
                    interaction
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
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Conclusion
            </h3>
            <p className="text-gray-600 max-w-5xl text-sm mx-auto mb-8">
            At KDP, we combine creativity with our passion to make your book stand out in a crowded marketplace. This way, we design a marketing journey that not only sells books but also creates a meaningful connection with your audience. Let’s get started!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(249, 115, 22, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all"
              >
                Call Us +1 (855) 248-0007
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(107, 114, 128, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all"
              >
                Live Chat
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(249, 115, 22, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all"
              >
                Get A Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* ///////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////// */}
      <Calendly />
      <Payment />
      {/* ///////////////////////////////////////////////////// */}
    </>
  );
};

export default BookMarketing;
