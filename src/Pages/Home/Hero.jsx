"use client"; // Mark the component as a client-side component

import React, { useEffect } from "react";
import Typed from "typed.js"; // Import Typed.js
import Image from "next/image";
import Profile from "./../Images/profile.png"; // Ensure the correct relative path
import PhoneIcon from "@mui/icons-material/Phone"; // MUI Phone icon
import MailIcon from "@mui/icons-material/Mail"; // MUI Mail icon
import { Icon } from "@iconify/react"; // Import Iconify icon component

const Hero = () => {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(".typed-text", {
      strings: ["Frontend Developer", "React Developer", "Next.js Developer"], // Text to type
      typeSpeed: 70, // Speed of typing
      backSpeed: 50, // Speed of deleting
      backDelay: 1500, // Delay before deleting
      startDelay: 500, // Initial delay before typing starts
      loop: true, // Infinite loop
    });

    // Cleanup Typed.js instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-zinc-950 text-white px-6 lg:px-16 lg:py-16">
      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
        <div className="flex flex-wrap gap-4 mb-4">
          {/* MUI Icons for phone and email */}
          <p className="flex items-center gap-2 p-2 text-yellow-400">
            <PhoneIcon /> +923045199010
          </p>
          <p className="flex items-center gap-2 p-2 text-yellow-400">
            <MailIcon /> ijazierpu@gmail.com
          </p>

        </div>
        <p className="text-lg text-gray-400">Hi, My Name is</p>
        <h1 className="text-5xl sm:text-6xl font-extrabold mt-2 text-white">
          Abdul Jaleel
        </h1>
        <h2 className="text-2xl sm:text-3xl text-orange-500 mt-4 font-semibold">
          <span className="typed-text"></span>
        </h2>
        <p className="text-gray-300 mt-6 max-w-xl leading-relaxed">
          Experienced Front-End Developer with expertise in React.js, Next.js,
          JavaScript, HTML, CSS, Bootstrap, and Tailwind CSS.
          I specialize in building dynamic, fully responsive web applications
          with modern user interfaces and delivering scalable, high-performance
          front-end solutions.
        </p>
        <a
          href="/path/to/cv.pdf"
          download
          className="mt-8 px-8 py-3 bg-orange-500 text-white font-medium text-lg rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300"
        >
          Download CV
        </a>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex items-center justify-center">
        <Image
          src={Profile}
          alt="A professional portrait of Abdul Jaleel"
          width={320}
          height={320}
          className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
