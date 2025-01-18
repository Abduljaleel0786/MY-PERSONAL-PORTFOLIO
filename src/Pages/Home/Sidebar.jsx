"use client"; 
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu"; // Icon to open the sidebar on mobile
import CloseIcon from "@mui/icons-material/Close"; // Icon to close the sidebar

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track the sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Mobile Menu Icon */}
      <div className="lg:hidden p-4">
        <MenuIcon onClick={toggleSidebar} className="text-black" />
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-30 h-screen bg-gray-900 text-white transition-transform transform lg:relative lg:sticky lg:top-0 lg:h-full lg:block lg:translate-x-0`}
      >
        {/* Close button for mobile */}
        <div className="lg:hidden p-4 text-right">
          <CloseIcon onClick={toggleSidebar} className="text-white" />
        </div>

        <div className="text-2xl font-bold mb-10 px-6">AJ.</div>

        <nav className="space-y-4 w-full ">
          <a
            href="#"
            className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
          >
            <HomeIcon />
            <span>Home</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
          >
            <PersonIcon />
            <span>About</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
          >
            <DescriptionIcon />
            <span>Resume</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
          >
            <PhoneIcon />
            <span>Contact</span>
          </a>
        </nav>
      </div>

      {/* Overlay when sidebar is open (for mobile) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
};

export default Sidebar;





// "use client"; 
// import React, { useState } from "react";
// import HomeIcon from "@mui/icons-material/Home";
// import PersonIcon from "@mui/icons-material/Person";
// import DescriptionIcon from "@mui/icons-material/Description";
// import PhoneIcon from "@mui/icons-material/Phone";
// import MenuIcon from "@mui/icons-material/Menu"; // Icon to open the sidebar on mobile
// import CloseIcon from "@mui/icons-material/Close"; // Icon to close the sidebar

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false); // State to track the sidebar visibility

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       {/* Mobile Menu Icon */}
//       <div className="lg:hidden p-4">
//         <MenuIcon onClick={toggleSidebar} className="text-black" />
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } fixed top-0 left-0 w-64 h-screen bg-gray-900 text-white transition-transform transform lg:relative lg:translate-x-0 lg:w-26`}
//       >
//         {/* Close button for mobile */}
//         <div className="lg:hidden p-4 text-right">
//           <CloseIcon onClick={toggleSidebar} className="text-white" />
//         </div>

//         <div className="text-2xl font-bold mb-10 px-6">AJ.</div>

//         <nav className="space-y-4 w-full">
//           <a
//             href="#"
//             className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
//           >
//             <HomeIcon />
//             <span>Home</span>
//           </a>
//           <a
//             href="#"
//             className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
//           >
//             <PersonIcon />
//             <span>About</span>
//           </a>
//           <a
//             href="#"
//             className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
//           >
//             <DescriptionIcon />
//             <span>Resume</span>
//           </a>
//           <a
//             href="#"
//             className="flex items-center space-x-3 px-4 py-2 w-full text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
//           >
//             <PhoneIcon />
//             <span>Contact</span>
//           </a>
//         </nav>
//       </div>

//       {/* Overlay when sidebar is open (for mobile) */}
//       <div
//         className={`${
//           isOpen ? "block" : "hidden"
//         } fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden`}
//         onClick={toggleSidebar}
//       ></div>
//     </div>
//   );
// };

// export default Sidebar;

