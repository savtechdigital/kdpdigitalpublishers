import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Calendly = () => {
  const [isLoading, setIsLoading] = useState(true);
  const calendlyRef = useRef(null);

  useEffect(() => {
    // Modern approach - using Intersection Observer to detect when to load
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadCalendly();
        }
      },
      { threshold: 0.1 }
    );

    if (calendlyRef.current) {
      observer.observe(calendlyRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const loadCalendly = () => {
    // Check if script already exists to prevent duplicates
    if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      initializeCalendly();
      return;
    }

    // Create and load the Calendly script with Promise-based loading
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.defer = true; // Modern optimization
    
    // Handle script loading events properly
    script.onload = () => initializeCalendly();
    script.onerror = () => {
      console.error("Failed to load Calendly");
      setIsLoading(false); // Hide loader even if failed
    };
    
    document.body.appendChild(script);
  };

  const initializeCalendly = () => {
    // Check for Calendly object in window
    if (window.Calendly) {
      // Initialize widget with Calendly API if available
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/kdpdigitalpublishers-info/free-consultation',
        parentElement: document.querySelector('.calendly-inline-widget'),
        prefill: {},
        utm: {}
      });
      
      // Short delay to ensure widget is visible
      setTimeout(() => setIsLoading(false), 800);
    } else {
      // Fallback - just wait a bit longer if Calendly object isn't available yet
      setTimeout(() => setIsLoading(false), 1500);
    }
  };

  return (
    <>
      <section
        style={{
          backgroundImage: `url('/src/assets/images/ai-1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative py-16 min-h-screen bg-no-repeat bg-center mb-8 flex items-center"
      >
        {/* Background overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Book a Free Consultation
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Let's discuss how we can transform your manuscript into a
              bestseller. Schedule a free 30-minute consultation with our
              publishing experts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden relative ">
              {/* Enhanced loading indicator */}
              {isLoading && (
                <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-600 font-medium">
                    Loading calendar...
                  </p>
                  <p className="text-xs text-gray-400 mt-2">This may take a moment</p>
                </div>
              )}

              {/* Calendar widget container - responsive approach */}
              <div 
                ref={calendlyRef}
                className="calendly-inline-widget w-full overflow-hidden" 
                data-url="https://calendly.com/kdpdigitalpublishers-info/free-consultation"
                // style={{ width: "1000px", height: "750px" ,marginLeft:"-50px"}}
                style={{ 
                  height: '750px',
                  // Use responsive width to avoid overflow
                  width: '100%',
                  maxWidth: '100%' 
                }}
              ></div>
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
              <button className="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors text-sm md:text-base font-medium">
                Live Chat
              </button>
              <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors text-sm md:text-base font-medium border border-white">
                Get A Quote
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Calendly;
