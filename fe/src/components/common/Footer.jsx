import React from "react";
import { paths } from "../../assets/navbarpaths";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding / Logo */}
        <div>
          <h2 className="text-4xl font-bold text-amber-400 mb-2 permanent-marker-regular">
            GameCraft
          </h2>
          <p className="text-lg text-gray-400">
            Empowering the next generation of Sri Lankan game developers.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 permanent-marker-regular uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {paths.map((paths, index) => (
              <>
                <li key={index}>
                  <a href={paths.path} className="hover:text-white transition uppercase">
                    {paths.name}
                  </a>
                </li>
              </>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl permanent-marker-regular font-semibold mb-3 uppercase">
            Contact
          </h3>
          <p className="text-sm text-gray-300">
            123 Unity Street, Colombo, Sri Lanka
          </p>
          <p className="text-sm text-gray-300 mt-1">+94 77 123 4567</p>
          <p className="text-sm text-gray-300 mt-1">info@gamecraft.lk</p>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <div className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} GameCraft. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
