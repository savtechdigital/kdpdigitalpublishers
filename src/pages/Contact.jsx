import { motion } from 'framer-motion';
import { useState } from 'react';
import Slider from '../components/slider/slider';
import Calendly from '../components/calendly/Calendly';
import Payment from '../components/payment/Payment';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen ">
        <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        style={{
          backgroundImage: `url('/src/assets/images/testimonials.png')`,
        }}
        className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50 bg-no-repeat bg-cover bg-center"
      >
        <div className="container mx-auto px-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl  mb-6"
            >
            GET A QUOTE
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold mb-8"
            >
           Contact Us
            </motion.h2>
          </motion.div>
        </div>
      </motion.section>
      <Slider />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12">Connect with Us – Your Voice Matters</h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p>
                    <strong>Phone:</strong><br />
                    <a href="tel:+18552490007" className="text-blue-600 hover:text-blue-700">
                      +1 (855) 249-0007
                    </a>
                  </p>
                  <p>
                    <strong>Email:</strong><br />
                    <a href="mailto:marketing@kdpdigitalpublishers.com" className="text-blue-600 hover:text-blue-700">
                      marketing@kdpdigitalpublishers.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Office Locations</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Head Office</h4>
                    <p>2121 N Pearl St Floor 3,<br />Dallas, TX 75201</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Sales Office</h4>
                    <p>3232 McKinney Ave 5th Floor,<br />Dallas, TX 75204</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Mailing Address</h4>
                    <p>4498 Main St Suite 4 # 1697<br />Buffalo, NY 14226</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Calendly />
      <Payment />
    </div>
  );
}

export default Contact; 