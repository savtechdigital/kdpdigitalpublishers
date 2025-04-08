import { useState } from 'react';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const bookData = {
  categories: [
    {
      id: "religious",
      name: "Religious",
      books: [
        { id: 1, src: "/src/assets/images/religious/1.webp", title: "The Divine Path" },
        { id: 2, src: "/src/assets/images/religious/2.webp", title: "The Divine Path" },
        { id: 3, src: "/src/assets/images/religious/3.webp", title: "The Divine Path" },
        { id: 4, src: "/src/assets/images/religious/4.webp", title: "The Divine Path" },
        { id: 5, src: "/src/assets/images/religious/5.webp", title: "The Divine Path" },
        { id: 6, src: "/src/assets/images/religious/6.webp", title: "Sacred Wisdom" },
      ],
    },
    {
      id: "fantasy",
      name: "Fantasy",
      books: [
        { id: 7, src: "/src/assets/images/fantasy/1.webp", title: "The Crimson Triangle" },
        { id: 8, src: "/src/assets/images/fantasy/2.webp", title: "The Crimson Triangle" },
        { id: 9, src: "/src/assets/images/fantasy/3.webp", title: "The Gift" },
      ],
    },
    {
      id: "children",
      name: "Children's Books",
      books: [
        { id: 10, src: "src/assets/images/children/1.webp", title: "Adventure Time" },
        { id: 11, src: "src/assets/images/children/2.webp", title: "Magic School" },
        { id: 12, src: "src/assets/images/children/3.webp", title: "Magic School" },
        { id: 13, src: "src/assets/images/children/4.webp", title: "Magic School" },
        { id: 14, src: "src/assets/images/children/5.webp", title: "Magic School" },
      ],
    },
    {
      id: "cook",
      name: "Cook Books",
      books: [
        { id: 15, src: "src/assets/images/cook/1.webp", title: "Culinary Delights" },
        // { id: 8, src: "/assets/images/cook/2.jpg", title: "Tasty Recipes" },
      ],
    },
    {
      id: "autobiography",
      name: "Autobiography Books",
      books: [
        { id: 16, src: "src/assets/images/Autobiography/1.webp", title: "Culinary Delights" },
        { id: 17, src: "src/assets/images/Autobiography/2.webp", title: "Culinary Delights" },
        { id: 18, src: "src/assets/images/Autobiography/3.webp", title: "Culinary Delights" },
        { id: 19, src: "src/assets/images/Autobiography/4.webp", title: "Culinary Delights" },
      
      ],
    },
    
    {
      id: "fiction",
      name: "Fiction",
      books: [
        { id: 20, src: "src/assets/images/Fiction/1.webp", title: "Culinary Delights" },
        { id: 21, src: "src/assets/images/Fiction/2.webp", title: "Culinary Delights" },
        { id: 22, src: "src/assets/images/Fiction/3.webp", title: "Culinary Delights" },
        { id: 23, src: "src/assets/images/Fiction/4.webp", title: "Culinary Delights" },

      ],
    },
    {
      id: "self-help",
      name: "Self Help",
      books: [
       { id: 24, src: "src/assets/images/selfhelp/1.webp", title: "Culinary Delights" },
       { id: 25, src: "src/assets/images/selfhelp/2.webp", title: "Culinary Delights" },
       { id: 26, src: "src/assets/images/selfhelp/3.webp", title: "Culinary Delights" },
       { id: 27, src: "src/assets/images/selfhelp/4.webp", title: "Culinary Delights" },
       { id: 28, src: "src/assets/images/selfhelp/5.webp", title: "Culinary Delights" },
       { id: 29, src: "src/assets/images/selfhelp/6.webp", title: "Culinary Delights" },
       { id: 30, src: "src/assets/images/selfhelp/7.webp", title: "Culinary Delights" },
       { id: 31, src: "src/assets/images/selfhelp/8.webp", title: "Culinary Delights" },
       { id: 32, src: "src/assets/images/selfhelp/9.webp", title: "Culinary Delights" },
       { id: 33, src: "src/assets/images/selfhelp/10.webp", title: "Culinary Delights" },
      ],
    },
    {
      id: "politics",
      name: "Politics",
      books: [
       { id: 34, src: "src/assets/images/politics/1.webp", title: "Culinary Delights" },
       { id: 35, src: "src/assets/images/politics/2.webp", title: "Culinary Delights" },
      
      ],
    },
    {
      id: "animal",
      name: "Animal",
      books: [
       { id: 36, src: "src/assets/images/animal/1.webp", title: "Culinary Delights" },
       
      
      ],
    },
    {
      id: "psychology",
      name: "Psychology",
      books: [
       { id: 37, src: "src/assets/images/Psychology/1.webp", title: "Culinary Delights" },
       
      
      ],
    },
    {
      id: "teacher",
      name: "Teacher",
      books: [
       { id: 38, src: "src/assets/images/teacher/1.webp", title: "Culinary Delights" },
       
      
      ],
    },
    {
      id: "business",
      name: "Business",
      books: [
       { id: 39, src: "src/assets/images/Business/1.webp", title: "Culinary Delights" },
       { id: 40, src: "src/assets/images/Business/2.webp", title: "Culinary Delights" },
       { id: 41, src: "src/assets/images/Business/3.webp", title: "Culinary Delights" },
       { id: 42, src: "src/assets/images/Business/4.webp", title: "Culinary Delights" },
       { id: 43, src: "src/assets/images/Business/5.webp", title: "Culinary Delights" },
       { id: 44, src: "src/assets/images/Business/6.webp", title: "Culinary Delights" },
      ],
    },
  ],
};

const Filterbooks = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  // Get all books for display when 'all' is selected
  const allBooks = bookData.categories.reduce((acc, category) => {
    return [...acc, ...category.books];
  }, []);

  // Get filtered books based on active category
  const filteredBooks = activeCategory === 'all'
    ? allBooks
    : bookData.categories.find(cat => cat.id === activeCategory)?.books || [];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  return (
    <motion.section 
      className="py-16 bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          variants={childVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impressive Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Our track record speaks volumes. We are committed to offering each client unparalleled value and personalized service.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          variants={childVariants}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 px-4"
        >
          <button
            onClick={() => handleCategoryClick('all')}
            className={`px-4 py-1.5 rounded-full text-xs md:text-sm transition-all ${
              activeCategory === 'all'
                ? 'bg-orange-500 text-white'
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            All
          </button>
          {bookData.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`px-4 py-1.5 rounded-full text-xs md:text-sm transition-all ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Main Grid */}
        <motion.div 
          variants={childVariants}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          {filteredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              variants={childVariants}
              className="relative group cursor-pointer "
              onClick={() => handleImageClick(index)}
            >
              <div className="relative w-full">
                <img
                  src={book.src}
                  alt={book.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="text-white text-center p-3">
                    <h3 className="text-base md:text-lg font-bold mb-2">{book.title}</h3>
                    <button className="px-3 py-1.5 bg-orange-500 rounded-full text-xs md:text-sm hover:bg-orange-600 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Modal */}
        {showGallery && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white text-2xl hover:text-orange-500 transition-colors"
            >
              ✕
            </button>
            <div className="w-full max-w-4xl">
              <Swiper
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                initialSlide={selectedImageIndex}
                spaceBetween={0}
                slidesPerView={1}
                navigation={false}
                pagination={false}
                mousewheel={true}
                keyboard={true}
                className="gallery-swiper"
              >
                {filteredBooks.map((book) => (
                  <SwiperSlide key={book.id}>
                    <div className="flex items-center justify-center h-[80vh]">
                      <img
                        src={book.src}
                        alt={book.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Filterbooks;

