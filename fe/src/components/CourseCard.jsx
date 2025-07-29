import React, { useEffect, useState } from "react";
import CourseModal from "./modals/CourseModal";
import RegisterModal from "./modals/RegisterModal";
import { courseVariants } from "../assets/courseVariants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function CourseCard({ course }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <div key={course.id}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        key={course.id}
        variants={courseVariants.cardVariants}
        className="rounded-xl bg-black/40 shadow-md p-6 text-white w-full transition-all"
      >
        <div
          className={`flex flex-col-reverse md:flex-row ${
            course.id % 2 === 1
              ? "md:flex-row-reverse text-left"
              : "md:flex-row text-right"
          } items-center gap-4`}
        >
          <div className="w-full md:w-1/2">
            <img
              src={course.image_url}
              alt={course.title}
              className="h-96 w-full object-cover rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2 p-10">
            <h2 className="text-4xl font-extrabold uppercase text-amber-300">
              {course.title}
            </h2>
            <p className=" mt-2 text-lg">{course.description}</p>
            <p className="text-md  mt-1 text-amber-500">
              Duration: {course.duration}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CourseCard;
