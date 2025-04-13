// import React from "react";
// import { FaMobileAlt, FaCode, FaPencilRuler } from "react-icons/fa";

// const services = [
//   {
//     title: "Application Development",
//     icon: <FaMobileAlt size={40} className="text-indigo-500" />,
//     description:
//       "We build powerful mobile and desktop applications tailored to your business needs using the latest tech stacks.",
//   },
//   {
//     title: "Web Development",
//     icon: <FaCode size={40} className="text-indigo-500" />,
//     description:
//       "Responsive and high-performance websites using modern frameworks like React.js, Next.js, and Node.js.",
//   },
//   {
//     title: "UI/UX Design",
//     icon: <FaPencilRuler size={40} className="text-indigo-500" />,
//     description:
//       "Crafting clean, user-centric interfaces with seamless experiences to delight your users across all devices.",
//   },
// ];

// const Services = () => {
//   return (
//     <section
//       id="services"
//       className="w-full py-20 px-6 md:px-20 bg-gradient-to-r from-blue-400 to-purple-500 text-white"
//     >
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-12">My Services</h2>
//         <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               tabIndex={0}
//               className="bg-gray-900 rounded-2xl p-8 shadow-lg transition-all duration-300 cursor-pointer min-h-[18rem] flex flex-col items-center justify-start text-center hover:bg-indigo-700 focus:bg-indigo-700 active:bg-indigo-700 hover:scale-105 focus:scale-105"
//             >
//               <div className="mb-4">{service.icon}</div>
//               <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
//               <p className="text-gray-300">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import React from "react";
import { FaMobileAlt, FaCode, FaPencilRuler } from "react-icons/fa";

const services = [
  {
    title: "Application Development",
    icon: <FaMobileAlt size={40} className="text-indigo-500" />,
    description:
      "We build powerful mobile and desktop applications tailored to your business needs using the latest tech stacks.",
  },
  {
    title: "Web Development",
    icon: <FaCode size={40} className="text-indigo-500" />,
    description:
      "Responsive and high-performance websites using modern frameworks like React.js, Next.js, and Node.js.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPencilRuler size={40} className="text-indigo-500" />,
    description:
      "Crafting clean, user-centric interfaces with seamless experiences to delight your users across all devices.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-20 px-6 md:px-20 bg-gradient-to-r from-blue-400 to-purple-500 text-white"
    >
      {/* Border Line */}
      <div className="w-full border-t-2 border-black/30 mb-16"></div>

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Services</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              tabIndex={0}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg transition-all duration-300 cursor-pointer min-h-[18rem] flex flex-col items-center justify-start text-center hover:bg-indigo-700 focus:bg-indigo-700 active:bg-indigo-700 hover:scale-105 focus:scale-105"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
