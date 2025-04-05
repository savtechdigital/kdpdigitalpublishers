import { motion } from "framer-motion";
import Slider from "../components/slider/slider";
import Calendly from "../components/calendly/Calendly";
import Payment from "../components/payment/Payment";

const Testmonials = () => {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        style={{
          backgroundImage: `url('/src/assets/images/testimonials.png')`,
        }}
        className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50 bg-no-repeat bg-cover bg-center"
      >
        <div className="container mx-auto px-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl  mb-6"
            >
              What Our Clients Say
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold mb-8"
            >
              Testimonials
            </motion.h2>
          </motion.div>
        </div>
      </motion.section>

      <Slider />
      {/* vedio sections */}
      <section className="py-10 md:py-14 bg-white lg:px-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              What Our Clients Say About Us
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl"
              >
                <video
                  src={`/src/assets/videos/testimonial${index}.mp4`}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  loop
                  muted
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url('src/assets/images/cta-bg.png')`,
        }}
        className="relative py-16 bg-cover   bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10 ">
          <div className="grid md:grid-cols-1  items-center  ">
            {/* Left side - Illustration */}
            {/* <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white/20 rounded-lg p-6"
            >
              <img
                src="/src/assets/images/bookmarketing.png"
                alt="Bookshelf Illustration"
                className="w-full max-w-md mx-auto"
              />
            </motion.div> */}

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-center t"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Take your book to the next level with our help
              </h2>
              <p className="text-sm md:text-base text-gray-200 mb-6">
                We'll turn your thoughts into a carefully crafted and critically
                acclaimed book
              </p>
              <div className="flex flex-wrap gap-4 justify-center ">
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
      <Calendly />
      <Payment />
    </div>
  );
};
export default Testmonials;
