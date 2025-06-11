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


// function App() {
//   return (
//     <>
//       <Router>
//         <div className="flex h-screen m-0 p-0">
//           {/* Sidebar - FIXED */}
//           <aside className="w-1/4 bg-[#0f172a] text-white p-6 flex flex-col items-center overflow-y-auto fixed h-screen">
//             <img src="jeni.jpeg" className="w-38 h-38 rounded-full border-8 border-gray-600" />
//             <p className="py-4 font-bold text-2xl">Jenifer V</p>

//             <div className='py-6 flex flex-row'>
//               <img src='home.jpg' className='rounded-full h-8 w-8' />
//               <Link to="/" className="mx-4 py-1 text-xl text-white mr-18">Home</Link>
//             </div>

//             <div className='py-6 flex flex-row'>
//               <img src='about.png' className='rounded-full h-8 w-8' />
//               <Link to="/About" className="mx-4 py-1 text-xl text-white mr-18">About</Link>
//             </div>

//             <div className='py-6 flex flex-row'>
//               <img src='resume.jpg' className='rounded-full h-8 w-8' />
//               <Link to="/" className="mx-4 py-1 text-xl text-white mr-18">Resume</Link>
//             </div>

//             <div className='py-6 flex flex-row'>
//               <img src='github.png' className='rounded-full h-8 w-8' />
//               <Link to="/" className="mx-4 py-1 text-xl text-white mr-18">GitHub</Link>
//             </div>

//             <div className='py-6 flex flex-row'>
//               <img src='project.png' className='rounded-full h-8 w-8' />
//               <Link to="/" className="mx-4 py-1 text-xl text-white mr-18">Project</Link>
//             </div>

//             <div className='py-6 flex flex-row'>
//               <img src='contact.jpg' className='rounded-full h-8 w-8' />
//               <Link to="/" className="mx-4 py-1 text-xl text-white mr-18">Contact</Link>
//             </div>
//           </aside>

//           {/* Main content area (Routed) */}
//           <div className="ml-[25%] w-3/4 h-screen overflow-y-auto p-6">
//           <img src="jeni.jpeg" className='h-150 w-150 opacity-12'></img>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/About" element={<About />} />
//             </Routes>
//           </div>
//         </div>
//       </Router>
//     </>
//   );
// }

// export default App;



function App() {
  return (
    <Router>
    <div className="flex h-screen">
      {/* Sidebar - stays fixed */}
      <aside className="w-1/4 bg-[#0f172a] text-white p-6 flex flex-col items-center overflow-y-auto fixed h-screen">
        <img src="jeni.jpeg" className="w-28 h-28 rounded-full border-8 border-gray-600" />
        <p className="py-4 font-bold text-2xl">Jenifer V</p>

        <SidebarLink to="/" label="Home" icon="home.jpg" />
        <SidebarLink to="/about" label="About" icon="about.png" />
        <SidebarLink to="/resume" label="Resume" icon="resume.jpg" />
        <SidebarLink to="/skills" label="Skills" icon="skills.png" />
        <SidebarLink to="https://github.com/jeni-t?tab=repositories" label="GitHub" icon="github.png" />
        <SidebarLink to="/project" label="Project" icon="project.png" />
        <SidebarLink to="/contact" label="Contact" icon="contact.jpg" />
        
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
