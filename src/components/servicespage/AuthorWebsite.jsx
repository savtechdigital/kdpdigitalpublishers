import { motion } from "framer-motion";
import Slider from "../slider/slider";
import Form from "../form/Form";
import Banner from "../bannersections/Banner";
import Payment from "../payment/Payment";
import Calendly from "../calendly/Calendly";
import ImageSlider from "../imageslider/ImageSlider";
import { useState } from "react";
import { useModal } from "../../context/ModalContext";
import { useLiveChatContext } from "../Chat/LiveChat";


const AuthorWebsite = () => {
  const [selectedTrend, setSelectedTrend] = useState(0);
  const { openModal } = useModal();
  const { toggleLiveChat, isLiveChatOpen } = useLiveChatContext();
  return (
    <>
      <section
        className="relative min-h-screen bg-cover bg-center overflow-hidden py-24 md:py-36 md:px-16"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dncqhipqk/image/upload/v1744045853/bookpub-banner_z2gv0o.jpg')",
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-24 max-w-7xl mx-auto">
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

                <h1 className="text-2xl md:text-3xl font-bold  mb-2  md:mb-8 leading-tight">
                  Build Your
                  <span className="text-orange-400">Author Brand</span> with a
                  Professional Author Website
                </h1>
                <p className="text-sm text-justify md:text-md mb-10 text-gray-200 leading-relaxed">
                  An author's website is no longer optional in an increasingly
                  digital world. A very effective author website is your
                  branding tool, portfolio, and direct line to readers. A
                  quality professional author website is the cornerstone of your
                  online presence if you are serious about your writing career.
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
                    onClick={toggleLiveChat}
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
              <motion.div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-xl">
                {[
                  "https://res.cloudinary.com/dncqhipqk/image/upload/v1744214848/5_qwue3p.jpg",
                  "https://res.cloudinary.com/dncqhipqk/image/upload/v1744214862/4_i1ouit.jpg",
                  "https://res.cloudinary.com/dncqhipqk/image/upload/v1744214871/3_t7yz2t.jpg",
                  "https://res.cloudinary.com/dncqhipqk/image/upload/v1744214881/2_tp7tvn.jpg",
                  "https://res.cloudinary.com/dncqhipqk/image/upload/v1744214887/1_woopxj.jpg",
                ].map((src, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      times: [0, 0.2, 0.8, 1],
                      delay: index * 4,
                    }}
                  >
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}

                {/* Decorative elements */}
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
                  A
                </motion.span>
                uthor Website Design{" "}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                The design of your author's website will make visitors view you
                as incredible or second-rate. Here are some design tips:
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                First, it should be clean and clutter-free. This way, it's easy
                for visitors to navigate without overwhelming them with numerous
                options or too much information.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                <span className="font-bold text-gray-700">Graphics:</span> Let
                the rich contents of images by using a brilliant color scheme,
                primary font usage, and consistency wherever you use the font.
                Your site has to be an extension of your brand and, therefore,
                your writing style.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                <span className="font-bold text-gray-700">Responsive:</span>{" "}
                Make your site perfectly viewable on any gadget. Many visitors
                come from mobile devices, so ensure that the site looks good on
                them.
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
                  className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition-all"
                  onClick={() => openModal("apply-now-button")}
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
                  onClick={toggleLiveChat}
                  className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition-all"
                >
                  {isLiveChatOpen ? 'Close Chat' : 'Live Chat'}
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
      {/* /////////////////////////////// 2nd img sec */}
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
                Interesting about page
              </h2>

              <p className="text-gray-700 mb-2">
                he About Page: The chance to tell your audience who you are.
                Please share your story with your audience and tell them what
                drives you to write. Here are some about-page tips that may make
                yours appealing
              </p>
              <p className="text-gray-700 mb-6">
                <span className="font-bold text-gray-700">Authenticity: </span>{" "}
                Be honest in your story. Honest readers want honesty and
                transparency.
              </p>
              <p className="text-gray-700 mb-6">
                <span className="font-bold text-gray-700">
                  Professional Background:{" "}
                </span>{" "}
                Supply credentials or experiences where these apply for
                credence.
              </p>
              <p className="text-gray-700 mb-6">
                <span className="font-bold text-gray-700">
                  Personal Touch:{" "}
                </span>{" "}
                Share a fun fact or personal story that connects to your
                audience.
              </p>

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
                  onClick={toggleLiveChat}
                  className="px-6 py-3 bg-white border border-orange-500 text-orange-500 font-medium rounded-md hover:bg-orange-50 transition-all"
                >
                  {isLiveChatOpen ? 'Close Chat' : 'Live Chat'}   
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
                src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744214887/1_woopxj.jpg"
                alt="Book Journey to Bestsellerdom"
                className="w-full max-h-[500px] object-contain"
              />
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
              className="text-3xl md:text-4xl font-bold mb-2 text-white"
            >
              Why Do You Need an Author Website?
            </motion.h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Establish your author's brand",
                content:
                  "A website for the author is a home base for your brand. It's about who you are as an author and what readers will experience through you. The good news is that a good website helps express your voice and character as a writer, which allows you to differentiate and stand out in that overcrowded marketplace. Personal Stories: Create a bond by telling.",
              },
              {
                title: "Showcase Your Works",
                content:
                  "It's a portfolio whether you have books, short stories, or articles published. It's a place to show off your success, like: Book Covers and Descriptions: Show pretty covers with juicy blurbs. Purchase Links: Make it easy for readers to buy your books. Sample Chapters: Give would-be readers a taste of your writing.",
              },
              {
                title: "Connect with Readers",
                content:
                  "An author's website is the direct channel to speak with your audience. You can put up everything you do- the writing journey, extraordinary insights, and updates. The blog or news section on it helps you talk to readers about things like Writing Tips: Share experiences and lessons learned.",
              },
              {
                title: "Boost Your Discoverability",
                content:
                  "A professional website enhances your author online presence on search engines, making it easier for new readers to find you. SEO-friendly, you may be able to improve your chances of people finding you when they are looking for new authors or looking for a particular genre.",
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

      {/* //////////////////////////////////// */}
      <ImageSlider />
      {/* ////////////////////////////////////////////////// */}

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
            <motion.div>
              <motion.img
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.4 },
                }}
                src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744214887/1_woopxj.jpg"
                alt="Book Journey to Bestsellerdom"
                className="w-full max-h-[350px] object-contain rounded-lg"
              />
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
                  F
                </motion.span>
                eatured Work{" "}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                Ensure that you feature your work. This may include:
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                <span className="font-bold text-gray-700">
                  Books and Books Proclamation:{" "}
                </span>{" "}
                Show all books, including links to purchase or download.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                <span className="font-bold text-gray-700">
                  Books Written by Genre:{" "}
                </span>{" "}
                This helps organize the work by genre and makes it easier for
                readers to find what interests them.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                <span className="font-bold text-gray-700">
                  Reviews and Praise:{" "}
                </span>{" "}
                Add positive reviews or testimonials from readers or other
                authors to build credibility.
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
                  {isLiveChatOpen ? 'Close Chat' : 'Live Chat'}
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
      {/* ////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////// */}
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
                Blog or News Section
              </h2>

              <p className="text-gray-700 mb-2">
                This can be a news section with a blog. These keep your page
                fresh by updating them regularly, bringing you back to check
                here repeatedly. Some suggestions:
              </p>
              <p className="text-gray-700 mb-6">
                <span className="font-bold text-gray-700">
                  Writing Processes:{" "}
                </span>{" "}
                Tips, techniques, or challenges you have as a writer.
              </p>
              <p className="text-gray-700 mb-6">
                <span className="font-bold text-gray-700">
                  Book Recommendations:{" "}
                </span>{" "}
                Share the books that impressed you best and the authors.
              </p>
              <p className="text-gray-700 mb-6">
                <span className="font-bold text-gray-700">
                  Personal Updates:{" "}
                </span>{" "}
                Keep everyone updated about your writing projects or other
                exciting events happening in your life.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-all"
                  onClick={() => openModal("apply-now-button")}
                >
                  Get A Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white border border-orange-500 text-orange-500 font-medium rounded-md hover:bg-orange-50 transition-all"
                >
                  {isLiveChatOpen ? 'Close Chat' : 'Live Chat'}     
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
                src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744214887/1_woopxj.jpg"
                alt="Book Journey to Bestsellerdom"
                className="w-full max-h-[500px] object-contain"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* ////////////////////////////////////////////////// */}

      {/* /////////////////////////////////////////////// */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="py-16 md:py-24 bg-gray-50 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 -right-20 w-64 h-64 bg-orange-100 rounded-full opacity-20"></div>

        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
          >
            Search Engine <span className="text-orange-500"> Optimization</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-700 max-w-3xl mx-auto mb-16"
          >
            Make the website search-engine-friendly and attract a new
            readership. Consider the following strategies:
          </motion.p>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-6xl mx-auto">
            {/* Left side - Trends list */}.
            <div className="w-full lg:w-1/2 space-y-6 order-2 lg:order-1">
              {[
                {
                  title: "Keyword Usage:",
                  description:
                    "Use relevant keywords like author website, professional author website, and other phrases and words applicable to the writing done",
                },
                {
                  title: "Content Quality:",
                  description:
                    "Update the site regularly with quality content that is relevant and exciting.",
                },
                {
                  title: "Alt Tags:",
                  description:
                    "Use corresponding descriptive alt tags for images on your site for accessibility and SEO purposes.",
                },
              ].map((trend, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    selectedTrend === index
                      ? "bg-gradient-to-l from-orange-50 to-white border-r-4 border-orange-500 shadow-md"
                      : "hover:bg-orange-50"
                  }`}
                  onClick={() => setSelectedTrend(index)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-16 h-16 flex items-center justify-center text-4xl font-bold ${
                        selectedTrend === index
                          ? "text-orange-500"
                          : "text-gray-300"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {trend.title}
                      </h3>
                      <p className="text-gray-700">{trend.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Right side - Image with animation */}
            <motion.div
              className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {[
                "https://res.cloudinary.com/dncqhipqk/image/upload/v1744147767/p-1_m7ba8m.png",
                "https://res.cloudinary.com/dncqhipqk/image/upload/v1744149292/p-2_w1siop.png",
                "https://res.cloudinary.com/dncqhipqk/image/upload/v1744149394/p-3_ptfyi1.png",
                "https://res.cloudinary.com/dncqhipqk/image/upload/v1744149419/p-4_x1kr7g.png",
                "https://res.cloudinary.com/dncqhipqk/image/upload/v1744149419/p-4_x1kr7g.png",
              ].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: selectedTrend === index ? 1 : 0,
                    x: selectedTrend === index ? 0 : 50,
                    position: selectedTrend === index ? "relative" : "absolute",
                  }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className={`${
                    selectedTrend === index ? "block" : "hidden"
                  } lg:w-full max-w-md`}
                >
                  <img
                    loading="lazy"
                    src={src}
                    alt={`Trend ${index + 1}`}
                    className="w-full h-auto object-contain rounded-lg "
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* seo sections */}
          <motion.div
            initial={{ opacity: 1 }}
            className="mt-8 md:mt-16 max-w-4xl mx-auto px-4 md:px-8"
          >
            <motion.h2
              initial={{ opacity: 1 }}
              className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900 px-4"
            >
              How to <span className="text-orange-500">Retain</span> Your Author
              Website
            </motion.h2>

            <div className="space-y-4 md:space-y-6">
              {/* Update your site periodically */}
              <motion.div
                initial={{ opacity: 1 }}
                className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto md:mx-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Update your site periodically
                    </h3>
                    <p className="text-gray-700">
                      Keep your website fresh and engaging by:
                    </p>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li className="flex items-center gap-2 justify-center md:justify-start">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                        Regular content updates with new blog posts and articles
                      </li>
                      <li className="flex items-center gap-2 justify-center md:justify-start">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                        Refreshing your author bio and achievements
                      </li>
                      <li className="flex items-center gap-2 justify-center md:justify-start">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                        Adding new book releases and upcoming projects
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Analytics */}
              <motion.div
                initial={{ opacity: 1 }}
                className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto md:mx-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Analytics
                    </h3>
                    <p className="text-gray-700">
                      Track and analyze your website performance through:
                    </p>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li className="flex items-center gap-2 justify-center md:justify-start">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                        Monitor visitor behavior and engagement
                      </li>
                      <li className="flex items-center gap-2 justify-center md:justify-start">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                        Analyze popular content and user interests
                      </li>
                      <li className="flex items-center gap-2 justify-center md:justify-start">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                        Track conversion rates and reader interactions
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* SEO Optimization */}
              <motion.div
                initial={{ opacity: 1 }}
                className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto md:mx-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      SEO Optimization
                    </h3>
                    <p className="text-gray-700">
                      Improve your website's search engine visibility:
                    </p>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li className="flex items-center gap-2 justify-center md:justify-start">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                        Optimize content with relevant keywords
                      </li>
                      <li className="flex items-center gap-2 justify-center md:justify-start">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                        Create quality backlinks and internal linking
                      </li>
                      <li className="flex items-center gap-2 justify-center md:justify-start">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                        Maintain mobile responsiveness and fast loading times
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* seo sections */}

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 max-w-4xl mx-auto p-8"
          >
            <h3 className="text-3xl font-bold text-center mb-6 text-gray-900">
              Conclusion{" "}
            </h3>
            <p className="text-gray-700 mb-8 text-justify">
              Building a professional author website is essential to
              establishing an author brand and boosting your online presence.
              With careful attention to clean design, pertinent, engaging
              content, and practical communication, you will have a platform
              that rings true to the readers and presents your work. Start
              building a website that reflects and connects you with the
              intended audience today. Investing in your author website is an
              investment in your writing career; make it worthwhile!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-all"
              >
                Call Us +1 (855) 248-0007
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}  
                onClick={toggleLiveChat}
                className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-50 transition-all"
              >
                {isLiveChatOpen ? 'Close Chat' : 'Live Chat'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-all"
              >
                Get A Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* /////////////////////////////////////////////// */}

      {/* /////////////////////////////////////////////// */}

      {/* ///////////////////////////////////////////////////// */}
      <Calendly />
      <Payment />
    </>
  );
};
export default AuthorWebsite;
