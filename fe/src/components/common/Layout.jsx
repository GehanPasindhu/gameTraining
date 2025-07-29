import React from "react";
import Navbar from "./Navbar";

function Layout({ children, classNames }) {
  return (
    <div className="min-h-screen bg-violet-900 text-white flex flex-col">
      <Navbar />

      <main className="flex-1 p-4 sm:p-6 md:p-10 md:px-20">{children}</main>
    </div>
  );
}

export default Layout;
