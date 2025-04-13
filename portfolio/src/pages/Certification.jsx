import React from 'react';
import internship from '../assets/internship.jpg';
import pythonworkshop from '../assets/python-workshop.jpg';
import sw from '../assets/sw.png';
import python from '../assets/python.png';
import problem from '../assets/problem-solving.png';
import web from '../assets/web-design.png';

const certifications = [
  {
    title: "Web Development Development",
    img: internship,
    link: "https://drive.google.com/file/d/1krQCwuCqeR1j2XL6_5iXtNewNsbsqokI/view?usp=sharing",
  },
  {
    title: "Python Workshop",
    img: pythonworkshop,
    link: "https://drive.google.com/file/d/17TaitFCACKroWmIOM0oAcFcWyNLnXVxb/view?usp=drive_link",
  },
  {
    title: "Software Engineer Intern",
    img: sw,
    link: "https://www.hackerrank.com/certificates/iframe/060a1c0b3de3",
  },
  {
    title: "Python for AI",
    img: python,
    link: "https://coursera.org/share/53b8649b267f50252359e38ddc088192",
  },
  {
    title: "Problem Solving",
    img: problem,
    link: "https://www.hackerrank.com/certificates/iframe/d94ba88f9e85",
  },
  {
    title: "Web Design",
    img: web,
    link: "https://www.freecodecamp.org/certification/fcc6e331e1e-df19-4519-a7dd-6a3c31265c5a/responsive-web-design",
  },
];

const Certification = () => {
  return (
    <section
      id="certification"
      className="min-h-screen w-full py-24 px-6 md:px-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-300 to-pink-500 bg-clip-text text-transparent">
          My Certifications
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 hover:border-pink-400 rounded-2xl overflow-hidden shadow-2xl hover:shadow-pink-300 transition-transform duration-300 transform hover:scale-[1.04] cursor-pointer"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-indigo-200 underline text-sm hover:text-white transition-colors duration-200">
                  Click to view certificate
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
