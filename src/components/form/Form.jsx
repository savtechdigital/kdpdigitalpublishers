// src/components/form/Form.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Step labels and validation schemas (unchanged)
const STEPS = ["Name", "Contact", "Submit"];
const TOTAL_STEPS = STEPS.length;

const validationSchemas = [
  Yup.object({
    name: Yup.string().required("Name is required"),
  }),
  Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
  }),
  Yup.object({
    service: Yup.string().required("Service is required"),
    file: Yup.mixed().required("File is required"),
  }),
];

// Animation variants for the step indicator (unchanged)
const stepVariants = {
  active: { scale: 1.2, backgroundColor: "#F97316", color: "#fff" },
  inactive: { scale: 1, backgroundColor: "#e5e7eb", color: "#000" },
  lineActive: { backgroundColor: "#F97316" },
  lineInactive: { backgroundColor: "#fff" },
};

const FormComponent = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  // Handle form submission
  const handleSubmit = async (values) => {
    const formDataToSend = new FormData();
    formDataToSend.append("name", values.name);
    formDataToSend.append("email", values.email);
    formDataToSend.append("phone", values.phone);
    formDataToSend.append("service", values.service);
    if (values.file) {
      formDataToSend.append("file", values.file);
    }

    try {
      const response = await fetch(
        "http://localhost:3000/services/publishing",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
      if (onClose) onClose(); // Close the modal on successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/90 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md mx-auto relative"
    >
      {/* Close Icon */}
      {onClose && (
        <>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="text-center text-sm font-bold mb-4 mt-4 text-orange-400">
            New Opportunities Await! Explore Our Services Today!
          </div>
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {/* Step Indicator */}
        <div className="flex flex-row items-center justify-between mb-4 space-y-1 sm:space-y-0">
          {STEPS.map((step, index) => (
            <div
              key={step}
              className="flex items-center w-full sm:w-auto justify-center"
            >
              <motion.div
                className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                animate={currentStep >= index + 1 ? "active" : "inactive"}
                variants={stepVariants}
              >
                {currentStep > index + 1 ? "✔" : index + 1}
              </motion.div>
              <span className="ml-2 text-xs sm:text-sm font-medium">
                {step}
              </span>
              {index < TOTAL_STEPS - 1 && (
                <motion.div
                  className="w-8 sm:w-12 h-1 mx-2 hidden sm:block rounded-lg"
                  animate={
                    currentStep > index + 1 ? "lineActive" : "lineInactive"
                  }
                  variants={stepVariants}
                />
              )}
            </div>
          ))}
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            service: "",
            file: null,
          }}
          validationSchema={validationSchemas[currentStep - 1]}
          onSubmit={(values, { setSubmitting }) => {
            if (currentStep < TOTAL_STEPS) {
              setCurrentStep(currentStep + 1);
            } else {
              handleSubmit(values);
            }
            setSubmitting(false);
          }}
        >
          {({ setFieldValue }) => (
            <Form className="space-y-4">
              {currentStep === 1 && (
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-orange-500">*</span>
                  </label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="First and last name"
                    className="w-full px-3 py-2 border border-gray-300 outline-none rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-orange-500 text-xs pt-1 pl-2"
                  />
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-orange-500">*</span>
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-orange-500 text-xs pt-1 pl-2"
                  />
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 mt-4">
                    Phone <span className="text-orange-500">*</span>
                  </label>
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    className="w-full px-3 py-2 border border-gray-300 outline-none rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-orange-500 text-xs pt-1 pl-2"
                  />
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Services <span className="text-orange-500">*</span>
                  </label>
                  <Field
                    as="select"
                    name="service"
                    className="w-full px-3 py-2 border border-gray-300 outline-none rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="Book Publishing">Book Publishing</option>
                    <option value="Book Writing">Book Writing</option>
                    <option value="Book Marketing">Book Marketing</option>
                    <option value="Editing Services">Editing Services</option>
                  </Field>
                  <ErrorMessage
                    name="service"
                    component="div"
                    className="text-orange-500 text-xs sm:text-sm pt-1 pl-2"
                  />
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 mt-4">
                    Upload File <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="file"
                    onChange={(event) => {
                      setFieldValue("file", event.currentTarget.files[0]);
                    }}
                    className="w-full px-3 py-2 border outline-none border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm"
                  />
                  <ErrorMessage
                    name="file"
                    component="div"
                    className="text-orange-500 text-xs pt-1 pl-2"
                  />
                  <div className="flex items-start mt-4">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="ml-3 block text-xs text-gray-700"
                    >
                      By checking the box, you agree to our{" "}
                      <a
                        href="/terms-and-condition"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 font-medium hover:underline cursor-pointer"
                      >
                        Conditions of Use
                      </a>
                      . By providing your phone number, you consent to receiving
                      calls or messages from us.
                    </label>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-4 sm:space-y-0 sm:space-x-2">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg w-[100px] sm:w-auto text-sm"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg w-[100px] sm:w-auto text-sm"
                >
                  {currentStep < TOTAL_STEPS ? "Next" : "Submit"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </motion.div>
  );
};

export default FormComponent;