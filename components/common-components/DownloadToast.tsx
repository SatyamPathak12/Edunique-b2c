"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; // exact icon match
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

interface DownloadToastProps {
  show: boolean;
  text?: string; // optional custom text
}

const DownloadToast: React.FC<DownloadToastProps> = ({ show, text = "Downloaded !" }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className="fixed max-w-64 w-full top-1/2 left-1/2 z-[9999] -translate-x-1/2 -translate-y-1/2 px-3 py-4 rounded-xl bg-[#00B060] flex items-center gap-2 text-white font-semibold"
        >
          <FaRegCircleCheck className="w-5 h-5" />
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DownloadToast;
