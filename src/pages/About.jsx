import { motion } from 'framer-motion';

function About() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12">What is KDP?</h1>
          
          <div className="prose lg:prose-lg mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-lg mb-6">
                Kinetic Digital Publishers—Your Story, Amplified! 
              </p>
              
              <p className="mb-6">
                KDP is not just a publishing house; it is the author's fictitious starting point. 
                We believe that every story, no matter how wild or whispered, deserves a chance to shine. 
                At Kinetic Digital Publishers, the team focuses on the power of words to transform 
                the lives of underrated authors.
              </p>

              <p className="mb-6">
                From the vision of an author to the applause of the readers, we're the dedicated partners. 
                Our team is trained to polish your manuscript, design covers that attract, and market 
                your book to the world.
              </p>

              <p>
                Kinetic Digital Publishers is not just about publishing; it is about empowering authors 
                to find and maximize their hidden potential. Let's write your success story by turning 
                your passion into a published reality!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-blue-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p>
                  To empower authors with comprehensive publishing solutions while 
                  maintaining the highest standards of quality and integrity.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-blue-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p>
                  To be the leading force in transforming aspiring writers into 
                  successful published authors.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About; 