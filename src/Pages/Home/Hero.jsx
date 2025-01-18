"use client"; // Mark the component as a client-side component

import React, { useEffect } from "react";
import Typed from "typed.js"; // Import Typed.js
import Profile from '../Images/Profile.png'; 

const Hero = () => {
  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: [
        "Frontend Developer",
        "React Developer",
        "Next.js Developer"
      ], // Multiple strings to type sequentially
      typeSpeed: 100, 
      backSpeed: 50, 
      backDelay: 1000, 
      startDelay: 500, // Delay before typing starts
      loop: true, // Loop the typing effect
    };
    const typed = new Typed(".typed-text", options); // Apply the typing effect to the element with class .typed-text

    return () => {
      typed.destroy(); // Clean up when the component unmounts
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-gray-800 text-white px-4">
      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 px-6">
        <p className="text-lg text-gray-400">Hi, My Name is</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2">Abdul Jaleel</h1>
        <h2 className="text-xl sm:text-2xl text-orange-500 mt-2">
          <span className="typed-text font-bold"></span> {/* This will display the typed text */}
        </h2>
        <p className="text-gray-300 mt-4 max-w-xl">
          Experienced Software Engineer with a strong focus on React/Next.js, Node.js, and TypeScript. Adept at creating cutting-edge Web Applications and delivering scalable, high-performance solutions.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
          Download CV
        </button>

       
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mt-6 lg:mt-0 flex items-center justify-center">
      <image width={100} height={100} src={Profile} alt='profile'/>
        <img
          src={Profile}
          alt="Profile"
          className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg " 
        />
      </div>
    </div>
  );
};

export default Hero;
