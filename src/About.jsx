import ai_girl from '../public/ai-girl.jpg';

const About = () =>{
return(
<>
<div className="py-10 bg-gray-200 w-full">
    <p className="text-3xl font-bold text-center">About</p>
    <p className="py-6">Hi I am jenifer. 3d software developer I have 3 years experience in 3d software development. 
        Babylonjs framework. Currently i am working in dental RND project.  I have 3 years experience in Javascript,  
        Html5, Css, TailwindCss,  and python 2 years experience  in Php, Mysql, and 1 year experience in 
        Reactjs, nodejs, mongodb i have knowledge of c, c++,</p>
        <div className="flex flex-row gap-12">
<div className="flex-shrink-0">
          <img
            src={ai_girl}
            alt="Jenifer"
            className="w-[300px] h-[350px] border-white border-4 object-cover rounded shadow-md"
          />
        </div>
<div className="">
<p className="text-xl font-bold text-center">3D Web Developer & Full Stack Developer</p>
<p className="my-4">Hi I am jenifer. 3d software developer I have 3 years experience in 3d software development. 
        Babylonjs framework. Currently i am working in dental RND project</p>
        <div className="grid grid-cols-2">
            <p className="py-4"><span className="font-bold text-lg mx-2">🎂 Date of Birth:</span>12/06/2000</p>
            <p className="py-4"><span className="font-bold text-lg mx-2">🎯 Age:</span>25</p>
            <p className="py-4"><span className="font-bold text-lg mx-2">🎓 Degree:</span>B.com(CA)</p>
            <p className="py-4"><span className="font-bold text-lg mx-2">📞 Phone:</span>+91 8778089525</p>
            <p className="py-4"><span className="font-bold text-lg mx-2">✉️ Email:</span>jenivijay19@gmail.com</p>
            <p className="py-4"><span className="font-bold text-lg mx-2">📍 City:</span>Rajapalayam</p>
            <p className="py-4"><span className="font-bold text-lg mx-2">🎯 Status:</span>Married</p>
            <p className="py-4"><span className="font-bold text-lg mx-2">💼 Experience:</span>3</p>
        </div>
</div>
</div>
<p className="my-4">Hi I am working Neural hive tech Pvt Ltd. as 3d software developer. It is a dental software. User
know the results in the demo session. and compare their before and after results in before the treatment</p>
</div>
</>
)
}

export default About


// const About = () => {
//   return (
//     <div className="py-10 bg-pink-100 w-full px-8">
//       <h2 className="text-3xl font-bold mb-6">About</h2>
//       <p className="mb-8 text-gray-700">
//         Hi I am Jenifer. 3D software developer with 3 years of experience in 3D software development using the BabylonJS framework. 
//         Currently working on a dental R&D project. I also have 3 years of experience in JavaScript, HTML5, CSS, TailwindCSS, and Python; 
//         2 years in PHP and MySQL; and 1 year in ReactJS, NodeJS, and MongoDB. I have additional knowledge of C and C++.
//       </p>

//       <div className="flex flex-col md:flex-row gap-10">
//         {/* Left Image */}
//         <div className="flex-shrink-0">
//           <img
//             src="/jeni.jpeg"
//             alt="Jenifer"
//             className="w-[300px] h-[350px] object-cover rounded shadow-md"
//           />
//         </div>

//         {/* Right Details */}
//         <div className="flex-1">
//           <h3 className="text-2xl font-bold text-gray-800 mb-2">
//             3D Web Developer & Full Stack Developer
//           </h3>
//           <p className="text-gray-700 mb-6">
//             I specialize in BabylonJS 3D frameworks and full stack development. My current work focuses on dental R&D innovation.
//           </p>

//           <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-gray-800 text-sm">
//             <p><span className="font-semibold">🎂 Birthday:</span> 1 May 1995</p>
//             <p><span className="font-semibold">🎯 Age:</span> 30</p>
//             <p><span className="font-semibold">🌐 Website:</span> www.jenidev.com</p>
//             <p><span className="font-semibold">🎓 Degree:</span> Master</p>
//             <p><span className="font-semibold">📞 Phone:</span> +123 456 7890</p>
//             <p><span className="font-semibold">✉️ Email:</span> jenifer@example.com</p>
//             <p><span className="font-semibold">📍 City:</span> New York, USA</p>
//             <p><span className="font-semibold">💼 Freelance:</span> Available</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


// const About = () => {
//   return (
//     <div className="py-16 px-6 md:px-20 bg-[#0f172a] w-full text-white">
//       <h2 className="text-4xl font-extrabold text-center text-cyan-400 mb-8 border-b-4 border-cyan-500 inline-block">
//         About Me
//       </h2>

//       <p className="text-slate-300 text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
//         Hi, I’m Jenifer — a passionate 3D Web Developer with 3 years of experience in building interactive applications using BabylonJS.
//         Currently working on innovative dental R&D projects, I specialize in full stack web development and immersive 3D technology.
//       </p>

//       <div className="flex flex-col md:flex-row items-start gap-10">
//         {/* Left: Profile Image */}
//         <div className="flex-shrink-0 shadow-2xl rounded-lg overflow-hidden">
//           <img
//             src="/ai-girl.jpg"
//             alt="Jenifer"
//             className="w-[300px] h-[350px] object-cover border-4 border-cyan-500"
//           />
//         </div>

//         {/* Right: Info Card */}
//         <div className="flex-1 bg-[#1e293b] p-8 rounded-xl shadow-lg border border-cyan-700">
//           <h3 className="text-2xl font-bold text-cyan-300 mb-4">
//             3D Web Developer & Full Stack Developer
//           </h3>

//           <p className="text-slate-300 mb-6">
//             I bring hands-on experience with BabylonJS, JavaScript, HTML5, CSS, TailwindCSS, Python, PHP, MySQL, ReactJS, NodeJS, and MongoDB.
//             I also have foundational knowledge in C and C++. I love creating immersive digital experiences and solving real-world problems.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-slate-200 text-sm">
//             <p><span className="text-cyan-400 font-medium">🎂 Date of Birth:</span> 12/06/2000</p>
//             <p><span className="text-cyan-400 font-medium">🎯 Age:</span> 25</p>
//             <p><span className="text-cyan-400 font-medium">🎓 Degree:</span> B.Com (CA)</p>
//             <p><span className="text-cyan-400 font-medium">📞 Phone:</span> +91 8778089525</p>
//             <p><span className="text-cyan-400 font-medium">✉️ Email:</span> jenivijay19@gmail.com</p>
//             <p><span className="text-cyan-400 font-medium">📍 City:</span> Rajapalayam</p>
//             <p><span className="text-cyan-400 font-medium">🎯 Status:</span> Married</p>
//             <p><span className="text-cyan-400 font-medium">💼 Experience:</span> 3 Years</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
