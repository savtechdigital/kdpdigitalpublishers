import { motion } from 'framer-motion';
import backgroundImage from '../assets/ai3.jpg';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section  style={{
    backgroundImage: `url(${backgroundImage})`,
  }} className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6 ">
              Get Published Within 48 Hours*
            </h1>
            <h2 className="text-3xl  mb-8">
              Keep 100% Rights & Royalties
            </h2>
            <button className="  px-8 py-3 bg-black text-white  text-lg font-semibold transition-colors">
              APPLY NOW!
            </button>
            <p className="text-sm  mt-4">
              *Certain Restrictions apply, including acceptance of Client manuscript and subject material.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Your Book's Journey to Bestsellerdom Starts with Us!
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Book Publishing",
    description: "From comprehensive editing to copyright protection, we handle all your publishing needs while you retain 100% rights and royalties."
  },
  {
    title: "Book Writing",
    description: "Get mentored by industry experts to complete your book from start to finish in 90 days or less."
  },
  {
    title: "Book Marketing",
    description: "Strategic marketing campaigns to make your book a #1 Bestseller on major platforms."
  },
  {
    title: "Ghost Writing",
    description: "Professional ghost writers to bring your story to life with your unique voice."
  },
  {
    title: "Editing & Proofreading",
    description: "Expert editing services to polish your manuscript to perfection."
  },
  {
    title: "Cover Design",
    description: "Eye-catching cover designs that make your book stand out on the shelf."
  }
];

export default Home; 