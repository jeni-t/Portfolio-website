// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

//import { Link } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Skills from "./Skills"
import Project from "./Project"
import Contact from "./Contact"
import girlImage from '../public/jeni.jpeg';
import home from '../public/home.jpg';
import about from '../public/about.png';
import resume from '../public/resume.jpg';
import skills from '../public/skills.png';
import github from '../public/github.png';
import project from '../public/project.png';
import contact from '../public/contact.jpg';

function App() {
  return (
    <Router>
    <div className="flex h-screen">
      {/* Sidebar - stays fixed */}
      <aside className="w-1/4 bg-[#0f172a] text-white p-6 flex flex-col items-center overflow-y-auto fixed h-screen">
        <img src={girlImage} className="w-28 h-28 rounded-full border-8 border-gray-600" />
        <p className="py-4 font-bold text-2xl">Jenifer V</p>

        <SidebarLink to="/" label="Home" icon={home} />
        <SidebarLink to="/about" label="About" icon={about} />
        <SidebarLink to="/resume" label="Resume" icon={resume} />
        <SidebarLink to="/skills" label="Skills" icon={skills} />
        <SidebarLink to="https://github.com/jeni-t?tab=repositories" target="_blank" rel="noopener noreferrer" label="GitHub" icon={github} />
        <SidebarLink to="/project" label="Project" icon={project} />
        <SidebarLink to="/contact" label="Contact" icon={contact} />
        
      </aside>

      {/* Main content area - scrollable */}
      <main className="ml-[25%] w-3/4 overflow-y-auto">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Skills" element={<Skills />} />
            </Routes>
      </main>
    </div>
    </Router>
  );
}

const SidebarLink = ({ to, label, icon }) => (
  <div className="py-4 flex flex-row items-center w-full">
    <img src={icon} className="rounded-full h-8 w-8" />
    <Link to={to} className="mx-4 py-1 text-xl text-white">{label}</Link>
  </div>
);

export default App;
