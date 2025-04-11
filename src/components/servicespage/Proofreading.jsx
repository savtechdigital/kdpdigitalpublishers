import { motion } from "framer-motion";
import Slider from "../slider/slider";
import Form from "../form/Form";
import Banner from "../bannersections/Banner";
import Payment from "../payment/Payment";
import Calendly from "../calendly/Calendly";
import ImageSlider from "../imageslider/ImageSlider";
import { useModal } from "../../context/ModalContext";

const Proofreading = () => {
  const { openModal } = useModal();
  return (
    <>
      <section
        className="relative min-h-screen bg-cover bg-center overflow-hidden py-16 md:py-24"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dncqhipqk/image/upload/v1744045722/about-us_jyik61.png')",
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
                  Intriguing Manuscripts and Unforgettable Stories
                </h3>
                <h1 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
                  Professional <span className="text-orange-400">Editing</span>{" "}
                  & Proofreading to Perfect Your Words
                </h1>
                <p className="text-md md:text-md mb-10 text-gray-200 leading-relaxed">
                  From thorough manuscript editing to meticulous proofreading,
                  KDP ensures every sentence shines. Our expert team will take
                  charge of your draft, fine-tuning every detail to turn it into
                  a polished masterpiece.
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
                  src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744043437/10_k9fvfj.png"
                  loading="lazy"
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
                  E
                </motion.span>
                diting & Proofreading Made Seamless{" "}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                Many authors confuse editing and proofreading, but each plays a
                distinct role in refining your manuscript.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-700"
              >
                Editing is all about the quality of your work. It focuses on
                improving the content, structure, flow, and coherence of your
                writing. Professional editors analyze every sentence, ensuring
                that every word is in the right place and that your message is
                clear and impactful. It's like giving your manuscript a complete
                makeover.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-700"
              >
                Proofreading, on the other hand, is the final polish. It’s about
                catching the small details—correcting grammatical errors, fixing
                punctuation, and addressing formatting issues. Proofreading
                ensures your work is flawless and ready for the world to see.
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
                Every Word Has to Find Its Perfect Place
              </h2>

              <p className="text-gray-700 mb-6">
                When editing and proofreading work together, they ensure your
                manuscript isn’t just good—it’s exceptional. Whether you're a
                first-time writer or an experienced author, understanding the
                difference between these services is essential to presenting the
                very best of your work.
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
                src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744043438/11_dl2z7b.png"
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
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
            >
              Why Authors Need Professional Editing{" "}
            </motion.h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Boosts Quality",
                content:
                  "A manuscript edited by a professional is error-free and flows smoothly. It ensures your message resonates with readers, turning a good book into a great one.",
              },
              {
                title: "Enhances Credibility",
                content:
                  "Readers are quick to notice mistakes, and even small errors can damage your reputation. Professional editing and proofreading safeguard your credibility by presenting a polished, flawless manuscript.",
              },
              {
                title: "Prepares for Publishing",
                content:
                  "Whether you're self-publishing or aiming for a traditional route, a professionally edited manuscript stands out. Editing and proofreading ensure your work meets industry standards, whether you're in Dallas or anywhere else.",
              },
              {
                title: "Refines Your Unique Voice",
                content:
                  "Professional editing enhances your writing while preserving your unique voice. Editors fine-tune your work without compromising your authenticity, making your story unforgettable for readers.",
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6  text-orange-500 ">
                Types of Editing Services We Offer
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
                src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744043440/12_szntvx.png"
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
                  <div className="bg-orange-500 text-white rounded-full p-2 mr-4 flex-shrink-0 w-[30px] h-[30px]">
                    {/* <svg
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
                    </svg> */}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Developmental Editing
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Developmental editing focuses on the big picture. From
                      character development to the overall flow of the
                      narrative, it ensures that your story is engaging from
                      start to finish. It’s all about strengthening the
                      structure and emotional impact of your manuscript.
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
                      Line Editing
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Line editing dives into every sentence of your manuscript.
                      It enhances word choice, improves readability, and ensures
                      your unique voice shines through, all while refining the
                      clarity and flow of each line.
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
                      Copy Editing
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Copy editing is all about the details. It focuses on
                      grammar, punctuation, and consistency, ensuring that your
                      manuscript is precise and error-free. This step bridges
                      the gap between creative storytelling and polished,
                      professional writing.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6  text-orange-500 ">
                Proofreading Process That Makes Your Book Shine
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
                      Meticulous Review
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Proofreaders carefully go through your entire manuscript,
                      catching spelling mistakes, grammatical errors, and other
                      inconsistencies. Their attention to detail ensures your
                      text is flawless.
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
                      Formatting Check
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Proofreading goes beyond just checking for typos. It also
                      ensures your manuscript meets proper formatting
                      standards—correct margins, consistent fonts, and uniform
                      layout—so your book looks as polished as it reads.
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
                      Final Polish
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Before your book heads to print or digital platforms, the
                      proofreader gives it one last look. This final step
                      ensures your manuscript is 100% error-free and ready for
                      release.
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
              Are You Planning to Get Professional Editing & Proofreading
              Services?
            </h3>
            <p className="text-gray-600 max-w-5xl text-sm mx-auto mb-8">
              Your manuscript deserves expert attention. Whether it's
              comprehensive manuscript editing or detailed book proofreading
              services, KDP has you covered. Our professional team ensures your
              words leave a lasting impact and your book is polished to
              perfection.
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
      {/* ////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////// */}
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
                Turning Mistakes Into Masterpieces
              </h2>

              <p className="text-gray-700 mb-6">
                Even the most experienced authors can overlook critical details
                in their work. Common errors like typos and inconsistencies can
                affect your story’s flow and impact. Professional editing and
                proofreading tackle these pitfalls, polishing your manuscript to
                perfection.
              </p>
              <p className="text-gray-700 mb-6">
                Typos and grammatical errors that disrupt the reader’s
                experience.
              </p>
              <p className="text-gray-700 mb-6">
                Inconsistent character names, timelines, or plot points.
              </p>
              <p className="text-gray-700 mb-6">
                Overuse of filler words that dilute your message.
              </p>
              <p className="text-gray-700 mb-6">
                Awkward phrasing or unclear sentences that confuse readers.
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
                src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744043443/14_r5flbw.png"
                alt="Book Journey to Bestsellerdom"
                className="w-full max-h-[500px] object-contain"
              />
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
              Kinetic Digital Publishers (KDP) offers more than just editing
              services—we’re here to be your creative partners. Our experienced
              team specializes in manuscript editing and book proofreading,
              ensuring your work is polished and ready for success. Whatever
              your genre, reach out to us and let us help you get your
              manuscript published with professionalism and care.
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
      {/* /////////////////////////////////////////////// */}

     
      {/* ///////////////////////////////////////////////////// */}
      <Calendly />
      <Payment />
    </>
  );
};

export default Proofreading;
