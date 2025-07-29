import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children, classNames }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white flex flex-col">
      <Navbar classNames={"!bg-transparent z-10 relative"} />

      <main className="flex-1 p-4 sm:p-6 md:p-10 md:px-20">{children}</main>

    <Footer/>
    </div>
  );
}

export default Layout;
