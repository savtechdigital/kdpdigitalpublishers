import { motion } from 'framer-motion';

function Services() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Premium Services
        </motion.h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    title: "Book Publishing",
    description: "Complete publishing solutions including editing, copyright, layout design, ISBN registration, and Library of Congress filing."
  },
  {
    title: "Book Writing",
    description: "Expert mentorship to guide you through the writing process, helping you complete your book in 90 days or less."
  },
  {
    title: "Book Marketing",
    description: "Strategic marketing campaigns to achieve bestseller status on Amazon, NY Times, Wall Street Journal, and USA Today."
  },
  {
    title: "Ghost Writing",
    description: "Professional ghost writing services to transform your ideas into compelling narratives."
  },
  {
    title: "Editing & Proofreading",
    description: "Comprehensive editing services to ensure your manuscript meets professional standards."
  },
  {
    title: "Cover Design",
    description: "Custom cover design services that capture attention and reflect your book's essence."
  },
  {
    title: "Illustrations",
    description: "Professional illustration services for children's books and other illustrated works."
  },
  {
    title: "Audio Book",
    description: "High-quality audio book production services with professional narrators."
  },
  {
    title: "Author Website",
    description: "Custom website design and development to establish your online presence."
  }
];

export default Services; 