import { motion } from "framer-motion";
import Payment from "../components/payment/Payment";
import { useEffect, useState } from "react";
import Slider from "../components/slider/slider";

// Dummy blog data
const dummyBlogs = [
  {
    id: 1,
    title: "The 3 Worst and Best Times to Publish a Book",
    excerpt:
      "A Guide to Book Publishing Seasons. Timing is everything when it comes to publishing a book, but most times, authors get it wrong. Too many writers assume a great book will sell no matter when it's released. Spoiler alert: that's not how it works.",
    category: "Book Publishing",
    date: "2024-04-05",
    image:
      "https://res.cloudinary.com/dncqhipqk/image/upload/v1744044418/17_srrp4y.png",
    author: {
      name: "John Smith",
      avatar:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045718/4_tvwsui.png",
    },
  },
  {
    id: 2,
    title: "Why Book Formatting Services Are Important",
    excerpt:
      "Why Book Formatting Services Are Important for Your Manuscript's Success. Any published manuscript is bound to get tossed aside, no matter how brilliant the analogy of your content is.",
    category: "Book Formatting",
    date: "2024-04-02",
    image:
      "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045756/4_q1m5uj.webp",
    author: {
      name: "Emma Wilson",
      avatar:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045718/4_tvwsui.png",
    },
  },
  {
    id: 3,
    title: "What Makes a Good Book? The Secret to a Great Story",
    excerpt:
      "Stand Out? A Guide for Writers & Readers You have all the tools, passion, and storytelling abilities you need, to craft something spectacular but the question still lingers 'How do I turn all of this into something that grabs the audience's attention?'",
    category: "Writing Tips",
    date: "2024-03-30",
    image:
      "https://res.cloudinary.com/dncqhipqk/image/upload/v1744044418/17_srrp4y.png",
    author: {
      name: "Michael Brown",
      avatar:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045718/4_tvwsui.png",
    },
  },
  {
    id: 4,
    title: "Why Picking The Best EBook Font is Essential",
    excerpt:
      "As a self-publishing author, you've likely experienced the agony of opening an eBook and being assaulted by eye-straining fonts that make you want to throw your device across the room.",
    category: "eBooks",
    date: "2024-03-28",
    image:
      "https://res.cloudinary.com/dncqhipqk/image/upload/v1744044418/17_srrp4y.png",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045718/4_tvwsui.png",
    },
  },
  {
    id: 5,
    title: "Why Picking The Best EBook Font is Essential",
    excerpt:
      "As a self-publishing author, you've likely experienced the agony of opening an eBook and being assaulted by eye-straining fonts that make you want to throw your device across the room.",
    category: "eBooks",
    date: "2024-03-28",
    image:
      "https://res.cloudinary.com/dncqhipqk/image/upload/v1744044418/17_srrp4y.png",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045718/4_tvwsui.png",
    },
  },
  {
    id: 6,
    title: "Why Picking The Best EBook Font is Essential",
    excerpt:
      "As a self-publishing author, you've likely experienced the agony of opening an eBook and being assaulted by eye-straining fonts that make you want to throw your device across the room.",
    category: "eBooks",
    date: "2024-03-28",
    image:
      "https://res.cloudinary.com/dncqhipqk/image/upload/v1744044418/17_srrp4y.png",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045718/4_tvwsui.png",
    },
  },
  {
    id: 7,
    title: "Why Picking The Best EBook Font is Essential",
    excerpt:
      "As a self-publishing author, you've likely experienced the agony of opening an eBook and being assaulted by eye-straining fonts that make you want to throw your device across the room.",
    category: "eBooks",
    date: "2024-03-28",
    image:
      "https://res.cloudinary.com/dncqhipqk/image/upload/v1744044418/17_srrp4y.png",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045718/4_tvwsui.png",
    },
  },
  {
    id: 8,
    title: "Why Picking The Best EBook Font is Essential",
    excerpt:
      "As a self-publishing author, you've likely experienced the agony of opening an eBook and being assaulted by eye-straining fonts that make you want to throw your device across the room.",
    category: "eBooks",
    date: "2024-03-28",
    image:
      "https://res.cloudinary.com/dncqhipqk/image/upload/v1744044418/17_srrp4y.png",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045718/4_tvwsui.png",
    },
  },
  {
    id: 9,
    title: "Why Picking The Best EBook Font is Essential",
    excerpt:
      "As a self-publishing author, you've likely experienced the agony of opening an eBook and being assaulted by eye-straining fonts that make you want to throw your device across the room.",
    category: "eBooks",
    date: "2024-03-28",
    image:
      "https://res.cloudinary.com/dncqhipqk/image/upload/v1744044418/17_srrp4y.png",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045718/4_tvwsui.png",
    },
  },
  {
    id: 10,
    title: "Why Picking The Best EBook Font is Essential",
    excerpt:
      "As a self-publishing author, you've likely experienced the agony of opening an eBook and being assaulted by eye-straining fonts that make you want to throw your device across the room.",
    category: "eBooks",
    date: "2024-03-28",
    image:
      "https://res.cloudinary.com/dncqhipqk/image/upload/v1744044418/17_srrp4y.png",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045718/4_tvwsui.png",
    },
  },
  {
    id: 11,
    title: "Why Picking The Best EBook Font is Essential",
    excerpt:
      "As a self-publishing author, you've likely experienced the agony of opening an eBook and being assaulted by eye-straining fonts that make you want to throw your device across the room.",
    category: "eBooks",
    date: "2024-03-28",
    image:
      "https://res.cloudinary.com/dncqhipqk/image/upload/v1744044418/17_srrp4y.png",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045718/4_tvwsui.png",
    },
  },
  {
    id: 12,
    title: "Why Picking The Best EBook Font is Essential",
    excerpt:
      "As a self-publishing author, you've likely experienced the agony of opening an eBook and being assaulted by eye-straining fonts that make you want to throw your device across the room.",
    category: "eBooks",
    date: "2024-03-28",
    image:
      "https://res.cloudinary.com/dncqhipqk/image/upload/v1744044418/17_srrp4y.png",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045718/4_tvwsui.png",
    },
  },
  {
    id: 13,
    title: "Why Picking The Best EBook Font is Essential",
    excerpt:
      "As a self-publishing author, you've likely experienced the agony of opening an eBook and being assaulted by eye-straining fonts that make you want to throw your device across the room.",
    category: "eBooks",
    date: "2024-03-28",
    image:
      "https://res.cloudinary.com/dncqhipqk/image/upload/v1744044418/17_srrp4y.png",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045718/4_tvwsui.png",
    },
  },
  {
    id: 14,
    title: "Why Picking The Best EBook Font is Essential",
    excerpt:
      "As a self-publishing author, you've likely experienced the agony of opening an eBook and being assaulted by eye-straining fonts that make you want to throw your device across the room.",
    category: "eBooks",
    date: "2024-03-28",
    image:
      "https://res.cloudinary.com/dncqhipqk/image/upload/v1744044418/17_srrp4y.png",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://res.cloudinary.com/dncqhipqk/image/upload/v1744045718/4_tvwsui.png",
    },
  },
  // Add more dummy blogs...
];

const categories = [
  "All",
  "Book Publishing",
  "Book Formatting",
  "Writing Tips",
  "eBooks",
  "Marketing",
];

const Blogs = () => {
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const blogsPerPage = 6;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  useEffect(() => {
    filterBlogs();
  }, [selectedCategory]);

  const filterBlogs = () => {
    let filtered = [...dummyBlogs];
    if (selectedCategory !== "All") {
      filtered = dummyBlogs.filter(
        (blog) => blog.category === selectedCategory
      );
    }
    setFilteredBlogs(filtered);
    setCurrentPage(1);
  };

  // Get current blogs for pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.section
        variants={childVariants}
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dncqhipqk/image/upload/v1744386746/contect-us-bg_edmqgj.png')`,
        }}
        className=" bg-gradient-to-r from-blue-50 to-indigo-50 bg-no-repeat bg-cover bg-center h-screen py-28 text-justify px-8 md:py-52 "
      >
        {/* <div className="container mx-auto px-44 p-20 text-white">
          <motion.div
            variants={childVariants}
            className="text-center"
          >
            <motion.h2
              variants={childVariants}
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
            >
              BLOGS
            </motion.h2>
            <motion.p
              variants={childVariants}
              className="text-sm"
            >
              Discover how the power of publishing blogs and author blogs can
              help book publishers in their marketing research efforts. At
              Kinetic Digital Publishers, we believe that leveraging the best
              book blogs and the best advertising blogs for books can provide
              publishers with valuable insights into market trends, reader
              preferences, and the latest industry news. Follow our blog page to
              learn how might a book publisher use blogs in its marketing
              research efforts and stay ahead in today's ever-changing
              publishing landscape.
            </motion.p>
          </motion.div>
        </div> */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white md:w-3/4 mb-12 md:mb-0 ml-auto mr-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            {/* Decorative accent for professional look */}

            <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-tight text-center">
              <span className="text-orange-400">B</span>
              LOGS
            </h1>
            {/* <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute left-9 right-10 top-0 bottom-0 w-28  h-1 bg-orange-500 rounded-full"
            ></motion.div> */}

            <p className="text-sm  md:text-md mb-10 text-orange-50  font-light ">
              Discover how the power of publishing blogs and author blogs can
              help book publishers in their marketing research efforts. At
              Kinetic Digital Publishers, we believe that leveraging the best
              book blogs and the best advertising blogs for books can provide
              publishers with valuable insights into market trends, reader
              preferences, and the latest industry news. Follow our blog page to
              learn how might a book publisher use blogs in its marketing
              research efforts and stay ahead in today's ever-changing
              publishing landscape.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
      <Slider />

      {/* this is blogs sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Latest Posts Section */}
          <motion.div variants={childVariants} className="mb-16">
            <motion.h2
              variants={childVariants}
              className="text-2xl font-bold mb-6"
            >
              Latest Posts
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dummyBlogs.slice(0, 3).map((blog, index) => (
                <motion.article
                  key={blog.id}
                  variants={childVariants}
                  custom={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                      {new Date(blog.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 hover:text-orange-500 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={blog.author.avatar}
                          alt={blog.author.name}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="text-sm text-gray-600">
                          {blog.author.name}
                        </span>
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={childVariants}
            className="mb-8 flex flex-wrap gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-600 hover:bg-orange-100"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* All Blogs Grid */}
          <div className="min-h-[800px]">
            {currentBlogs.length > 0 ? (
              <motion.div
                variants={childVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {currentBlogs.map((blog, index) => (
                  <motion.article
                    key={blog.id}
                    variants={childVariants}
                    custom={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                        {new Date(blog.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 hover:text-orange-500 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            src={blog.author.avatar}
                            alt={blog.author.name}
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          <span className="text-sm text-gray-600">
                            {blog.author.name}
                          </span>
                        </div>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                variants={childVariants}
                className="flex flex-col items-center justify-center h-[400px]"
              >
                <svg
                  className="w-20 h-20 text-gray-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                  No Data Available
                </h3>
                <p className="text-gray-500 text-center max-w-md">
                  No blog posts were found for the selected category. Please try
                  another category or check back later.
                </p>
                <motion.button
                  variants={childVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory("All")}
                  className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
                >
                  View All Blogs
                </motion.button>
              </motion.div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              variants={childVariants}
              className="flex justify-center mt-12 gap-2"
            >
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-full bg-white text-gray-600 hover:bg-orange-100 disabled:opacity-50 disabled:hover:bg-white"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full ${
                    currentPage === i + 1
                      ? "bg-orange-500 text-white"
                      : "bg-white text-gray-600 hover:bg-orange-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-full bg-white text-gray-600 hover:bg-orange-100 disabled:opacity-50 disabled:hover:bg-white"
              >
                Next
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* section payment */}
      <motion.div variants={childVariants} className="mt-10">
        <Payment />
      </motion.div>
    </motion.div>
  );
};

export default Blogs;
