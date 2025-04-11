import { motion } from "framer-motion";
import Slider from "../components/slider/slider";
// import book from "../assets/images/3.webp";
import Calendly from "../components/calendly/Calendly";
import Payment from "../components/payment/Payment";
import { useModal } from "../context/ModalContext";

// Team Members Data
const teamMembers = [
  {
    id: 1,
    name: "Miles Wolf",
    role: "Chief of Author Strategy",
    description: "Led Strategy Planning for 500+ Projects",
    image: "https://res.cloudinary.com/dncqhipqk/image/upload/v1744309882/Miles_s14gjo.jpg"
  },
  {
    id: 2,
    name: "Marvin Mahoney",
    role: "Director of Author Strategy",
    description: "Accelerated Consistent Growth by Onboarding 1000+ Projects, Yearly",
    image: "https://res.cloudinary.com/dncqhipqk/image/upload/v1744309935/kayla_tbhydm.jpg"
  },
  {
    id: 3,
    name: "Kayla Francis",
    role: "Senior Ghostwriter",
    description: "Internationally Top-Rated Ghostwriter in the USA",
    image: "https://res.cloudinary.com/dncqhipqk/image/upload/v1744309935/kayla_tbhydm.jpg"
  },
  {
    id: 4,
    name: "Maya Richardson",
    role: "Editorial Director",
    description: "NYT Best-Seller. Former Editor at Harper Publishing",
    image: "https://res.cloudinary.com/dncqhipqk/image/upload/v1744309988/5_o9yfpl.jpg"
  },
  {
    id: 5,
    name: "Brianna Nicholas",
    role: "Executive Editor",
    description: "Worked on 300+ Projects, Successfully",
    image: "https://res.cloudinary.com/dncqhipqk/image/upload/v1744309989/6_giedfd.jpg"
  },
  {
    id: 6,
    name: "Hazel Carter",
    role: "Project Manager",
    description: "Managed 1000+ Projects",
    image: "https://res.cloudinary.com/dncqhipqk/image/upload/v1744309990/7_tt5ay0.jpg"
  },
  {
    id: 7,
    name: "Zayn Cole",
    role: "Sr. Project Manager",
    description: "Former Manager at Hachette",
    image: "https://res.cloudinary.com/dncqhipqk/image/upload/v1744309991/8_unmubo.jpg"
  },
  {
    id: 8,
    name: "Edda Smiles",
    role: "Publishing Consultant",
    description: "(Intern)",
    image: "https://res.cloudinary.com/dncqhipqk/image/upload/v1744309992/9_dwnaye.jpg"
  }
];

function About() {
  const { openModal } = useModal();
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

  const teamVariants = {
    hidden: { opacity: 0 },
    visible: item => ({
      opacity: 1,
      transition: { 
        delay: item * 0.05,
        duration: 0.1
      }
    })
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* main section */}
      <motion.section
        variants={childVariants}
        style={{
          backgroundImage: `url('/src/assets/images/testimonials.png')`,
        }}
        className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50 bg-no-repeat bg-cover bg-center"
      >
        <div className="container mx-auto px-4 text-white">
          <motion.div
            variants={childVariants}
            className="text-center"
          >
            <motion.h1
              variants={childVariants}
              className="text-2xl mb-6"
            >
              What Our Clients Say
            </motion.h1>
            <motion.h2
              variants={childVariants}
              className="text-4xl font-bold mb-8"
            >
              Testimonials
            </motion.h2>
          </motion.div>
        </div>
      </motion.section>

      {/* main section */}
      <Slider />

      <motion.section
        variants={childVariants}
        className="py-2 mt-4 mb-8"
      >
        <div className="container mx-auto px-4 pt-6 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center lg:px-10">
            <motion.div
              variants={childVariants}
              className="space-y-6 lg:col-span-[7] lg:pr-10"
            >
              <motion.h2
                variants={childVariants}
                className="text-2xl md:text-3xl font-bold text-black mb-4"
              >
                KDP—The Perfect Gateway to Publishing Success
              </motion.h2>
              {[
                "With a vision to digitize dreams, Kinetic Digital Publishers has been at the forefront of the publishing industry since 1997. Our team's solid commitment to empowering authors has led us to become a leading platform. We've spent over two decades refining our legacy by providing a comprehensive suite of services that cater to authors at every stage of their literary journey.",
                "From the thorough process of eBook self-publishing to the artistry of social media marketing, we offer a full spectrum of solutions. Our expertise extends to content marketing, website design and development, book editing and proofreading, cover designing, and other relevant services for authors of all kinds and niches. At the heart of our mission lies a dedication to promoting hidden talent across the USA. We're passionate about giving a voice to new, emerging, and established authors alike.",
                "Our focus on younger generations has led us to create aesthetically pleasing and engaging formats that resonate with Millennials and Gen Z readers. We've been inspired by industry leaders like Amazon Publishing, and our shared goal of launching new talent has positioned us as a known name in the publishing world.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  variants={childVariants}
                  custom={index}
                  className="text-gray-700 text-sm lg:text-[15px]"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              variants={childVariants}
              className="relative flex justify-center items-center lg:col-span-[5]"
            >
              <motion.img
                variants={childVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                src='https://res.cloudinary.com/dncqhipqk/image/upload/v1744045712/3_pqna0z.webp'
                alt="Book Journey to Bestsellerdom"
                className="w-full h-auto max-w-sm object-contain"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={childVariants}
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dncqhipqk/image/upload/v1744045734/ai-4_khyjrg.jpg')`,
        }}
        className="bg-white bg-no-repeat bg-cover bg-center py-10 px-4 lg:py-20 lg:px-20"
      >
        <div className="container mx-auto">
          <motion.div
            variants={childVariants}
            className="text-center mb-10"
          >
            <motion.h2
              variants={childVariants}
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
            >
              Meet Our Team of Professionals
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={teamVariants}
                custom={member.id}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                  y: -10 
                }}
                className="bg-white rounded-xl shadow-lg p-6 transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.h3
                  variants={childVariants}
                  className="text-xl font-bold mb-2 text-orange-500"
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  variants={childVariants}
                  className="text-gray-900 font-semibold mb-2"
                >
                  {member.role}
                </motion.p>
                <motion.p
                  variants={childVariants}
                  className="text-gray-600 text-sm"
                >
                  {member.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      <motion.section
        variants={childVariants}
        style={{
          backgroundImage: `url('src/assets/images/cta-bg.png')`,
        }}
        className="relative py-16 bg-cover bg-no-repeat mt-4"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-1 items-center">
            <motion.div
              variants={childVariants}
              className="space-y-4 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Take your book to the next level with our help
              </h2>
              <p className="text-sm md:text-base text-gray-200 mb-6">
                We'll turn your thoughts into a carefully crafted and critically
                acclaimed book
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  variants={childVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+18552490007"
                  className="inline-block px-6 py-2.5 bg-orange-500 text-white text-sm font-medium rounded-full hover:bg-orange-600 transition-colors"
                >
                  Call Us +1 (855) 249-0007
                </motion.a>
                <motion.button 
                  variants={childVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-white text-gray-900 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
                >
                  Live Chat
                </motion.button>
                <motion.button 
                  variants={childVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal("apply-now-button")}
                  className="px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors border border-white"
                >
                  Get A Quote
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="mt-4">
        <Calendly />
      </div>
      <Payment />
    </motion.div>
  );
}

export default About;
