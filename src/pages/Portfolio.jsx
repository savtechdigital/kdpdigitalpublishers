import { motion } from 'framer-motion';

function Portfolio() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Impressive Portfolio
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{category}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const categories = [
  "Religious",
  "Fantasy",
  "Children's Books",
  "Cook Books",
  "Autobiography",
  "Fiction",
  "Self Help",
  "Politics",
  "Animals",
  "Psychology",
  "Teacher's",
  "Business"
];

export default Portfolio; 