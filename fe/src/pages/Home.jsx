import React, { useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import InfiniteSlider from "../components/common/InfiniteSlider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { fetchCourses } from "../utils/api";
import Footer from "../components/common/Footer";

function Home() {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    fetchCourses()
      .then((res) => setCourses(res.data))
      .catch((err) => console.error("Error", err));
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
    <div className="min-h-screen bg-black text-white flex flex-col">
      <section className="relative h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white px-6 md:px-20 overflow-hidden -mx-20">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        <Navbar classNames={"!bg-transparent z-10 relative"} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-5xl mx-auto h-full flex flex-col justify-center items-center text-center relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Level Up Your Game Development Journey
          </h1>
          <p className="text-lg md:text-xl text-amber-10 mb-8">
            Join Sri Lanka’s premier game development training center to learn
            Unity, Unreal Engine, Game Design, and 2D/3D Art — from scratch to
            pro.
          </p>
          <Link to="/courses">
            <button className="bg-amber-400 hover:bg-amber-300 text-violet-900 font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 cursor-pointer">
              Explore Courses
            </button>
          </Link>
        </motion.div>

        <img
          src="/images/gamepad-fade.jpg"
          alt="Gamepad"
          className="absolute bottom-0 right-0 w-full h-full object-cover opacity-40 pointer-events-none z-0"
        />
      </section>

      <InfiniteSlider />

      <main className="flex-1 p-4 sm:p-6 md:p-10 md:px-20">
        <section className="py-16 mt-5 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white px-6 md:px-20 text-center rounded-4xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl uppercase font-bold mb-6 permanent-marker-regular">
              Welcome to GameForge Training Center
            </h2>
            <p className="text-lg leading-relaxed text-amber-100">
              We’re not just a training center – we’re a launchpad for game
              developers, designers, and artists. Our curriculum combines theory
              with practical, project-based learning. Whether you’re a complete
              beginner or looking to specialize, our industry-standard training
              in <span className="font-semibold text-amber-300">Unity</span>,{" "}
              <span className="font-semibold text-amber-300">
                Unreal Engine
              </span>
              ,{" "}
              <span className="font-semibold text-amber-300">Game Design</span>,
              and{" "}
              <span className="font-semibold text-amber-300">2D/3D Art</span>{" "}
              will give you the tools to build immersive, creative worlds.
            </p>
          </motion.div>
        </section>

        <section className="py-20 bg-gradient-to-b  px-6 md:px-20 text-center text-white">
          <h3 className="text-5xl font-bold mb-10 text-amber-300 permanent-marker-regular">
            What We Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {courses.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-lg rounded-xl p-6 shadow-md hover:shadow-xl transition border border-violet-700"
              >
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="h-20 mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold text-amber-200 uppercase">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

    </div>

    <Footer/>
    </>
  );
}

export default Home;
