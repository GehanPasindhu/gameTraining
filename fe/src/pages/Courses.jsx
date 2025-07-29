import React, { useEffect, useState } from "react";
import { fetchCourses } from "../utils/api";
import CourseCard from "../components/CourseCard";
import Layout from "../components/common/Layout";
import MainTitle from "../components/common/MainTitle";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses()
      .then((res) => setCourses(res.data))
      .catch((err) => console.error("Error", err));
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <>
      <Layout>
        <MainTitle title={"Courses"} />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
          className="flex flex-col items-center text-center px-4 mt-16"
        >
          <p className="text-xl text-violet-100 mb-10">
            Explore hands-on courses crafted by industry experts in Unity,
            Unreal Engine, Game Design, and 2D/3D Art. Whether you're starting
            out or leveling up, there's a course here to ignite your game
            development journey.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:px-30 w-full">
            {courses?.map((course) => (
              <CourseCard course={course} key={course.id} />
            ))}
          </div>
        </motion.div>
      </Layout>
    </>
  );
}

export default Courses;
