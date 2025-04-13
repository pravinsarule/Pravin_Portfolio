import React from 'react';
import myImage from '../assets/pravin.jpg'; // Replace with your actual image path

function About() {
  return (
    <section
      id="about"
      className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white flex items-center justify-center"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={myImage}
            alt="Pravin"
            className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* About Content */}
        <div className="max-w-xl text-lg text-white text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="mb-4">
            Hi, I'm <span className="font-bold text-white">Pravin</span>, a passionate{' '}
            <span className="text-yellow-300 font-semibold">Full Stack Developer</span> crafting modern
            web applications with clean code and sleek UI.
          </p>
          <p className="mb-4">
            I specialize in <strong>React.js</strong> and <strong>Node.js</strong> with experience in
            both frontend and backend development.
          </p>
          <p className="mb-4">
            I'm confident working with <strong>PostgreSQL</strong> and <strong>MongoDB</strong> to
            build scalable, secure, and efficient data-driven applications.
          </p>
          <p>
            I love learning new tech, collaborating with teams, and bringing ideas to life on the web.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
