import { motion } from "framer-motion";
import Form from "../form/Form";
import Slider from "../slider/slider";
import VideoSection from "./VideoSection";
import { VideoProvider } from "../../context/VideoContext";
import { useModal } from "../../context/ModalContext";
const VideoTrailer = () => {
  const { openModal } = useModal();
  const videoSections = [
    {
      title: "The Habitchual Liar",
      videoSrc: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744222180/5_skkuq3.mp4",
      posterSrc: "https://res.cloudinary.com/dncqhipqk/image/upload/v1744222114/5-poster_vdb47p.jpg",
      lineWidth: "230px"
    },
    {
      title: "Marriage On Purpose",
      videoSrc: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744222324/4_hnh1bv.mp4",
      posterSrc: "https://res.cloudinary.com/dncqhipqk/image/upload/v1744222321/4-poster_zhnrxi.jpg",
      lineWidth: "230px"
    },
    {
      title: "The Way Back To Being",
      videoSrc: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744221063/3_1_ajqda4.mp4",
      posterSrc: "https://res.cloudinary.com/dncqhipqk/image/upload/v1744221658/3-poster_llcadv.jpg",
      description: "Watch how we transform stories into cinematic experiences",
      lineWidth: "100px"
    },
    {
      title: "Long Story Shorties",
      videoSrc: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744223993/2_k1eswz.mp4",
      posterSrc: "https://res.cloudinary.com/dncqhipqk/image/upload/v1744224019/2-poster_ljmbqt.jpg",
      description: "",
      lineWidth: "100px"
    },
    {
      title: "From Pain To Wellness",
      videoSrc: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744224128/1_xjqa7r.mp4",
      posterSrc: "https://res.cloudinary.com/dncqhipqk/image/upload/v1744224125/1-poster_j1muzq.jpg",
      description: "",
      lineWidth: "100px"
    },
    {
      title: "Monarch(Y)",
      videoSrc: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744224499/Monarch_y_fivu8n.mp4",
      posterSrc: "",
      description: "",
      lineWidth: "100px"
    },
    {
      title: "Meet The knoggins",
      videoSrc: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744224819/meet-the-knoggins_ipeb3a.mp4",
      posterSrc: "",
      description: "",
      lineWidth: "100px"
    },
    {
      title: "Finding Joe Adams",
      videoSrc: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744225828/Finding_joe_adams_1_rpq6yx.mp4",
      posterSrc: "",
      description: "",
      lineWidth: "100px"
    },
    {
      title: "Bridge The Gap lead the pack",
      videoSrc: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744225867/Bridge-the-gap_1_bk0ef2.mp4",
      posterSrc: "",
      description: "",
      lineWidth: "100px"
    },
    {
      title: "What If There Were No Christmas",
      videoSrc: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744226002/what_if_there_1_bky8ns.mp4",
      posterSrc: "",
      description: "",
      lineWidth: "100px"
    },
    {
      title: "Vessel of light",
      videoSrc: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744226048/Vessel_of_light_1_owjnip.mp4",
      posterSrc: "",
      description: "",
      lineWidth: "100px"
    },
    {
      title: "The Lost King Of England",
      videoSrc: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744226089/The_lost_King_1_qr6ly3.mp4",
      posterSrc: "",
      description: "",
      lineWidth: "100px"
    },
    {
      title: "Secrets Of California Deserts",
      videoSrc: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744226116/Secrets_1_ltphze.mp4",
      posterSrc: "",
      description: "",
      lineWidth: "100px"
    },
    {
      title: "The Crimson Triangle",
      videoSrc: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744226152/The_Crimson_Triangle_1_ph7ob1.mp4",
      posterSrc: "",
      description: "",
      lineWidth: "100px"
    },
    {
      title: "Game Changer",
      videoSrc: "https://res.cloudinary.com/dncqhipqk/video/upload/v1744226217/Gamechanger_1_utqeo3.mp4",
      posterSrc: "",
      description: "",
      lineWidth: "100px"
    },
  ];

  return (
    <VideoProvider>
      <section className="relative min-h-screen bg-cover bg-center overflow-hidden py-16 md:py-24">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover "
            loading="lazy"
          >
            <source
              src="https://res.cloudinary.com/dncqhipqk/video/upload/v1744219879/banner_bsi32c.mp4"
              type="video/mp4"
            />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent opacity-60"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent opacity-40"></div> */}

        {/* Main content container with extra padding */}
        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 max-w-7xl mx-auto">
            {/* Left side - Text content with reduced width */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white md:w-2/5 mb-12 md:mb-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative"
              >
                {/* Decorative accent for professional look */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="absolute -left-4 top-0 bottom-0 w-1 bg-orange-500 rounded-full"
                ></motion.div>
                <h1 className="text-xl  font-bold mb-4 leading-tight">
                  Video Trailer
                </h1>

                <h1 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
                  Book a {""}
                  <span className="text-orange-400">Session</span> {""}
                  with Our Strategic Consulting Team
                </h1>
                <p className="text-md md:text-md mb-10 text-gray-200 leading-relaxed">
                  Creating hype, making readers curious, and introducing the
                  plot of the book has now proved to create a positive impact on
                  minds prior to the release date. Instagram reels, Facebook
                  posts, and Tweets on X, have now leveraged authors to easily
                  interact with a larger number of audiences.
                </p>
                <div className="flex flex-wrap gap-6 mt-10">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 5px 15px rgba(255,165,0,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openModal("apply-now-button")}
                    className="px-4 py-2 bg-transparent border-2 border-white text-white text-lg font-semibold hover:bg-white hover:text-black transition-all rounded-lg"
                  >
                    Get A Quote
                  </motion.button>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 5px 15px rgba(255,165,0,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-orange-500 text-white text-lg font-semibold hover:bg-orange-600 transition-all rounded-lg"
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Form with reduced width */}
            <Form />
          </div>
        </div>
      </section>
      <Slider />

      {/* Video Sections */}
      {videoSections.map((section, index) => (
        <VideoSection
          key={index}
          title={section.title}
          description={section.description}
          videoSrc={section.videoSrc}
          posterSrc={section.posterSrc}
          lineWidth={section.lineWidth}
        />
      ))}
    </VideoProvider>
  );
};

export default VideoTrailer;
