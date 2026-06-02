import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-600 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-5xl mx-auto flex-col sm:flex-row items-center justify-center px-4 py-3">
        
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-center">
          Anonymous Confessions
        </h1>
        
      </div>
    </nav>
  );
};

export default Navbar;