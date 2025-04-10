import { motion } from "framer-motion";
import Slider from "../slider/slider";
import Form from "../form/Form";
import Banner from "../bannersections/banner";
import Payment from "../payment/Payment";
import Calendly from "../calendly/Calendly";
import ImageSlider from "../imageslider/ImageSlider";
import { useState } from "react";
const Illustrations = () => {
  const [selectedTrend, setSelectedTrend] = useState(0);
  return (
    <>
      <section
        className="relative min-h-screen bg-cover bg-center overflow-hidden py-16 md:py-24"
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

                <h3 className="text-md md:text-xl font-medium mb-4 pl-4">
                  The Illustration must captivate and leave a lasting
                  impression.
                </h3>
                <h1 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
                  Leave a <span className="text-orange-400">Mark</span> on Minds
                  with the Best Illustrations!
                </h1>
                <p className="text-md md:text-md mb-10 text-gray-200 leading-relaxed">
                  Visual images, graphs, and diagrams always create a positive
                  impact on a person’s mind—as they help to put a point forward
                  more clearly. Connect with Kinetic DIgital Publishers today
                  and work on your illustrations, professionally.
                </p>
                <div className="flex flex-wrap gap-6 mt-10">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 5px 15px rgba(255,165,0,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
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
                  src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744151227/25_g1xegk.png"
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
                  C
                </motion.span>
                ustom Book Illustrations to Bring Your Story to Life{" "}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                A wonderful tale can take readers away to another world and is a
                lot more than just lines of text on a page. A picture book for
                imaginative kids, a suspenseful fantasy novel, or an informative
                work of non-fiction are but a few examples of excellent
                candidates who would really love illustrations, and it could be
                the one thing that makes it interesting and memorable.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                More particularly, customised book illustrations add a personal
                touch that most readers would love. But what's so special about
                customized illustrations, and how do they breathe life into your
                story? This post will discuss the advantages of engaging a
                professional book illustrator while considering the role of
                illustrations and how they can add value to your book.
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
                The Importance of Illustration in Books
              </h2>

              <p className="text-gray-700 mb-6">
                From ancient cave paintings, illustrations have been the most
                important helpers of oral storytelling-visual narrations that
                supplement and extend the messages from written texts.
                Traditionally, illustrations tell stories in ways that words
                cannot explain. They take this form from cave paintings to
                illuminated manuscripts and graphic novels of today.
              </p>
              <p className="text-gray-700 mb-6">
                <span className="font-bold">Emotion and Involvement :</span> One
                of the primary uses of those pictures in a novel is emotionally
                engaging a reader with the book. Image creation becomes
                reasonable for connecting with characters, situations, and even
                the general vibe of the novel. Be it colourful, bright universes
                of picture books or the grim scenes of crime novels; those
                paintings tend to really create certain feelings within the
                reader that will go down in depth to the reader's connection
                with the narrative.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
                src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744151227/25_g1xegk.png"
                alt="Book Journey to Bestsellerdom"
                className="w-full max-h-[500px] object-contain"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* /////////////////////////////// */}
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
                  src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744151227/25_g1xegk.png"
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
                  C
                </motion.span>
                larity and Understanding{" "}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                Pictures can enhance understanding when used in books for
                younger readers or those with certain special needs.
                Word-and-picture books can assist readers in understanding ideas
                that appear difficult or even improve their ability to imagine
                events. Images are often included in non-fiction, such as
                scientific or instructional books because they can make some
                ideas that are even a little hard to think about accessible to
                readers.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                Memorability : A book with gorgeous illustrations will be
                remembered in most cases. The unique aspect of visual and
                written storytelling ensures the content stays in the mind,
                increasing the chances of visiting the book again and telling
                others about it. Images can make a more memorable impression
                than words alone usually can’t.
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
              className="text-2xl md:text-2xl font-bold mb-4 text-white"
            >
              Exceptional{" "}
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-2 text-white"
            >
              BOOK ILLUSTRATION SERVICES{" "}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-md  mb-4 text-white"
            >
              Here are six ways we use to assist you with the finest book
              illustrations for your book.{" "}
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
            Why They <span className="text-orange-500"> Make a Difference</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-700 max-w-3xl mx-auto mb-16"
          >
            Even though there is a time and place for pre-made or stock images,
            there is no substitute for special illustrations tailored to your
            storyline. Here are some ways that unique drawings could make your
            book come alive.
          </motion.p>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-6xl mx-auto">
            {/* Left side - Trends list */}

            <div className="w-full lg:w-1/2 space-y-6 order-2 lg:order-1">
              {[
                {
                  title: "Unique Visual Representation",
                  description:
                    "No other book will stand out like yours with the help of customised illustrations that will give a unique visual expression of your characters, settings, and subjects. Customised artwork is especially crafted to fit in with the mood and plot of a book, unlike a generic photo. With a contemporary drama or a fantasy saga teeming with mythical creatures, unique illustrations ensure that every graphical element maintains perfect affinity with your creative vision. For example, a talented artist can provide pictures of landscapes and animals for use in a fantasy novel that is based on a mythological tale. You can really have a say in how your surroundings are portrayed through commissioned art, the hues and fabrics of the settings in which the characters operate, and the facial expressions of the same characters.",
                },
                {
                  title: "Creative Freedom",
                  description:
                    "When you have a professional illustrator who gives you room to imagine and communicate your ideas, you are at liberty to be as creative as possible. Unlike ready-made illustrations, that art will only allow you to implement the creativity level possible by the available stock. Do you want your main character to carry an object symbolically or to wear a specific dress? Illustrators can put that very thought on paper or on a screen in custom order. Personalisation on this level ensures your story is original and follows your intention. Theillustrations' style is also open to creative flexibility.",
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
                "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045713/20_wqkpgt.png",
                "https://res.cloudinary.com/dncqhipqk/image/upload/v1744146181/creative-bok_grfvwg.png",
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
            <p className="text-gray-700 mb-6">
              If the characters change their appearance from chapter to chapter
              in a story, reading it would compromise the reader's full
              immersion. Relentless original visuals keep the story flowing and
              make people interested in it.
            </p>
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
              Enhanced Branding
            </h3>
            <p className="text-gray-700 mb-8">
              Another reason is that customized graphics are a branding tool.
              Isolation of identical unique graphics that are applied in various
              books can help set up an identifiable style for the authors aiming
              to build their personal brand or series. Outside helping readers
              know you even better, it differentiates you in your congested
              market. The personalized book illustrations offer your story a
              personality which gives it a more memorable text, hence setting
              you apart from the rest.
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
                className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-50 transition-all"
              >
                Live Chat
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
            Working with a{" "}
            <span className="text-orange-500">
              Professional Book Illustrator
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-700 max-w-3xl mx-auto mb-16"
          >
            It’s very important that you work with an experienced professional
            illustrator of books if you want to put your story into being. Some
            primary advantages when working with a professional follow
          </motion.p>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-6xl mx-auto">
            {/* Left side - Trends list */}

            <div className="w-full lg:w-1/2 space-y-6 order-2 lg:order-1">
              {[
                {
                  title: "Technical expertise",
                  description:
                    "Professional experience will translate to many years of knowledge and technical know-how for an experienced illustrator. He will understand how to maintain quality standards with the transformation of your thoughts into visually appealing images. A good illustrator can bring your ideas full of appeal before the reader's eyes, from mastering composition and colour theory down to choosing the right software. Professional illustrators know what the publishing world needs in terms of file formats, size, and quality for print and digital publishing. That way, your illustrations will look fabulous. They will also meet any technical requirements that need to be fulfilled through different channels, for example, Ingram Spark, Kindle Direct Publishing, KDP, and more traditional publishing agencies.",
                },
                {
                  title: "Collaboration and Communication",
                  description:
                    "An experienced illustrator will work closely with you during the creation process, and through constructive criticism and suggestions, you will see your ideas become more refined. A good illustrator should understand the concept, goals, and target audience as good communication is the driving force for all collaborative efforts. The brainstorming of an illustrator and the concept sketches shared with you will be merged in the final piece. Through this partnership, the visuals become enhanced, and the illustrations are made to enrich the tale rather than just fit it into a story frame. This process of writing becomes enjoyable, and writing is made to be easy for professional illustrators since they can translate abstract concepts into graphics.",
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
                "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045713/20_wqkpgt.png",
                "https://res.cloudinary.com/dncqhipqk/image/upload/v1744146181/creative-bok_grfvwg.png",
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
           
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
              Conclusion
            </h3>
            <p className="text-gray-700 mb-2">
              Among the countless available choices, your unique artwork may be
              the fact that brings your book to life. Whether it is a
              non-fiction book, fantasy book, or children's picture book, your
              unique pictures will breathe life into the words on your pages
              that no other choice could match. Work with a professional book
              illustrator and be able to ensure that your idea is fully realised
              and that, when it reaches completion, it engages, excites, and
              endures.
            </p>
            <p className="text-gray-700 mb-6">
              Hence, when you feel you want to expand your plot further,
              consider investing in bespoke book illustrations. They are not
              simply pictures but open the door to a more moving, emotional, and
              lasting narrative experience.
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
                className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-50 transition-all"
              >
                Live Chat
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

      {/* ///////////////////////////////////////////////////// */}
      <Calendly />
      <Payment />
    </>
  );
};
export default Illustrations;
