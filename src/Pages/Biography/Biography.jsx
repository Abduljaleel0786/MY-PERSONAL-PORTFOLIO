import React from 'react';
import Profile from '../Images/Profile.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Biography = () => {
  const randomBorderColor = getRandomColor(); // Generate random color for border

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-800 text-white px-6 py-12">
      {/* Image Section */}
      <div className="lg:w-1/3 mt-6 lg:mt-0 flex flex-col items-center justify-center mb-8 lg:mb-0">
        <div className="relative">
          <img
            src={Profile}
            alt="Profile"
            className="w-40 h-40 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg"
            style={{ border: `4px solid ${randomBorderColor}` }} // Apply random border color
          />
          {/* LinkedIn and GitHub Icons */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-600 p-2 rounded-full hover:bg-blue-600 transition-all">
                <LinkedInIcon className="text-white text-2xl" />
              </div>
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-600 p-2 rounded-full hover:bg-gray-600 transition-all">
                <GitHubIcon className="text-white text-2xl" />
              </div>
            </a>
          </div>
        </div>
        {/* Text below the image */}
        <p className="mt-4 font-semibold text-lg text-center lg:text-left">Front End Web Developer</p>
        <p className="font-bold text-xl text-center lg:text-left">Abdul Jaleel</p>
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left text-gray-300 mt-6 lg:mt-0">
        <h1 className="text-5xl font-semibold mb-10">Biography</h1>
        <p className="mb-6 text-sm lg:text-base">
          Further, I have expanded my expertise to the backend, diving deep into the MERN stack, enabling me to build efficient server-side solutions. I thrive in collaborative settings, constantly seeking to innovate and deliver impactful solutions.
        </p>

        {/* Grid Section for Personal Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-sm lg:text-base">
          <div>
            <p><strong>Name:</strong> Abdul Jaleel</p>
            <p><strong>Age:</strong> 17 Years</p>
            <p><strong>Address:</strong> Khairpur</p>
          </div>
          <div>
            <p><strong>Phone:</strong> +923000000</p>
            <p><strong>Email:</strong> aj@gmail.com</p>
            <p><strong>Freelance:</strong> Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
