// import React from "react";
// import { Download } from "lucide-react";
// import resume from "../assets/resume.pdf";

// const skills = [
//   { name: "HTML5", level: 95 },
//   { name: "CSS3", level: 90 },
//   { name: "JavaScript", level: 85 },
//   { name: "React.js", level: 85 },
//   { name: "Node.js", level: 80 },
//   { name: "Express.js", level: 80 },
//   { name: "MongoDB", level: 75 },
//   { name: "PostgreSQL", level: 75 },
//   { name: "Python", level: 90 },
//   { name: "PHP", level: 70 },
//   { name: "SQL", level: 85 },
//   { name: "Java", level: 70 },
// ];

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="w-full py-20 px-6 md:px-20 bg-gradient-to-r from-blue-400 to-purple-500 text-white"
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {skills.map((skill, index) => (
//             <div key={index} className="w-full">
//               <div className="flex justify-between mb-1">
//                 <span className="text-sm font-medium">{skill.name}</span>
//                 <span className="text-sm font-medium">{skill.level}%</span>
//               </div>
//               <div className="w-full bg-gray-700 rounded-full h-3">
//                 <div
//                   className="bg-indigo-500 h-3 rounded-full transition-all duration-700"
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-16">
//           <a
//             href={resume}
//             download
//             className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
//           >
//             <Download size={18} /> Download Resume
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;






import React from "react";
import { Download } from "lucide-react";
import resume from "../assets/resume.pdf";

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "PostgreSQL", level: 75 },
  { name: "SQL", level: 85 },
  { name: "Java", level: 70 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-20 px-6 md:px-20 bg-gradient-to-r from-blue-400 to-purple-500 text-white border-t-4 border-indigo-600"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-indigo-500 h-3 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
