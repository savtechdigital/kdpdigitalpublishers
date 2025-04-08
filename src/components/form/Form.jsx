import { useState } from "react";
import { motion } from "framer-motion";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Book Publishing",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/50 p-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] w-full md:w-2/5"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Explore Our Services Today!
            </h2>
            <motion.img
              src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744066237/logo_hi7vry.png"
              alt="KDP Logo"
              className="h-10"
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="First and last name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Services
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
              >
                <option value="Book Publishing">Book Publishing</option>
                <option value="Book Writing">Book Writing</option>
                <option value="Book Marketing">Book Marketing</option>
                <option value="Editing Services">Editing Services</option>
              </select>
            </div>

            <div>
              <p className="text-sm text-gray-700 mb-2">
                Submitting your manuscript accelerates process.
              </p>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
              />
            </div>

            <div className="flex items-start mt-4">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                required
              />
              <label
                htmlFor="terms"
                className="ml-3 block text-sm text-gray-700"
              >
                By checking the box, you agree to our{" "}
                <span className="text-orange-500 font-medium hover:underline cursor-pointer">
                  Conditions of Use
                </span>
                . By providing your phone number, you consent to receiving calls
                or messages from us.
              </label>
            </div>

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 4px 12px rgba(249, 115, 22, 0.35)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all"
            >
              Start Your Journey
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
};
export default Form;
