import React from 'react';
import CodeIcon from '@mui/icons-material/Code'; 

const Skills = () => {
  return (
    <div className="p-8 bg-gray-900">

      {/* Section Title */}

      <h2 className="text-start text-4xl font-extrabold text-white mb-12">What I Do?</h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Front-End Web Developer Card */}
        <div className="bg-gray-800 text-white p-6 rounded-xl shadow-xl hover:bg-blue-600 hover:shadow-2xl hover:text-white transition-all ease-in-out duration-300 transform hover:scale-105">
          <div className="flex items-center space-x-4 mb-6">
            <CodeIcon className="text-5xl text-blue-400" />
            <h3 className="text-2xl font-semibold">Front-End Web Developer</h3>
          </div>
          <p className="text-sm text-gray-300">
            As a Front-End Web Developer, I specialize in building visually appealing, fast, and responsive 
            websites using HTML, CSS, and JavaScript. With the evolution of modern front-end frameworks, I have
            adopted tools like Bootstrap and Tailwind CSS to streamline design processes. My passion lies in turning
            ideas into seamless user experiences while ensuring cross-device compatibility. I keep myself up-to-date 
            with the latest industry trends to provide cutting-edge solutions that cater to user needs. Whether it's
            developing interactive web components or implementing clean code, I strive for perfection in every project.
          </p>
        </div>

        {/* React.js Developer Card */}

        <div className="bg-gray-800 text-white p-6 rounded-xl shadow-xl hover:bg-green-600 hover:shadow-2xl hover:text-white transition-all ease-in-out duration-300 transform hover:scale-105">
          <div className="flex items-center space-x-4 mb-6">
            <CodeIcon className="text-5xl text-green-400" />
            <h3 className="text-2xl font-semibold">React.js Developer</h3>
          </div>
          <p className="text-sm text-gray-300">
            As a React.js Developer, I focus on creating dynamic and responsive user interfaces 
            using the power of React. I have experience in building reusable components, optimizing 
            performance, and managing state effectively using tools like Redux and React Context. My
            work revolves around creating engaging applications with a focus on performance and scalability. 
            I aim to develop modular, maintainable code that can easily scale with growing user requirements. With React,
            I ensure the app's UI is smooth and interactive, offering a seamless user experience. I also integrate third-party
            libraries and APIs to bring applications to life.
          </p>
        </div>

        {/* Next.js Developer Card */}

        <div className="bg-gray-800 text-white p-6 rounded-xl shadow-xl hover:bg-indigo-600 hover:shadow-2xl hover:text-white transition-all ease-in-out duration-300 transform hover:scale-105">
          <div className="flex items-center space-x-4 mb-6">
            <CodeIcon className="text-5xl text-indigo-400" />
            <h3 className="text-2xl font-semibold">Next.js Developer</h3>
          </div>
          <p className="text-sm text-gray-300">
            In my role as a Next.js Developer, I specialize in building optimized, server-side rendered 
            applications to improve SEO and performance. Next.js has been my framework of choice for creating
            fast and efficient web applications, thanks to its built-in server-side rendering (SSR) and static
            site generation (SSG). I use Next.js to develop full-stack applications, leveraging its API routes and 
            seamless integration with databases. From dynamic content rendering to generating SEO-friendly pages, my 
            goal is to build scalable and performance-driven websites. I continuously focus on improving the page load
            speed and ensuring the application is SEO-optimized for the best user experience and visibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
