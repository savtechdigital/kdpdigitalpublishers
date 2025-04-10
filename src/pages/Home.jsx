import { motion } from "framer-motion";
import Slider from "../components/slider/slider";

import Payment from "../components/payment/Payment";

import Filterbooks from './Filterbooks';
import Calendly from "../components/calendly/Calendly";


function Home() {
 

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dncqhipqk/image/upload/v1744045732/ai-3_fcgdct.jpg')`,
        }}
        className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50 bg-no-repeat bg-cover bg-center"
      >
        <div className="container mx-auto px-4 text-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center">
            <motion.h1 
              initial={{ y: 5 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-5xl font-bold mb-6 text-orange-500">
              Get Published Within 48 Hours*
            </motion.h1>
            <motion.h2 
              initial={{ y: 5 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-3xl mb-8 text-orange-500">
              Keep 100% Rights & Royalties
            </motion.h2>
          
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition-all"
              >
              APPLY NOW!
            </motion.button>
            <motion.p
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm mt-4 "
            >
              *Certain Restrictions apply, including acceptance of Client manuscript and subject material.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
      {/* section slider */}
     <Slider/>
      {/* section slider */}

      <motion.section
        initial={{ opacity: 0.9}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-2 mt-4 mb-8"
      >
        <div className="container mx-auto px-4 pt-6 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center lg:px-10">
            <motion.div 
              initial={{ x: -5 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 lg:col-span-[7] lg:pr-10">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-black mb-4">
            Your Book's Journey to Bestsellerdom Starts with Us!
              </motion.h2>
              {[
                "Kinetic Digital Publishers is your all-in-one partner for book success. From crafting mind-capturing narratives to dominating bestseller lists, KDP offers a wide-ranging suite of services to turn your manuscript into a publishing world's sensation.",
                "Our expert team provides incomparable book social media marketing, content optimization, web design and development, Amazon optimization, book publishing, and all other services that authors need to fly high. Our primary goal is to ensure that your story reaches the right readers.",
                "Let team KDP be the catalyst for literary victory! Our services include;"
              ].map((text, index) => (
                <p
                  key={index}
                  className="text-gray-700 text-sm lg:text-[15px]"
                >
                  {text}
                </p>
              ))}
              <div className="grid grid-cols-2 gap-4 text-sm lg:text-[15px]">
                {[
                  "Book Ghostwriting Services",
                  "Editing and Formatting",
                  "Book Publishing Services",
                  "Author Website Design"
                ].map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700"
                  >
                    <span
                      className="w-2 h-2 bg-orange-500 rounded-full mr-2"
                    ></span>
                    {service}
                  </li>
                ))}
              </div>
              <div className="flex gap-4 mt-6 flex-wrap">
                {[
                  "Get A Quote",
                  "Live Chat"
                ].map((btnText, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition-all"
                  >
                    {btnText}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 5 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center items-center lg:col-span-[5]">
              <motion.img
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
                src='https://res.cloudinary.com/dncqhipqk/image/upload/v1744045712/3_pqna0z.webp'
                alt="Book Journey to Bestsellerdom"
                className="w-full h-auto max-w-sm object-contain"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* // new image section */}
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
              Kinetic Digital Publishers provides top-quality, custom-tailored solutions for all your Book Writing, Editing, Publishing, and Marketing needs.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Book Publishing",
                content: "From comprehensive editing, the copyright of your work, interior layout and design, creation of your book cover, ISBN, and listing of your published book with The Library of Congress — Kinetic Digital Publishers handles all of your publishing needs. Best of all, you retain 100% of your book rights and royalties. We take none."
              },
              {
                title: "Book Writing",
                content: "Be mentored by the Co Founder of Kinetic Digital Publishers, and the industry's leading book-writing coach, Marvin Mahoney. His proprietary writing method will guide you to complete your book from start to finish in 90 days or less. Certain restrictions apply, so contact us today to see if you qualify."
              },
              {
                title: "Book Promotion",
                content: "Our team of experts willsetup a strategic marketing campaign to ensure and guarantee your book becomes a #1 Bestseller on Amazon, NY Times, Wall Street Journal and USA Today. You'll achieve the new title of 'Bestselling Author' and receive the Amazon seal. Certain restrictions apply, so contact us today to see if you qualify."
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

      {/* new sections */}
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
                stiffness: 100 
              }}
              className="relative w-full h-full flex justify-center"
            >
              <motion.div  >
                <motion.img
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 2,
                    transition: { duration: 0.4 }
                  }}
                  src='https://res.cloudinary.com/dncqhipqk/image/upload/v1744045712/3_pqna0z.webp'
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
                className="text-3xl md:text-4xl font-bold text-black mb-4"
              >
                <motion.span 
                  initial={{ color: "#000" }}
                  animate={{ color: "#f97316" }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >W</motion.span>hat is KDP?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-700 border-l-4 border-orange-500 pl-3"
              >
                <motion.span
                  initial={{ fontWeight: "normal" }}
                  whileHover={{ fontWeight: "bold" }}
                >Kinetic Digital Publishers</motion.span>—Your Story, Amplified!
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-700"
              >
                KDP is not just a publishing house; it is the author's
                fictitious starting point. We believe that every story, no
                matter how wild or whispered, deserves a chance to shine. At
                Kinetic Digital Publishers, the team focuses on the power of
                words to transform the lives of underrated authors.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-700"
              >
                From the vision of an author to the applause of the readers,
                we're the dedicated partners. Our team is trained to polish your
                manuscript, design covers that attract, and market your book to
                the world.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-700"
              >
                Kinetic Digital Publishers is not just about publishing; it is
                about empowering authors to find and maximize their hidden
                potential. Let's write your success story by turning your
                passion into a published reality!
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
                    backgroundColor: "#ea580c"
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
                    backgroundColor: "#ea580c"
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

      {/* Billboard Marketing Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        style={{ backgroundImage: `url('/src/assets/images/pl1-video-sec.jpg')` }}
        className="relative py-16 lg:px-20 sm:py-20 bg-cover bg-center bg-no-repeat"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-black/80 rounded-2xl aspect-video w-full overflow-hidden shadow-lg"
            >
              <video
                className="w-full h-full object-cover rounded-2xl"
                src='https://res.cloudinary.com/dncqhipqk/video/upload/v1744043204/bilboard_peiuxm.mp4'
                autoPlay
                muted
                loop
                playsInline
              />
            </motion.div>

            {/* Right Side - Content */}
            <div className="text-white space-y-6 text-center md:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              >
                Get Your Book Seen
                <br />
                by Millions!
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-black/60 p-6 md:p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Billboard Marketing for Authors – Amplify Your Reach!
                </h3>
                <p className="text-base sm:text-lg">
                  Take your book beyond bookstores and into the spotlight! With
                  high-visibility billboard marketing, we help authors showcase
                  their work in prime locations, reaching thousands of potential
                  readers daily. Whether you're launching a new release or
                  boosting an existing title, our large-scale advertising
                  ensures maximum exposure. Let your book make a bold
                  statement—because every great story deserves to be seen.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6"
              >
                <button className="px-6 sm:px-8 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors">
                  Contact Us
                </button>
                <button className="px-6 sm:px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                  Live Chat
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* youtube section */}
      <section className="py-10 md:py-14 bg-white lg:px-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why Authors Should Consider
              <span className="text-orange-500"> Podcasting</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-justify"
            >
              Podcasting helps authors connect with a wider audience, share
              their stories in a personal way, and build a loyal readership.
              It's a powerful tool to enhance visibility, establish authority,
              and drive book sales.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl"
            >
               <iframe
                width="100%"
                height="100%"
                title="Author Podcast"
                src="https://www.youtube.com/embed/Q6kwSLE6Zg4?si=p0x_KS1smxVn-BLg"
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full object-cover border-none"
                allowFullScreen
          
              ></iframe>
             
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Benefit Items */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Expand Your Audience
                  </h3>
                  <p className="text-gray-600">
                    Podcasts help authors connect with a broader audience beyond
                    traditional book promotions.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Bring Your Story to Life
                  </h3>
                  <p className="text-gray-600">
                    A podcast interview allows readers to hear your voice,
                    passion, and perspective firsthand.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Establish Thought Leadership
                  </h3>
                  <p className="text-gray-600">
                    Engaging in deep discussions about your book helps position
                    you as an authority in your genre.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div>
                <p className="text-gray-700">
                  Listen to Phillip Mink's full episode{" "}
                  <a
                    href="#"
                    className="text-orange-500 hover:text-orange-600 font-semibold"
                  >
                    here
                  </a>{" "}
                  and explore how podcasting can elevate your author brand!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unlock Your Next Chapter  */}
      <section 
        style={{
          backgroundImage: `url('src/assets/images/cta-bg.png')`,
        }}
        className="relative py-16 bg-cover   bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative  rounded-lg p-6"
            >
              {/* <img
                src="/src/assets/images/bookmarketing.png"
                alt="Bookshelf Illustration"
                className="w-full max-w-md mx-auto"
              /> */}
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Unlock Your Next Chapter of Success with KDP!
              </h2>
              <p className="text-sm md:text-base text-gray-200 mb-6">
                Get Ready to work with a highly-trained team of experts—a team that will bring your words to life, and take it to the top of the world, too!
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href="tel:+18552490007"
                  className="inline-block px-6 py-2.5 bg-orange-500 text-white text-sm font-medium rounded-full hover:bg-orange-600 transition-colors"
                >
                  Call Us +1 (855) 249-0007
                </a>
                <button className="px-6 py-2.5 bg-white text-gray-900 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors">
                  Live Chat
                </button>
                <button className="px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors border border-white">
                  Get A Quote
                </button>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* bookfilter section */}
        <Filterbooks defaultCategory="fiction" />
      
      {/* Calendly section */}
      <Calendly />

      <Payment />
    </div>
  );
}


export default Home;
