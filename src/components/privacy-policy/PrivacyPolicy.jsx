import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: "Introduction",
      content: `This website is hosted by Kinetic Digital Publishers, a company dedicated to safeguarding the privacy of its clients. The following statement provides a summary of how Kinetic Digital Publishers collects and utilizes information from clients and visitors to this website.`
    },
    {
      title: "Data Policy",
      content: `Our data policy outlines the types of information collected by Kinetic Digital Publishers and how this information is utilized to enhance the user experience and provide superior services to our clients.`
    },
    {
      title: "Information We Collect",
      content: `At Kinetic Digital Publishers, we only collect essential information required for project development and implementation. This includes:`,
      list: [
        "Client's name",
        "Email address",
        "Project requirements details",
        "IP address",
        "Location",
        "Contact number"
      ]
    },
    {
      title: "Use of Collected Information",
      content: `The information we collect is strictly used for communication, interaction, and improving the user experience for our clients based on their project requirements.`
    },
    {
      title: "Sharing of Collected Information",
      content: `The information is shared among employees solely for the purpose of project development. However, we utilize the collected information as a reference only after receiving written or virtual confirmation and approval from the respective client. We never share or sell our clients' information collected for project development purposes.`
    },
    {
      title: "SMS/MMS Messaging Policy",
      content: `In compliance with the Telephone Consumer Protection Act (TCPA) and other applicable regulations, clients who provide their contact numbers may receive SMS or MMS messages from Kinetic Digital Publishers regarding project updates, promotional offers, and other relevant information.`
    },
    {
      title: "Management and Deletion of Collected Information",
      content: `Our data team manages the collected information using our in-house secure CRM system. Clients have the discretion to change, modify, or delete their data with the assistance of our help desk.`
    },
    {
      title: "Responses to Legal Requests and Prevention of Harm",
      content: `The collected information is also used for account verification and prevention of spam or other malicious activities to ensure the integrity, safety, and security of our clients. In compliance with legal requests from law enforcement agencies or departments, we may share the collected information.`
    },
    {
      title: "Use, Operation, and Transfer of Collected Data",
      content: `The use, operation, and transfer of collected data are strictly limited to our company for project development purposes. Client data is never shared outside the company.`
    },
    {
      title: "Notification of Policy Updates or Changes",
      content: `In the event of significant changes or updates to our policies, we will inform clients via email or through notifications on our website.`
    }
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
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg">
            Your privacy is important to us. Please read our policy carefully.
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
                  activeSection === index ? 'ring-2 ring-orange-500' : ''
                }`}
                onClick={() => toggleSection(index)}
                whileHover={{ scale: 1.01 }}
              >
                <div className="p-6 md:p-8 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  <motion.div
                    animate={{ rotate: activeSection === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 flex items-center justify-center"
                  >
                    <svg
                      className={`w-6 h-6 ${activeSection === index ? 'text-orange-500' : 'text-gray-400'}`}
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
                        <p className="text-gray-600 mb-4 leading-relaxed">{section.content}</p>
                        
                        {section.list && (
                          <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            {section.list.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              For any questions regarding our privacy policy, please contact us at{" "}
              <a href="mailto:marketing@kdpdigitalpublishers.com" className="text-orange-500 hover:text-orange-600">
                marketing@kdpdigitalpublishers.com
              </a>
            </p>
            <div className="mt-8 p-6 bg-orange-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Note:</strong> For further details regarding the use, disclaimers, and limitations of liability governing the use of our website, please refer to our Terms and Conditions section.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;