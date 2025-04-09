import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const TermsAndCondition = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: "Welcome",
      content: `Welcome to the official corporate website of Kinetic Digital Publishers (the "Site"). This Site is owned by Kinetic Digital Publishers, and we appreciate your visit. The purpose of this section is to outline the terms and conditions (the "Terms") that govern your access to and use of our Site. By accessing and using this Site, it is assumed that you understand and agree to be bound by these Terms. The following points are provided to enhance your understanding of the legal framework within which we operate`,
    },
    {
      title: "Ownership",
      content: `All the content displayed on this site is either owned by us or used with the owner's consent. 
      While we encourage you to explore our Site and print copies of material for your personal, 
      non-commercial use, any other form of copying is strictly prohibited, and all rights are reserved.`,
    },
    {
      title: "No Warranty",
      content: `We provide this Site "as is." Although we take care to ensure the accuracy and 
      completeness of the materials presented, we cannot guarantee the following:`,
      list: [
        "Compatibility of downloaded material or software with your equipment or freedom from viruses.",
        "Accuracy or completeness of all materials.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: `To the fullest extent permitted by law, we exclude all liability for any loss or damage 
      (including direct, indirect, economic, or consequential loss or damage) incurred by you 
      as a result of visiting or using this Site, accessing or downloading materials from it, 
      or your inability to use this Site, including any errors in its provision or any computer 
      viruses transmitted through this Site. This applies regardless of whether such loss or 
      damage arises from our negligence or otherwise, and even if we are explicitly informed 
      of the possibility of such loss or damage.`,
    },
    {
      title: "Refund Policy",
      content: `At Kinetic Digital Publishers, we offer a straightforward refund policy to our customers, 
      subject to certain conditions:`,
      points: [
        {
          number: "1",
          text: "If you decide to cancel your order and discontinue our services before the project has commenced, you are eligible for a complete refund of 100% of the amount paid, excluding transaction charges.",
        },
        {
          number: "2",
          text: "Should you choose to discontinue our services while the project is still active, we will refund you the remaining balance of your order. However, any work already completed for your project will be retained, and the corresponding amount will not be refunded.",
        },
        {
          number: "3",
          text: "Any project, regardless of its status (active, on hold, in-progress, or completed), is ineligible for a partial or full refund if the payment for that project was made 90 days ago or more.",
        },
        {
          number: "4",
          text: "If you have specific concerns and require a complete refund, please submit a refund request, and our team will make a decision accordingly.",
        },
      ],
    },
    {
      title: "Links to Third-Party Sites",
      content: `Links to third-party websites on this Site are provided solely for your convenience. 
      By using these links, you will leave our Site. We have not reviewed all of these 
      third-party websites and do not control or take responsibility for their content. 
      Consequently, we do not endorse or make any representations about these websites or 
      the materials found there, nor do we guarantee any results obtained from using them. 
      Should you choose to access any of the third-party websites linked to our Site, you 
      do so at your own risk.`,
      points: [
        {
          number: "1",
          text: "Links to Our Site If you wish to create a link to our website, you may only do so under the following conditions:",
        },
        {
          number: "2",
          text: "You may link to the home page of our Site without replicating its content.",
        },
        {
          number: "3",
          text: "Our images must not be removed, distorted, or altered in size or appearance.",
        },
        {
          number: "4",
          text: "You must not create a frame or any other browser or border environment around our Site.",
        },
        {
          number: "5",
          text: "You must not imply that we endorse any products or services other than our own.",
        },
        {
          number: "6",
          text: "You must not misrepresent your relationship with us or provide false information about us.",
        },
        {
          number: "7",
          text: "You must obtain written permission from us to use any trademarks displayed on our Site.",
        },
        {
          number: "8",
          text: "The website from which you link to ours must be owned by you and comply with all applicable laws and regulations, ensuring that its content is neither distasteful, offensive, nor controversial, and that it does not infringe upon any intellectual property or other rights of any other person.",
        },
      ],
    },
  ];

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900/5 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-orange-500 mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 text-lg">
            Please read these terms carefully before using our services
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-6"
            >
              <motion.div
                className={`bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeSection === index ? "ring-2 ring-orange-500" : ""
                }`}
                onClick={() => toggleSection(index)}
                whileHover={{ scale: 1.01 }}
              >
                <div className="p-6 md:p-8 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                  <motion.div
                    animate={{ rotate: activeSection === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 flex items-center justify-center"
                  >
                    <svg
                      className={`w-6 h-6 ${
                        activeSection === index
                          ? "text-orange-500"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>
                <AnimatePresence>
                  {activeSection === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 md:px-8 pb-6 md:pb-8"
                    >
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {section.content}
                        </p>

                        {section.list && (
                          <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            {section.list.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )}

                        {section.points && (
                          <div className="space-y-6 mt-6">
                            {section.points.map((point, i) => (
                              <div
                                key={i}
                                className="flex items-start space-x-4"
                              >
                                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                                  <span className="text-orange-500 font-bold">
                                    {point.number}
                                  </span>
                                </div>
                                <p className="text-gray-600">{point.text}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mt-8"
          >
            <p className="text-gray-600 mb-6 leading-relaxed">
              Other Legal Notices Specific areas of this Site may contain
              additional legal notices related to your use of those areas.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Changes to This Legal Notice We reserve the right to amend this
              legal notice periodically.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We at Kinetic Digital Publishers are a separate and independent
              entity from Kindle Direct Publishing. While we utilize Kindle's
              platform for the publication, marketing, and paid advertisements
              of our books, we are not affiliated with or endorsed by Kindle
              Direct Publishing.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Privacy Policy It is crucial that you understand how we utilize
              the information we collect about you. For more information on user
              privacy, security, and how Kinetic Digital Publishers handles
              user-provided information, please visit our Privacy Policy page.
            </p>
         
            
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mt-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              For any questions or media inquiries, please contact us at{" "}
              <a
                href="mailto:marketing@kdpdigitalpublishers.com"
                className="text-orange-500 hover:text-orange-600"
              >
                marketing@kdpdigitalpublishers.com
              </a>
              , and our marketing manager will respond promptly with appropriate
              answers.
            </p>
            <div className="mt-8 p-6 bg-orange-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Note:</strong> We at Kinetic Digital Publishers are a
                separate and independent entity from Kindle Direct Publishing.
                While we utilize Kindle's platform for the publication,
                marketing, and paid advertisements of our books, we are not
                affiliated with or endorsed by Kindle Direct Publishing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
