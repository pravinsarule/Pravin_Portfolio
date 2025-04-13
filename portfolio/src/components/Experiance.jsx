
// import React from "react";

// const experiences = [
//   {
//     title: "Software Engineer Intern",
//     company: "Multifly Travels.",
//     date: "Feb 2025 - Present",
//     description: (
//       <>
//         Working on modern, responsive web applications using React.js, Tailwind CSS, and Node.js.
//         <p>
//           We are designing the flight booking website for users to easily book
//           flight tickets using this web application.
//         </p>
//       </>
//     ),
//   },
//   {
//     title: "Fullstack Developer",
//     company: "Acmegrade Pvt Ltd.",
//     date: "Feb 2023 - Apr 2023",
//     description: (
//       <>
//         Developed a web application for a training purpose using PHP, Bootstrap, and PHP.
//         <p>
//           I have designed the E-commerce website using HTML, CSS, JavaScript,
//           and PHP with backend.
//         </p>
//       </>
//     ),
//   },
// ];

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="w-full py-20 px-6 md:px-20 bg-gradient-to-r from-blue-400 to-purple-500 text-white"
//     >
//       {/* Border line above Experience */}
//       <div className="border-t-2 border-gray-600 mb-12"></div>

//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold mb-12 text-center">My Experience</h2>

//         <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
//           {experiences.map((experience, index) => (
//             <div
//               key={index}
//               className="w-full bg-gray-800 rounded-2xl p-6 shadow-lg transition-all duration-300 min-h-[22rem] cursor-pointer group hover:shadow-xl hover:bg-[#4C6B8C] hover:scale-105"
//             >
//               <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-300">
//                 {experience.title}
//               </h3>
//               <p className="text-sm mb-2 text-gray-400">{experience.company}</p>
//               <p className="text-sm mb-4 text-gray-300">{experience.date}</p>
//               <div className="text-base text-gray-300 group-hover:text-gray-100 space-y-1">
//                 {experience.description}
//               </div>

//               <div className="mt-4 h-1 w-full bg-transparent group-hover:bg-indigo-400 transition-all duration-300"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;



import React from "react";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Multifly Travels.",
    date: "Feb 2025 - Present",
    description: (
      <>
        Working on modern, responsive web applications using React.js, Tailwind CSS, and Node.js.
        <p>
          We are designing the flight booking website for users to easily book
          flight tickets using this web application.
        </p>
      </>
    ),
  },
  {
    title: "Fullstack Developer Intern",
    company: "Acmegrade Pvt Ltd.",
    date: "Feb 2023 - Apr 2023",
    description: (
      <>
        Developed a web application for a training purpose using PHP, Bootstrap, and PHP.
        <p>
          I have designed the E-commerce website using HTML, CSS, JavaScript,
          and PHP with backend.
        </p>
      </>
    ),
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full py-20 px-6 md:px-20 bg-gradient-to-r from-blue-400 to-purple-500 text-white"
    >
      <div className="border-t-2 border-gray-600 mb-12"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">My Experience</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              tabIndex={0} // Make it focusable for mobile simulation
              className="w-full bg-gray-800 rounded-2xl p-6 shadow-lg transition-all duration-300 min-h-[22rem] cursor-pointer group outline-none hover:shadow-xl hover:bg-gradient-to-br hover:from-[#1e3a8a] hover:to-[#2563eb] hover:scale-105 focus:bg-gradient-to-br focus:from-[#1e3a8a] focus:to-[#2563eb] active:bg-gradient-to-br active:from-[#1e3a8a] active:to-[#2563eb]"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-200 group-focus:text-indigo-200">
                {experience.title}
              </h3>
              <p className="text-sm mb-2 text-gray-400">{experience.company}</p>
              <p className="text-sm mb-4 text-gray-300">{experience.date}</p>
              <div className="text-base text-gray-300 group-hover:text-gray-100 group-focus:text-gray-100 space-y-1">
                {experience.description}
              </div>

              <div className="mt-4 h-1 w-full bg-transparent group-hover:bg-indigo-300 group-focus:bg-indigo-300 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
