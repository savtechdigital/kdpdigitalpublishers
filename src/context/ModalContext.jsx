// src/context/ModalContext.jsx
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTrigger, setModalTrigger] = useState(null);
  const [hasBeenShown, setHasBeenShown] = useState(false); // New state to track if modal was shown

  const openModal = (trigger = null) => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      setModalTrigger(trigger);
      if (trigger === "homepage-timer") {
        setHasBeenShown(true); // Mark as shown for homepage timer
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTrigger(null);
  };

  // Optional: Reset hasBeenShown (e.g., for page refresh or new session)
  const resetModalState = () => {
    setHasBeenShown(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        modalTrigger,
        hasBeenShown,
        resetModalState,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);