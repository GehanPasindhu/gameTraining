import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navinnerwrapper from "./Navinnerwrapper";
import { paths } from "../../assets/navbarpaths";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);



  return (
    <>
      <header className="w-full px-10 py-4 bg-violet-800 shadow-md flex justify-between items-center">
        <nav className="space-x-4 hidden sm:flex w-full justify-between">
          <img src="/images/siteLogo.png" className="" />
          <div className="flex flex-row justify-between items-center gap-10">
            {paths.map((paths, index) => (
              <Navinnerwrapper
                path={paths.path}
                name={paths.name}
                key={index}
              />
            ))}
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="cursor-pointer"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-violet-700 px-4 py-2 space-y-2 min-h-screen pt-10 absolute w-full"
          >
            <div className="flex justify-end">
              <button className="cursor-pointer" onClick={toggleMenu}>
                <img src="/images/close.png" className="w-7" />
              </button>
            </div>

            {paths.map((path, index) => (
              <a
                href={path.path}
                className="block hover:underline"
                onClick={toggleMenu}
              >
                {path.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
