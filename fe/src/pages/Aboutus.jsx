import React from "react";
import Layout from "../components/common/Layout";
import MainTitle from "../components/common/MainTitle";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Aboutus() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Layout>
      <MainTitle title={"About us"} />
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
        className="
        mt-10
        flex flex-col-reverse md:flex-row items-center md:items-start gap-8 py-20 px-4 md:px-16 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white rounded-3xl"
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Empowering Game Creators of Tomorrow
          </h2>
          <p className="text-lg leading-relaxed">
            At{" "}
            <span className="text-amber-300 font-semibold">
              GameForge Training Center
            </span>
            , we are passionate about turning creativity into playable
            realities. Our mission is to empower the next generation of game
            developers, designers, and digital artists with hands-on training in
            the latest tools and industry practices.
            <br />
            <br />
            Whether you're an aspiring game developer or a creative visionary,
            our curated courses in{" "}
            <span className="text-amber-200 font-medium">Unity</span>,{" "}
            <span className="text-amber-200 font-medium">Unreal Engine</span>,{" "}
            <span className="text-amber-200 font-medium">Game Design</span>, and{" "}
            <span className="text-amber-200 font-medium">2D/3D Art</span> are
            built to deliver real-world skills and experience.
            <br />
            <br />
            With project-based learning, expert mentorship, and a vibrant
            creative community, we help students transform ideas into
            professional-level games.
          </p>
          <div className="mt-6">
            <span className="inline-block bg-amber-400 text-violet-900 font-semibold px-5 py-2 rounded-full shadow-md hover:bg-amber-300 transition hover:animate-bounce cursor-pointer">
              Join Us & Build the Future of Games
            </span>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/logo.png"
            alt="GameForge Logo"
            className="w-40 md:w-full drop-shadow-lg animate-pulse"
          />
        </div>
      </motion.div>
    </Layout>
  );
}

export default Aboutus;
