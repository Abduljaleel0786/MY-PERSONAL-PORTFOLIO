
import React from 'react';
import Profile from '../Images/profile.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from "next/image";

const Biography = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-900 text-white px-6 py-12">
      {/* Image Section */}
      <div className="lg:w-1/3 mt-6 lg:mt-0 flex flex-col items-center justify-center mb-8 lg:mb-0 relative">
        {/* Profile Image with Background */}
        <div className="relative flex items-center justify-center bg-yellow-500 rounded-full w-44 h-44 lg:w-80 lg:h-80 shadow-lg">
          <Image
            width={200}
            height={200}
            src={Profile}
            alt="Profile Image"
            className="w-40 h-40 lg:w-72 lg:h-72 rounded-full object-cover  transition-all"
          />

          {/* Icons inside the image on the right side */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-600 p-2 rounded-full hover:bg-yellow-500 transition-all flex items-center justify-center">
                <LinkedInIcon className="text-gray-900 hover:text-white text-2xl" />
              </div>
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-600 p-2 rounded-full hover:bg-yellow-500 transition-all flex items-center justify-center">
                <GitHubIcon className="text-gray-900 hover:text-white text-2xl" />
              </div>
            </a>
          </div>
        </div>

        {/* Text below the image */}
        <p className="mt-6 font-semibold text-lg text-center">Front End Web Developer</p>
        <p className="font-bold text-xl text-center">Abdul Jaleel</p>
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left text-gray-300 mt-6 lg:mt-0">
        <h1 className="text-5xl font-semibold mb-8">Biography</h1>
        <p className="mb-6 text-sm lg:text-base">
          I am a passionate Front-End Web Developer with expertise in HTML, CSS, Bootstrap, JavaScript, React, Next.js, and Tailwind CSS. I specialize in designing fully responsive websites that work seamlessly across all devices. My goal is to create dynamic, engaging user experiences and to continuously evolve with the latest web development technologies. I am also experienced in collaborating in team environments to deliver high-quality solutions.
        </p>

        {/* Grid Section for Personal Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm lg:text-base">
          <div>
            <p><strong>Name:</strong> Abdul Jaleel</p>
            <p><strong>Age:</strong> 19 Years</p>
            <p><strong>Address:</strong> Khairpur Mir's</p>
          </div>
          <div>
            <p><strong>Phone:</strong> +923091375325</p>
            <p><strong>Email:</strong> abduljaleelxwave@gmail.com</p>
            <p><strong>Freelance:</strong> Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;


