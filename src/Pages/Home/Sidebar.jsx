"use client";
import React, { useState } from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar for Desktop */}
      <div className="hidden lg:flex flex-col w-56 h-screen bg-gradient-to-b from-[#0c0c14] via-[#1a1a22] to-[#0c0c14] text-white sticky top-0">
        <div className="text-2xl font-bold mb-10 px-6 py-4">AJ.</div>
        <nav className="space-y-4 w-full">
          <Link
            href="/"
            className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-800 hover:text-white rounded-md"
          >
            <HomeIcon />
            <span>Home</span>
          </Link>

          <Link
            href="#biography"
            className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-800 hover:text-white rounded-md"
          >
            <PersonIcon />
            <span>About</span>
          </Link>

          <Link
            href="#skills"
            className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-800 hover:text-white rounded-md"
          >
            <BuildIcon />
            <span>Skills</span>
          </Link>

          <Link
            href="#certificates"
            className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-800 hover:text-white rounded-md"
          >
            <SchoolIcon />
            <span>Certificates</span>
          </Link>

          <Link
            href="#education-skills"
            className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-800 hover:text-white rounded-md"
          >
            <SchoolIcon />
            <span>Education</span>
          </Link>

          <Link
            href="#projects"
            className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-800 hover:text-white rounded-md"
          >
            <WorkIcon />
            <span>Projects</span>
          </Link>

          <Link
            href="#contact"
            className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-800 hover:text-white rounded-md"
          >
            <EmailIcon />
            <span>Contact</span>
          </Link>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden flex-1">
        {/* Mobile Menu Icon */}
        <div className="p-4 bg-gray-800 text-end sticky top-0 z-50">
        <div className="flex flex-wrap gap-4">
        <p>+923045199010

        </p>
        <p>ijazierpu@gmail.com</p>
      </div>
          <MenuIcon
            onClick={toggleSidebar}
            className="text-white cursor-pointer"
          />
        </div>

        {/* Sidebar Menu */}
        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 w-56 h-screen bg-gradient-to-b from-[#0c0c14] via-[#1a1a22] to-[#0c0c14] text-white transition-transform transform z-40`}
        >
          
          {/* Close Icon */}
          <div className="p-4 text-right">
            
            <CloseIcon
              onClick={toggleSidebar}
              className="text-white cursor-pointer"
            />
          </div>

          <div className="text-2xl font-bold mb-10 px-6">AJ.</div>
          <nav className="space-y-4 w-full">
            <Link
              href="/"
              className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-800 hover:text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <HomeIcon />
              <span>Home</span>
            </Link>

            <Link
              href="#biography"
              className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-800 hover:text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <PersonIcon />
              <span>About</span>
            </Link>

            <Link
              href="#skills"
              className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-800 hover:text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <BuildIcon />
              <span>Skills</span>
            </Link>

            <Link
              href="#certificates"
              className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-800 hover:text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <SchoolIcon />
              <span>Certificates</span>
            </Link>

            <Link
              href="#education-skills"
              className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-800 hover:text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <SchoolIcon />
              <span>Education</span>
            </Link>

            <Link
              href="#projects"
              className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-800 hover:text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <WorkIcon />
              <span>Projects</span>
            </Link>

            <Link
              href="#contact"
              className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-800 hover:text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <EmailIcon />
              <span>Contact</span>
            </Link>
          </nav>
        </div>

        {/* Mobile Overlay */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } fixed inset-0 bg-black bg-opacity-50 z-30`}
          onClick={toggleSidebar}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
