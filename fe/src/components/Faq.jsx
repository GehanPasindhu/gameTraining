

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What courses do you offer?",
    answer: "We offer game development courses in Unity, Unreal Engine, Game Design, and 2D/3D Art.",
  },
  {
    question: "Do I need prior experience?",
    answer: "No prior experience is needed. We have beginner to advanced level classes.",
  },
  {
    question: "Are classes online or on-site?",
    answer: "We offer both online and on-site sessions based on your preference.",
  },
  {
    question: "How long are the courses?",
    answer: "Course durations vary between 6 to 12 weeks, depending on the topic and depth of study.",
  },
  {
    question: "Do you provide certificates?",
    answer: "Yes, we provide industry-recognized certificates upon successful completion of each course.",
  },
  {
    question: "Is there a job placement program?",
    answer: "Yes, we partner with gaming studios and tech companies to support job placement and internships for top-performing students.",
  },


];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="w-full mx-auto">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-white/30 py-4">
          <button
            onClick={() => toggle(i)}
            className="w-full text-left text-xl font-semibold focus:outline-none"
          >
            {faq.question}
          </button>

          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                key="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mt-2 text-violet-200 text-md">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default Faq;
