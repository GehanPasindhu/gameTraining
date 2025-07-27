import React, { useState } from "react";
import Navbar from "./Navbar";

function Layout({ children }) {


  return (
    <div className="min-h-screen bg-violet-900 text-white flex flex-col">
      {/* Navbar */}
  <Navbar/>

    

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-10">{children}</main>
    </div>
  );
}

export default Layout;
