import React from "react";
import { motion } from "framer-motion";
import applepay from "../../assets/images/pay/1.png";
import bancontact from "../../assets/images/pay/2.png";
import card from "../../assets/images/pay/3.png";
import eps from "../../assets/images/pay/4.png";
import giropay from "../../assets/images/pay/5.png";
import googlepay from "../../assets/images/pay/6.png";
import ideal from "../../assets/images/pay/7.png";
import klarna from "../../assets/images/pay/8.png";
import link from "../../assets/images/pay/9.png";
import sepa from "../../assets/images/pay/10.png";
import stripe from "../../assets/images/pay/11.png";
import transfer from "../../assets/images/pay/13.png";
import trustpilot from "../../assets/images/review/trustpilot.png";
import reviews from "../../assets/images/review/reviews.png";
import goodfirms from "../../assets/images/review/goodfirms.png";

const Payment = () => {
  const paymentMethods = [
    { id: 1, image: applepay, alt: "Apple Pay" },
    { id: 2, image: stripe, alt: "Stripe" },
    { id: 3, image: googlepay, alt: "Google Pay" },
    { id: 4, image: link, alt: "Link" },
    { id: 5, image: bancontact, alt: "Bancontact" },
    { id: 6, image: eps, alt: "EPS" },
    { id: 7, image: giropay, alt: "Giropay" },
    { id: 8, image: ideal, alt: "iDEAL" },
    { id: 9, image: transfer, alt: "Transfer" },
    { id: 10, image: klarna, alt: "Klarna" },
    { id: 11, image: card, alt: "Card" },
    { id: 12, image: sepa, alt: "SEPA" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 lg:px-20 py-10 mb-10 bg-gray-100 rounded-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-6"
          >
            Payment Methods
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.id}
                variants={itemVariants}
                custom={index}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 15px rgba(0,0,0,0.1)",
                }}
                className="p-3 flex items-center justify-center bg-white rounded-lg shadow-sm transition-all duration-300"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src={method.image}
                  alt={method.alt}
                  className="h-8 w-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-6"
          >
            Reviews
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.img
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              src={reviews}
              alt="Reviews"
              className="h-12 w-auto"
            />
            <motion.img
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              src={goodfirms}
              alt="GoodFirms"
              className="h-12 w-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#00b67a",
                color: "white"
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#00b67a] text-[#00b67a] px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300"
            >
              Review us on
              <motion.img
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={trustpilot}
                alt="Trustpilot"
                className="h-5 w-auto"
              />
              Trustpilot
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Payment;
