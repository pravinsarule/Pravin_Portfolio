import React from "react";

const projects = [
  {
    title: "Flight Booking Website",
    description:
      "A modern flight booking platform using Amadeus API, React, and Node.js with real-time search, filters, and secure booking.",
    tech: "React, Node.js, Tailwind, PostgreSQL",
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Fully functional ecommerce website with cart, payment gateway, and admin panel. Designed with HTML, CSS, JS, and PHP.",
    tech: "PHP, Bootstrap, JS",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website with responsive design, animated transitions, and contact form integrated with Google Sheets.",
    tech: "React, Tailwind CSS",
    link: "https://pravinportfoliosite.netlify.app/",
  },
  {
    title: "Plant Disease Detection",
    description:
      "A machine learning-based web app to detect plant diseases using leaf images. It predicts the condition and suggests treatment steps.",
    tech: "Python, TensorFlow, Flask, HTML/CSS",
    link: "https://plantdeseasedetection-m3xsbnkorsm9urv4wcfm5f.streamlit.app/",
  },
  {
    title: "Hospital Management System",
    description:
      "A web-based hospital management system for managing patients, appointments, doctors, and medical records efficiently.",
    tech: "PHP, MySQL, HTML, CSS, JavaScript",
    link: "#",
  },
  {
    title: "Eye Blink Detection System",
    description:
      "A real-time computer vision application to detect eye blinks using webcam feed. Useful for drowsiness detection and accessibility applications.",
    tech: "Python, OpenCV, Dlib, Mediapipe",
    link: "https://eyeblibkusingopencv-i5iqiuqctfj6xbsr6yejzp.streamlit.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full py-24 px-6 md:px-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My Projects
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-indigo-400 hover:scale-[1.03] cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
              <p className="text-sm text-gray-300 mb-4">
                <strong>Tech Used:</strong> {project.tech}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg transition-all"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
