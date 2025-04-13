// import React from 'react';
// import bgVideo from '../assets/bg-video.mp4';
// import Skills from '../components/Skills'; // Import your Skills component
// import Experiance from '../components/Experiance';
// import Services from '../components/Services';
// function Home() {
//   return (
//     <>
//       {/* Home Section */}
//       <section
//         id="home"
//         className="relative w-full h-screen overflow-hidden pt-16"
//       >
//         {/* Background Video */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         >
//           <source src={bgVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
  
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-purple-900 opacity-80 z-10" />
  
//         {/* Content */}
//         <div className="relative z-20 flex items-center justify-start h-full text-left px-6 md:px-20">
//           <div className="text-white max-w-3xl">
//             <h2 className="text-lg md:text-xl text-blue-300 mb-2 tracking-wide">
//               Hi, I’m <span className="text-yellow-400 font-semibold">Pravin</span> from <span className="text-pink-400">India</span>
//             </h2>
  
//             <h1 className="text-xl md:text-4xl font-extrabold mb-4 leading-tight">
//               I’m a <br />
//               <span className="text-green-200 animate-pulse drop-shadow-lg">
//                 Full Stack Developer
//               </span>
//             </h1>
  
//             <p className="text-sm md:text-lg text-indigo-200 mt-2 mb-6">
//               I love building modern, responsive, and fast web applications.
//             </p>
  
//             <a
//               href="#contact"
//               className="inline-block px-6 py-3 bg-blue-400 text-black font-semibold rounded-full shadow-md hover:bg-purple-00 hover:scale-105 transition-all duration-300"
//             >
//               Hire Me
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <Skills />

//       <Experiance />
//       <Services />
//     </>
//   );
// }

// export default Home;


import React from 'react';
import bgVideo from '../assets/bg-video.mp4';
import Skills from '../components/Skills';
import Experiance from '../components/Experiance';
import Services from '../components/Services';

function Home() {
  return (
    <>
      {/* Home Section */}
      <section
        id="home"
        className="relative w-full min-h-screen overflow-hidden pt-20"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-purple-900 opacity-80 z-10" />

        {/* Content */}
        <div className="relative z-20 flex items-start justify-start h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-32 sm:pt-40 md:pt-48">
          <div className="text-white max-w-3xl">
            <h2 className="text-sm sm:text-base md:text-lg text-blue-300 mb-2 tracking-wide">
              Hi, I’m <span className="text-red-400 font-semibold">Pravin</span> from <span className="text-pink-400">India</span>
            </h2>

            <h1 className="text-lg sm:text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
              I’m a <br />
              <span className="text-green-200 animate-pulse drop-shadow-lg">
                Full Stack Developer
              </span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-indigo-200 mt-2 mb-6 leading-relaxed">
              I love building modern, responsive, and fast web applications.
            </p>

            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-blue-400 text-black font-semibold rounded-full shadow-md hover:bg-purple-600 hover:text-white hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experiance />

      {/* Services Section */}
      <Services />
    </>
  );
}

export default Home;
