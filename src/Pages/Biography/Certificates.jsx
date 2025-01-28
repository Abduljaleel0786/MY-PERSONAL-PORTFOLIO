"use client";
import Image from "next/image";
import React, { useState } from "react";
import HTMLBASIC from "../Images/htmlbasic.png";
import CodeAplha from "../Images/codealpha.png";
import Cognorise from "../Images/cognorise.png";

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-gray-900" id="certificates">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-start text-white mb-12">
          My Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          
          {/* Certificate Card 1 */}
          <div
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer relative"
            onClick={() => openModal(Cognorise)}
          >
            <div className="h-38 w-100 flex items-center justify-center "> {/* Adjusted height */}
              <Image width={360} height={180} className="text-center pt-3"
                src={Cognorise}
                alt="Cognorise Info Tech Internship Certificate"
              
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">
                Internship Certificate
              </h3>
              <p className="text-gray-400 mt-2">Issued by Cognorise Info Tech</p>
              <p className="text-gray-300 mt-4">
                Successfully completed an internship, contributing to web
                development projects like a Todo App and a Currency Converter
                using modern technologies.
              </p>
            </div>
          </div>

          {/* Certificate Card 2 */}
          <div
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer relative"
            onClick={() => openModal(CodeAplha)}
          >
           
            <div className="h-38 w-100 flex items-center justify-center "> {/* Adjusted height */}
              <Image width={360} height={180} className="text-center pt-3"
                src={CodeAplha}
                alt="Code Alpha Internship Certificate"
                // className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">
                Front-End Internship Certificate
              </h3>
              <p className="text-gray-400 mt-2">Issued by Code Alpha</p>
              <p className="text-gray-300 mt-4">
                Recognized for successfully completing a front-end development
                internship, working on dynamic web applications using HTML, CSS,
                Bootstrap, and JavaScript.
              </p>
            </div>
          </div>

          {/* Certificate Card 3 */}
         

          <div
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer relative"
            onClick={() => openModal(HTMLBASIC)}
          >
          
            <div className="h-38 w-100 flex items-center justify-center "> {/* Adjusted height */}
               <Image width={360} height={180} className="text-center pt-3"
                src={HTMLBASIC}
                alt="HTML Basic Certificate"
               
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">
                HTML Basics Certificate
              </h3>
              <p className="text-gray-400 mt-2">Issued by XWave</p>
              <p className="text-gray-300 mt-4">
                Successfully completed the HTML Basics course, covering
                fundamental concepts like semantic HTML, forms, and structure.
              </p>
            </div>
          </div>


        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="relative">
              <button
                className="absolute top-2 right-2 text-red-500 text-3xl font-bold"
                onClick={closeModal}
              >
                &times;
              </button>
              <Image
                src={selectedImage}
                alt="Certificate"
                className="max-w-full max-h-screen object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
