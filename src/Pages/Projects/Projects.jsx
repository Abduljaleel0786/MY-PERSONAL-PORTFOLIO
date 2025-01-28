import React from 'react';
import Image from 'next/image';
import FoodPanda from '../Images/foodpanda.png';
import FoodDelivery from '../Images/fooddelivery.png';
import OrganicFood from '../Images/organicfood.png';
import Cartzilla from '../Images/cartzilla.png';
import Grocery from '../Images/grogerry.png';
import Coaching from '../Images/coaching.png';

const projects = [
    {
        title: 'Food Panda Clone',
        description:
            'Developed a Food Panda clone using React, Material-UI (MUI), and Bootstrap. The project includes features such as dynamic add-to-cart functionality, user authentication with login/signup forms, and seamless data management using local storage. The design is fully responsive, ensuring compatibility across devices, and provides a modern, user-friendly interface.',
        technologies: ['React', 'MUI', 'Bootstrap', 'JavaScript', 'Local Storage', 'Axios', 'React Hooks', 'Redux', 'React Router'],
        image: FoodPanda,
        liveLink: 'https://foodpandaclone-rho.vercel.app/',
    },
    {
        title: 'CARTZILLA WEBSITE',
        description:
            'Developed the cartzilla website using HTML5, Bootstrap 5, and JavaScript, featuring dynamic add-to-cart functionality and a login/signup system utilizing local storage.',
        technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Local Storage'],
        image: Cartzilla,
        liveLink: 'https://capistone-project-3--three.vercel.app/sign-up.html',
    },
    {
        title: 'GROCERY VEGGIE WEBSITE',
        description:
            'Developed a multi-page website using HTML5, CSS3, and Bootstrap 5. Ensured full responsiveness across devices and added hover effects on buttons and icons for enhanced interactivity.',
        technologies: ['HTML5', 'CSS3', 'Bootstrap'],
        image: Grocery,
        liveLink: 'https://capistone-project-2-teal.vercel.app/',
    },
    {
        title: 'ONLINE COACHING WEBSITE',
        description:
            'Dedicated over 5 days to creating a responsive home page using HTML5, CSS3, and Bootstrap 5. Ensured the design adapts to various devices, incorporating a grid system and hover effects on buttons.',
        technologies: ['HTML5', 'CSS3', 'Bootstrap'],
        image: Coaching,
        liveLink: 'https://coaching-website-lyart.vercel.app/',
    },
    {
        title: 'Food Delivery',
        description:
            'Recreated a Figma design using HTML5 and CSS3, focusing on detailed replication of complex UI elements and layouts. Incorporated hover effects on the navbar and a grid system for the cards, ensuring a precise match to the original design.',
        technologies: ['HTML5', 'CSS3', 'Bootstrap'],
        image: FoodDelivery,
        liveLink: 'https://food-delivery-umber-six.vercel.app/',
    },
    {
        title: 'Organic Food',
        description:
            'Developed an organic food website using HTML5 and CSS3, featuring PC responsiveness, hover effects, and relative and absolute positioning for layout precision.',
        technologies: ['HTML5', 'CSS3'],
        image: OrganicFood,
        liveLink: 'https://organic-food-nu.vercel.app/',
    },
];


const ProjectCard = ({ title, description, technologies, image, liveLink }) => {
    return (
        <div className="flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden group  duration-300 hover:scale-105 hover:shadow-2xl">
            {/* Image Section */}
            <div className="relative w-full h-60">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300"
                />
                {/* Live Button on Hover over Image */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600"
                    >
                        Live Demo
                    </a>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-4">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-gray-300 mt-2 line-clamp-3">{description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-700 text-white text-sm px-2 py-1 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};



const Projects = () => {
    return (
        <div className="bg-gray-900 min-h-screen p-8">
            <h1 className="text-4xl font-bold text-white mb-8">My Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;

