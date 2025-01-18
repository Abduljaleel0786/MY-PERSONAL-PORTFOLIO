import React from 'react';
import Profile from '../Images/Profile.png';

const Biography = () => {
  return (
    <div  style={{marginLeft:'120px'}} className="flex flex-col lg:flex-row items-center justify-center h-screen bg-gray-800 text-white px-6 py-12">
      {/* Image Section */}
      <div className="lg:w-1/3 mt-6 lg:mt-0 flex flex-col items-center justify-center mb-8 lg:mb-0">
        <img
          src={Profile}
          alt="Profile"
          className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg"
        />
        {/* Text below the image */}
        <p className="mt-4 font-semibold text-lg">Front End Web Developer</p>
        <p className="font-bold text-xl">Abdul Jaleel</p>
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left text-gray-300 mt-6 lg:mt-0">
        <h1 className="text-2xl font-semibold mb-4">Biography</h1>
        <p className="mb-6">
          Further, I have expanded my expertise to the backend, diving deep into the MERN stack, enabling me to build efficient server-side solutions. I thrive in collaborative settings, constantly seeking to innovate and deliver impactful solutions.
        </p>

        {/* Grid Section for Personal Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
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
