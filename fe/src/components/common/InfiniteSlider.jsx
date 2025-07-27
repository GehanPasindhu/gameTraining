import React from "react";

import { motion } from "framer-motion";
import { slidernames } from "../../assets/Slidernames";

function InfiniteSlider() {
  const duplicatedTopics = [
    ...slidernames,
    ...slidernames,
    ...slidernames,
    ...slidernames,
    ...slidernames,
    ...slidernames,
  ];

  return (
<div className="-mx-10 bg-black w-screen overflow-hidden whitespace-nowrap py-4">
      <motion.div
        className="inline-flex space-x-10 text-white text-lg font-semibold uppercase"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
            duration: 70,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedTopics.map((topic, index) => (
          <span key={index} className="px-4 flex items-center gap-5">
            <div className="w-3 h-3 bg-red-500 rounded-full"/>
            {topic}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default InfiniteSlider;
