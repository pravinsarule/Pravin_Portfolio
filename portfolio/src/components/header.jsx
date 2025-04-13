

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = ['Home', 'About', 'Project', 'Certification', 'Contact'];

//   return (
//     <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50 shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold">
//           <Link to="/"> Pravin</Link>
//         </h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6">
//           {navItems.map((item) => (
//             <li key={item}>
//               <Link
//                 to={`/${item.toLowerCase()}`}
//                 className="hover:text-gray-300 transition duration-300"
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Icon */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden focus:outline-none"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <ul className="md:hidden bg-gray-800 text-center py-4 space-y-4">
//           {navItems.map((item) => (
//             <li key={item}>
//               <Link
//                 to={`/${item.toLowerCase()}`}
//                 className="block hover:text-gray-300 transition duration-300"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// }

// export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Project', 'Certification', 'Contact'];

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        {/* <h1 className="text-4xl font-bold ">
          <Link to="/">Pravin</Link>
        </h1> */}
        <h1 className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-md hover:scale-105 transition-transform duration-300">
  <Link to="/">P<span className="text-white">ravin</span></Link>
</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="relative inline-block hover:text-gray-300 transition duration-300 
                  after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
                  after:bg-gradient-to-r after:from-red-500 after:to-pink-500 
                  hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 text-center py-4 space-y-4">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="relative inline-block hover:text-gray-300 transition duration-300 
                  after:absolute after:left-1/2 after:translate-x-[-50%] after:-bottom-1 after:w-0 after:h-[2px] 
                  after:bg-gradient-to-r after:from-red-500 after:to-pink-500 
                  hover:after:w-full after:transition-all after:duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Header;
