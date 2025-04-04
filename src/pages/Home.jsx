import { motion } from "framer-motion";
import backgroundImage from "../assets/ai3.jpg";
import Slider from "../components/slider/slider";
import book from "../assets/images/3.webp";
import Payment from "../components/payment/Payment";

// Add this array at the top of your file with placeholder logos

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50"
      >
        <div className="container mx-auto px-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6 ">
              Get Published Within 48 Hours*
            </h1>

            <h2 className="text-3xl  mb-8">Keep 100% Rights & Royalties</h2>
            <button className="  px-8 py-3 bg-black text-white  text-lg font-semibold transition-colors">
              APPLY NOW!
            </button>
            <p className="text-sm  mt-4">
              *Certain Restrictions apply, including acceptance of Client
              manuscript and subject material.
            </p>
          </motion.div>
        </div>
      </section>
      {/* section slider */}
      <Slider />
      {/* section slider */}

      {/* Services Section */}
      {/* <section className="py-20">
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
                transition={{ delay: index * 0.5 }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black mb-6">
                Your Book's Journey to Bestsellerdom Starts with Us!
              </h2>
              <p className="text-gray-700 mb-6">
                Kinetic Digital Publishers is your all-in-one partner for book success.
                From crafting mind-capturing narratives to dominating bestseller lists,
                KDP offers a wide-ranging suite of services to turn your manuscript into
                a publishing world's sensation.
              </p>
              <p className="text-gray-700 mb-6">
                Our expert team provides incomparable book social media marketing,
                content optimization, web design and development, Amazon
                optimization, book publishing, and all other services that authors need to
                fly high. Our primary goal is to ensure that your story reaches the right
                readers.
              </p>
              <p className="text-gray-700 mb-6">
                Let team KDP be the catalyst for literary victory! Our services include;
              </p>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Book Ghostwriting Services
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Editing and Formatting
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Book Publishing Services
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Author Website Design
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Book Cover Design
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    E-book Writing Services
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Book Marketing Services
                  </li>
                </ul>
              </div>
              <div className="flex gap-4 mt-8">
                <button className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
                  Get A Quote
                </button>
                <button className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
                  Live Chat
                </button>
              </div>
            </div>
            <div className="relative  w-full h-full flex justify-center ">
              <img
                src={book}
                alt="Book Journey to Bestsellerdom"
                className="w-[70%] h-[600px]   object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <Payment />
    </div>
  );
}

const services = [
  {
    title: "Book Publishing",
    description:
      "From comprehensive editing to copyright protection, we handle all your publishing needs while you retain 100% rights and royalties.",
  },
  {
    title: "Book Writing",
    description:
      "Get mentored by industry experts to complete your book from start to finish in 90 days or less.",
  },
  {
    title: "Book Marketing",
    description:
      "Strategic marketing campaigns to make your book a #1 Bestseller on major platforms.",
  },
  {
    title: "Ghost Writing",
    description:
      "Professional ghost writers to bring your story to life with your unique voice.",
  },
  {
    title: "Editing & Proofreading",
    description:
      "Expert editing services to polish your manuscript to perfection.",
  },
  {
    title: "Cover Design",
    description:
      "Eye-catching cover designs that make your book stand out on the shelf.",
  },
];

export default Home;
