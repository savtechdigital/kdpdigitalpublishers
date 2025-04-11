// src/components/form/FormModal.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import FormComponent from "./Form";
import { useModal } from "../../context/ModalContext";

// Modal animation variants (unchanged)
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const FormModal = () => {
  const { isModalOpen, openModal, closeModal, hasBeenShown } = useModal();
  const location = useLocation();

  // Auto-open modal on home route after 5 seconds (only if not already shown)
  useEffect(() => {
    if (
      location.pathname === "/" &&
      !isModalOpen &&
      !hasBeenShown // Only trigger if modal hasn't been shown
    ) {
      const timer = setTimeout(() => {
        openModal("homepage-timer");
      }, 5000); // 5 seconds delay

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [location.pathname, isModalOpen, hasBeenShown, openModal]);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="relative w-full max-w-md mx-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <FormComponent onClose={closeModal} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormModal;