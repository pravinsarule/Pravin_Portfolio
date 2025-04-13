import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react'; // Lucide icons

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Left Section - Copyright */}
          <div className="text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} Your Portfolio. All rights reserved.</p>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href="https://www.linkedin.com/in/pravin-sarule-749138213/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/pravinsarule"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition duration-300"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
