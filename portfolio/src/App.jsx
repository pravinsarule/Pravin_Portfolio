import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Certification from './pages/Certification';
import Header from './components/header'; // Make sure the filename matches
import Footer from './components/footer';
function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-100">
        {/* Header */}
        <Header />

        {/* Routes */}
        <Routes>
        <Route path="/" element={<Home key="home" />} />
        <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certification" element={<Certification />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
