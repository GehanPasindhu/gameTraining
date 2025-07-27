import React from "react";
import { motion } from "framer-motion";
import { modalstyle } from "../../assets/ModalStyle";

function ModalWrapper({ children, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center"
      variants={modalstyle.backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="bg-white rounded-lg p-6 w-full max-w-lg relative"
        variants={modalstyle.modal}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
        >
          <img src="/images/close.png" />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
}

export default ModalWrapper;
