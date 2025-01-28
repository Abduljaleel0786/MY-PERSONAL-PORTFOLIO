// import Sidebar from "./Sidebar";
// import Hero from "./Hero";
// import Biography from "../Biography/Biography";
// import Skills from "../Biography/Skills";
// import Certificates from "../Biography/Certificates";
// import Contact from "./Contant/Contact";
// import EducationSkills from "../EducationSkills/EducationSkills";
// import Projects from "../Projects/Projects";

// export default function Home() {
//   return (
//     <div className="flex flex-col lg:flex-row sticky-top">
//       <Sidebar />
//       <div className="flex-1 bg-gray-900 text-white">

//          <div id="hero">
//           <Hero />
//         </div>

//          <div id="biography">
//           <Biography />
//         </div> 

//          <div id="skills">
//           <Skills />
//         </div>  

//          <div id="certificates">
//           <Certificates />
//         </div>  

//          <div id="education-skills">
//           <EducationSkills />
//         </div> 
        
//          <div id="projects">
//           <Projects />
//         </div> 

//          <div id="contact">
//           <Contact />
//         </div> 

//       </div>
//     </div>
//   );
// }


import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Biography from "../Biography/Biography";
import Skills from "../Biography/Skills";
import Certificates from "../Biography/Certificates";
import Contact from "./Contant/Contact";
import EducationSkills from "../EducationSkills/EducationSkills";
import Projects from "../Projects/Projects";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row sticky-top">
      <Sidebar />
      <div className="flex-1 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <div id="hero">
          <Hero />
        </div>

        <div id="biography">
          <Biography />
        </div> 

        <div id="skills">
          <Skills />
        </div>  

        <div id="certificates">
          <Certificates />
        </div>  

        <div id="education-skills">
          <EducationSkills />
        </div> 
        
        <div id="projects">
          <Projects />
        </div> 

        <div id="contact">
          <Contact />
        </div> 
      </div>
    </div>
  );
}
