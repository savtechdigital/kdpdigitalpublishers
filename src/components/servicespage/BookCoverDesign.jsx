import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "../slider/slider";
import Form from "../form/Form";
import Banner from "../bannersections/banner";
import Payment from "../payment/Payment";
import Calendly from "../calendly/Calendly";
import ImageSlider from "../imageslider/ImageSlider";

const BookCoverDesign = () => {
  const [selectedBenefit, setSelectedBenefit] = useState(0);
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

                <h3 className="text-md md:text-xl font-medium mb-2 ">
                  The book cover design should have an impact
                </h3>
                <h1 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
                  Work <span className="text-orange-400">on</span> the Visuals,
                  Everything Else is Secondary
                </h1>
                <p className="text-md md:text-md mb-10 text-gray-200 leading-relaxed">
                  The team of experts at Kinetic DIgital Publishers would be
                  more than obliged to help you design a cover for a self
                  published book.
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
                  src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744045713/20_wqkpgt.png"
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
                reative Custom Book Cover Design That Captures Attention{" "}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                It would be impossible to overstate the significance of an
                eye-catching book cover in the constantly changing world of
                publishing. A thoughtful book cover is a silent ambassador for
                your book, reading between the lines and showing its tone,
                awakening interest in the right audience. In order not to be
                defeated among the crowd, whether you are an experienced or
                professional author, you should master the basics of ingenious
                custom book cover design.
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
                The Importance of Cover Design
              </h2>

              <p className="text-gray-700 mb-6">
                The first impression matters, especially within the literary
                world. A reader will often come into contact with your work
                through your book cover. In a Sea of choices, both print and
                digital, your book should immediately cover your genre, tone,
                and theme. A great cover can make a casual browser become
                committed, while a poorly designed cover may make potential
                readers overlook your efforts.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Psychological Impact of Cover Design
                </h3>
                <p className="text-gray-700 mb-6">
                  A book cover serves more than a decorative purpose; it affects
                  how the reader views the standard and caliber of the book.
                  Research shows that consumers frequently equate a product's
                  visual appeal with its overall worth. This way, an attractive
                  cover can generate the feeling of trustworthiness and
                  reliability and thus enhance sales.
                </p>
              </div>
              {/* /////////////////// */}
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
              {/* /////////////////// */}
            </motion.div>

            <motion.div>
              <motion.img
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.4 },
                }}
                src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744146181/creative-bok_grfvwg.png"
                alt="Book Journey to Bestsellerdom"
                className="w-full max-h-[500px] object-contain "
                loading="lazy"
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
          backgroundImage: `url('/src/assets/images/ai-4.jpg')`,
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
              Element of a Creative Custom Book Cover Design{" "}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-base md:text-md"
            >
              Many critical elements are involved when one is designing a custom
              book cover. Each of these, by itself, will represent and thus
              illustrate the theme of your book.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Typography",
                content:
                  "This literally forms the main construct of any book cover. The genre, as well as the tone of your book, should be portrayed in the typeface you use. For instance, a horror novel can do well with jagged and unsettling fonts, while a romance novel might use beautifully flowing letters. Readability is just as important as style; make sure the author's name comes out very clearly, even in a thumbnail for an online platform,",
              },
              {
                title: "Imagery and Art",
                content:
                  "Your cover's imagery should tell the story of the book's mood and subject. Whether you opt for graphic design, photography, or creative illustration, the imagery must be interesting and relevant. Investing in high-quality artwork can elevate your cover significantly, giving it a polished and unique appearance. Think about the emotions that images and colour arouse. Warm colours could mean passion; cool tones might even refer to calmness, mystery, etc.",
              },
              {
                title: "Branding",
                content:
                  "If you're a writer or an author, you will definitely have several books out. In this case, your book covers should have a standardised format.",
              },
              {
                title: "Color Scheme",
                content:
                  "Color is one of the very important attraction elements that evoke emotions. A rich colour scheme can determine the mood of a book and relate to targeted readers. For instance, bright, vibrant colours might attract younger readers, while muted, dark tones can appeal to an older audience. It's important to think about how your colour selections fit within the genre traditions. For instance, children's books may use bright, joyful hues, while mystery novels often use stubbed, dark colours.",
              },
              {
                title: "Layout and Composition",
                content:
                  "The way in which you place your elements on the cover is of prime importance. That's how the eye will travel across the cover, essentially because of how important components of the title and images stand out. The rule of thirds can be used to beautify a composition further. It lets people experiment with spacing, alignment, and proportion to create more aesthetically pleasing designs.",
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
              <h2 className="text-3xl md:text-4xl font-bold mb-2  text-orange-500 ">
                The Role of Professional Cover Design
              </h2>
              <p className="text-gray-700 text-sm mb-1">
                While creating a cover design yourself may seem appealing,
                hiring a professional designer can have a big impact, especially
                for independent authors on a tight budget. These professionals
                ensure your cover will meet the industry's standards by
                transferring their expertise, experience, and new ideas into
                your project.
              </p>

              {/* <div className="w-[calc(100%-250px)] h-1 bg-orange-500 mx-auto mb-8"></div> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-8 w-full"
            >
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
        </div>
      </motion.section>
      {/* ///////////////////////////////////////////////////// */}

      {/* image change on 1 2 3 4 click left side  */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="py-16 md:py-24 bg-white relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-100 rounded-full opacity-20"></div>
        <div className="absolute top-20 -left-20 w-64 h-64 bg-orange-100 rounded-full opacity-20"></div>

        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Benefits of Professional{" "}
            <span className="text-orange-500">Cover Design</span>
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-6xl mx-auto">
            {/* Left side - Image with animation */}
            <motion.div
              className="w-full lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {[
                "https://res.cloudinary.com/dncqhipqk/image/upload/v1744147767/p-1_m7ba8m.png",
                "https://res.cloudinary.com/dncqhipqk/image/upload/v1744149292/p-2_w1siop.png",
                "https://res.cloudinary.com/dncqhipqk/image/upload/v1744149394/p-3_ptfyi1.png",
                "https://res.cloudinary.com/dncqhipqk/image/upload/v1744149419/p-4_x1kr7g.png",
              ].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: selectedBenefit === index ? 1 : 0,
                    x: selectedBenefit === index ? 0 : -50,
                    position:
                      selectedBenefit === index ? "relative" : "absolute",
                  }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className={`${
                    selectedBenefit === index ? "block" : "hidden"
                  } lg:w-full max-w-md`}
                >
                  <img
                    loading="lazy"
                    src={src}
                    alt={`Benefit ${index + 1}`}
                    className="w-full h-auto object-contain rounded-lg "
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Right side - Benefits list */}
            <div className="w-full lg:w-1/2 space-y-6">
              {[
                {
                  title: "Experience and Expertise",
                  description:
                    "Professionals design covers because they know market trends and what attracts customers.",
                },
                {
                  title: "Technical competence",
                  description:
                    "A good designer should be well-equipped with software and techniques for a meaningful output to have worth through quality and perfection.",
                },
                {
                  title: "Objective Insights",
                  description:
                    "A designer will help you objectively understand a book's themes and concepts and devise innovative solutions that you may not have considered.",
                },
                {
                  title: "Saves Time",
                  description:
                    "Creating a cover may take some time. However, an expert would be in charge of the task while you concentrate on what's really important: writing and marketing your book.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    selectedBenefit === index
                      ? "bg-gradient-to-r from-orange-50 to-white border-l-4 border-orange-500 shadow-md"
                      : "hover:bg-orange-50"
                  }`}
                  onClick={() => setSelectedBenefit(index)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                        selectedBenefit === index
                          ? "bg-orange-500 text-white"
                          : "bg-orange-100 text-orange-500"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      {/* ///////////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////////// image change on 1 2 3 4 click right side */}
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
            Trend in{" "}
            <span className="text-orange-500">Custom Book Cover Design</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-700 max-w-3xl mx-auto mb-16"
          >
            Keeping up with current design trends can provide a modern touch to
            your cover. Some of the newest trends include:
          </motion.p>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-6xl mx-auto">
            {/* Left side - Trends list */}
            <div className="w-full lg:w-1/2 space-y-6 order-2 lg:order-1">
              {[
                {
                  title: "Minimalism",
                  description:
                    "With minimalistic typography and white space use, covers are more fashionable nowadays.",
                },
                {
                  title: "Bold Typography",
                  description:
                    "Large, eye-attention grabbing typefaces are commonly employed, typically for conveying ideas clearly and rapidly.",
                },
                {
                  title: "Illustration",
                  description:
                    "Hand-drawn images are coming back into style. They add to the cover's 'custom' look feel.",
                },
                {
                  title: "Media",
                  description:
                    "Photographs paired with graphic elements or artwork can be combined to create amazing covers.",
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
                "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045714/18_ux3c7w.png",
                "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045715/19_erbgmo.png",
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
            <p className="text-gray-700 mb-6">
              A great and interesting book cover will attract interest, upscale
              the message that you want to give out through your book, and even
              create your author brand. Knowing how a great cover should be:
              layout, colour, font, and images, will thus be helpful in
              producing a sure-fire combination that appeals to both level
              beauty and emotion.
            </p>
            <p className="text-gray-700 mb-8">
              Be it in-house or outsourced to a professional, the time and
              effort is worth taking for the design of your book cover. Among
              million of volumes of books fighting for attention, good design
              may well be what differentiates one unread book from another
              bestseller. So, put in some creative energy and let your book
              cover shine; this is the first chapter in the story of your book's
              journey.
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

      {/* ///////////////////////////////////////////////////// */}
      {/* new section right side img and left side content */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="py-16 md:py-24 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-6xl mx-auto">
            {/* Left side - Book cover image */}
            <motion.div
              className="w-full lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
            >
              <img
                src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744149897/10_lfhe9n.png"
                alt="The Crimson Triangle Book Cover"
                className="w-full max-w-md h-auto object-contain "
                loading="lazy"
              />
            </motion.div>

            {/* Right side - Process description */}
            <div className="w-full lg:w-1/2 space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                The Creative Process,{" "}
                <span className="text-orange-500">
                  Ideas to the Final Product
                </span>
              </motion.h2>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 text-3xl font-bold text-orange-500">
                    1.
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Clarify your vision:
                    </h3>
                    <p className="text-gray-700">
                      Before you start, brainstorm what your book will be about,
                      what genre it falls into, and even who will read it. What
                      makes you feel different from the rest? Compiling a mood
                      board of inspirational images, colours, typefaces, etc.,
                      really helps to bring the book's vision into focus.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 text-3xl font-bold text-orange-500">
                    2.
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Research Inspiration:
                    </h3>
                    <p className="text-gray-700">
                      Find bestsellers in your genre, analyse the covers, and
                      conclude what they share. What is it about them in
                      particular that catches your eye? With that knowledge in
                      hand, do not imitate what they have done.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 text-3xl font-bold text-orange-500">
                    3.
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Sketch and prototype:
                    </h3>
                    <p className="text-gray-700">
                      Whether you sketch it out yourself or use designs,
                      typographies, and images before settling on a final
                      design.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 text-3xl font-bold text-orange-500">
                    4.
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Feedback:
                    </h3>
                    <p className="text-gray-700">
                      It depends on the number of prototypes made. Ask some
                      reliable friends, beta readers, even social media groups,
                      if you have one. The constructive criticism for your
                      design will fine-tune the work and make sure it does
                      actually resonate with the targeted audience.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 text-3xl font-bold text-orange-500">
                    5.
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Finalize the design:
                    </h3>
                    <p className="text-gray-700">
                      Based on any criticism given, and after all changes are
                      done, you're satisfied; get your cover ready for printing
                      and digital media by satisfying all requirements that
                      might include bleed and resolution.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-all"
                >
                  Get A Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-50 transition-all"
                >
                  Live Chat
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* ///////////////////////////////////////////////////// */}
      <Calendly />
      <Payment />
    </>
  );
};
export default BookCoverDesign;
