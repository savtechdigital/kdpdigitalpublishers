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
const AudioBook = () => {
  const [selectedTrend, setSelectedTrend] = useState(0);
  const { openModal } = useModal();
  const { toggleLiveChat, isLiveChatOpen } = useLiveChatContext();
  return (
    <>
      <section
        className="relative min-h-screen bg-cover bg-center overflow-hidden py-24 md:py-44 md:px-16"
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
                  Ever <span className="text-orange-400">Wondered</span> What’s
                  Better Than Words? Voice!
                </h1>
                <p className="text-sm text-justify md:text-md mb-10 text-gray-200 leading-relaxed">
                  Do not ever feel like not publishing the audio format of your
                  book, get in touch with Kinetic DIgital Publishers and publish
                  an audiobook in USA today.
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
              <motion.div>
                <motion.img
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.4 },
                  }}
                  src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744153573/front-view-girl_di4kj4.jpg"
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
                  N
                </motion.span>
                arration is What Distinguishes a Book{" "}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                Audiobooks become increasingly popular among today's readers who
                love to listen to the stories while working out, going to work,
                or traveling because they are unwinding at home in today's fast
                world. Converting a novel into an audiobook is one of the
                excellent ways for authors to reach a wider audience and grab
                this growing industry. The basics of creating an audiobook will
                be covered in depth, and we'll uncover how involving a pro can
                help generate the audiobook everyone will want to listen to.
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
                The Growing Popularity of Audiobooks
              </h2>

              <p className="text-gray-700 mb-2">
                There has been a tangible growth trend in the audiobook market
                in the last ten years. The Audio Publishers Association points
                out that there has been increased demand, which has lately made
                audiobook sales close to $1 billion. Such a higher number of
                listeners opting for an audiobook over a print book can be
                accredited to the growth of digital platforms such as Audible,
                Google Play, and Apple Books, which make it easier for the
                consumer to avail of high-quality audiobooks at any given time
                with great convenience and such compelling storytelling.
              </p>
              <p className="text-gray-700 mb-6">
                This is a fantastic opportunity for writers. Beyond increased
                readership, a recording opens up the growing market of listeners
                to audiobooks. But it's not something that just happens
                overnight: creating an audiobook takes careful planning and
                execution, not to mention the actual recording. You are speaking
                the manuscript into audio.
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
                src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744153573/front-view-girl_di4kj4.jpg"
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
              Understanding Audiobook Production{" "}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-md  mb-4 text-white"
            >
              An expert-sounding audio product will be made from your manuscript
              through a series of critical steps in the audiobook production
              process. Below is what they comprise:{" "}
            </motion.p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Children's Book Illustrations",
                content:
                  "Understanding the importance of children's book illustrations, Kinetic Digital Publishers offers professional illustration services and ghostwriting services. Our team of creators comprises highly skilled and seasoned illustrators who specialize in illustrations that captivate children's minds.",
              },
              {
                title: "Textbook Illustration",
                content:
                  "Kinetic Digital Publishers researches the author's written content to generate educational, uncluttered prints for both digital and print textbooks. We rely on basic designs, consistent color schemes, and visual storytelling to enhance learning. This includes illustration strategies tailored to the educational subject matter.",
              },
              {
                title: "Picture Book Illustrations",
                content:
                  "In addition to traditional and digital illustration techniques, we employ specialized design and drawing software, such as Adobe Creative Cloud and Procreate. We consult with authors to transform their objectives into compelling, concise writing. We adapt our methodologies based on the type of content, whether it's educational or merely entertaining.",
              },
              {
                title: "Training Manual Illustration",
                content:
                  "Kinetic Digital Publishers recognizes that visuals help facilitate comprehension for many individuals. We convert text from training manuals into images, which may be simple or elaborate based on the complexity of the content, the instructions, and the task specifications. We use Adobe Illustrator CC to create color-coded visual guides with distinct lines and shapes.",
              },
              {
                title: "Comic Book Illustrations",
                content:
                  "Our team is immersed in comic and animation trends in order to create dramatic sketch, ink, color, and inventive caption illustrations that capture the evocative spirit of the genre while stretching artistic boundaries. It contains typography, word balloons, characters, and backgrounds reflecting the digital essence of the evolution of the comic industry.",
              },
              {
                title: "Book Cover Illustrations",
                content:
                  "Kinetic Digital Publishers takes a balanced approach to cover illustration design for text, title, and images in order to ensure the layout and typography that attracts readers and effectively communicates key book themes.To effectively incorporate how readers respond to these elements, we include online dimensions, genre, typefaces, themes, and research into illustration processes.",
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
            Advantages of Hiring a{" "}
            <span className="text-orange-500">
              {" "}
              Professional to Produce Professional Audiobook
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-700 max-w-3xl mx-auto mb-16"
          >
            Though it may be very tempting to try to make your audiobook
            yourself, there are countless advantages of using professionals.
            Here are some reasons why one should seek professional services:
          </motion.p>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-6xl mx-auto">
            {/* Left side - Trends list */}.
            <div className="w-full lg:w-1/2 space-y-6 order-2 lg:order-1">
              {[
                {
                  title: "Experience and Expertise",
                  description:
                    "Professionals within the production teams have the skills and knowledge required to oversee every aspect of making an audiobook. Their skills matter in the final output, whether selecting the best narration or ensuring good-quality audio.",
                },
                {
                  title: "Saves Time",
                  description:
                    "Creating an audiobook will take time, especially if you're learning to produce one. Since you can outsource experts for the job, you can focus on what you do best: write a new book while the professionals see to it that the technicalities will be taken care of.",
                },
                {
                  title: "Excellent Outcomes",
                  description:
                    "Listeners of audiobooks want high-quality sound. Experts know how to create the best sound quality, enhancing listening and making your book more appealing.",
                },
                {
                  title: "Support for Marketing and Promotion",
                  description:
                    "Your audiobook will be ready for distribution. Then, you can take advantage of several high-standing audiobook companies' marketing support, which could help you promote it: advice on advertising, pricing, and reaching your target market",
                },
                {
                  title: "Enhanced Possibility of Revenue",
                  description:
                    "If produced well, the sales and revenues from the sale of audiobooks could increase. A professional audiobook makes a book valuable and worthwhile to sell.",
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
                "https://res.cloudinary.com/dncqhipqk/image/upload/v1744149419/p-4_x1kr7g.png",
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
            <p className="text-gray-700 mb-2">
              Converting your work to an audiobook is one good way to distribute
              it to a larger audience and present your story most excitingly. It
              is less complicated because you will be using professional
              audiobook production companies. However, it may seem to be an
              intimidating task. Allow the professionals to guide you so you
              will be sure to get an audiobook that will meet listeners'
              requirements, to say nothing of meeting what the industries
              require.
            </p>
            <p className="text-gray-700 mb-8">
              Once you arrive at that stage and feel ready to put your voice to
              those audiobooks, partner with a company whose aims and vision
              align most with yours. To invest in quality production is to get
              dividends by giving a boost to your author brand and expand
              further into this growing audiobook market. Now, start on your way
              to creating your audiobooks and participate in connecting with the
              world of listeners.
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
export default AudioBook;
