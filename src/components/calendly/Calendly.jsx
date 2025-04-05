
import { motion } from "framer-motion";

const Calendly = () => {
    return (
      <>
      <section style={{
          backgroundImage: `url('/src/assets/images/ai-1.jpg')`,
        }}
       
        className="relative py-16 min-h-screen bg-no-repeat bg-cover bg-center mb-8">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/src/assets/images/books-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark Overlay */}
          {/* <div className="absolute inset-0 bg-black/60"></div> */}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Connect with Us – Your Voice Matters
            </h2>
            <p className="text-lg text-gray-200">
              Please fill out your details, and our team will contact you soon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden p-8">
              
            </div>

            {/* Buttons Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <a 
                href="tel:+18552490007"
                className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors text-sm md:text-base font-medium"
              >
                Call Us +1 (855) 249-0007
              </a>
              <button 
                className="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors text-sm md:text-base font-medium"
              >
                Live Chat
              </button>
              <button 
                className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors text-sm md:text-base font-medium border border-white"
              >
                Get A Quote
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </>
    )
}
export default Calendly;
