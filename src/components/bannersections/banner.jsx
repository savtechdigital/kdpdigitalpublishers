import { motion } from 'framer-motion';
import { useModal } from '../../context/ModalContext';

const Banner = () => {
  const { openModal } = useModal();
    return (
      <>
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
                <button 
                onClick={() => openModal("apply-now-button")}
                className="px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors border border-white">
                  Get A Quote
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </>
    )
}

export default Banner;
