import React from "react";

const EducationSkills = () => {
  const skills = [
    { icon: "html5", image: "/images/html.png", bgColor: "bg-red-500" },
    { icon: "css3", image: "/images/css.png", bgColor: "bg-blue-500" },
    { icon: "javascript", image: "/images/javascript.png", bgColor: "bg-yellow-500" },
    { icon: "react", image: "/images/react.png", bgColor: "bg-cyan-500" },
    { icon: "git", image: "/images/git.png", bgColor: "bg-orange-500" },
    { icon: "tailwind", image: "/images/tailwind.png", bgColor: "bg-teal-500" },
   
  ];

  return (
    <div className="bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Education & Skills</h1>
      <div className="flex flex-col md:flex-row">
        {/* Education Section */}
 
<div className="bg-gray-800 p-6 rounded-lg md:w-1/2">
  <h2 className="text-xl font-semibold">Education</h2>
  <ul className="mt-4 space-y-4">
    <li>
      <h3 className="font-medium">BS: Computer Science</h3>
      <p className="text-sm text-gray-400">Shah Abdul Latif University, Khairpur Mir's</p>
      <p className="text-sm ">(2025–Present)</p> 
    </li>
    <li>
      <h3 className="font-medium">Front-End Web Development</h3>
      <p className="text-sm text-gray-400">xWave</p>
      <p className="text-sm ">(2024–2025)</p> 
    </li>
    <li>
      <h3 className="font-medium">Intermediate</h3>
      <p className="text-sm text-gray-400">Government Boys Degree College, Pir Jo Goth</p>
      <p className="text-sm ">(2021–2023)</p> 
    </li>
    <li>
      <h3 className="font-medium">Matriculation</h3>
      <p className="text-sm text-gray-400">Shah Mardan Shah High School</p>
      <p className="text-sm ">(2011–2021)</p> 
    </li>
    <li>
      <h3 className="font-medium">Computer Course</h3>
      <p className="text-sm text-gray-400">IBA</p>
      <p className="text-sm ">(2019)</p> 
    </li>
  </ul>
</div>


        {/* Skills Section */}
        <div className="mt-8 md:mt-0 md:ml-8 flex flex-wrap justify-center items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.bgColor} rounded-full m-2 flex flex-col items-center justify-center w-24 h-24 shadow-md hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Image as Icon */}
              <img
                src={skill.image}
                alt={skill.icon}
                className="w-16 h-16 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSkills;
