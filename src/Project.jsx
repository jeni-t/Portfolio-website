import { Link } from "react-router-dom";
import React, { useState } from "react";
import memory_game from '../public/memory_game.jpeg';
import User_Authentication from '../public/User-Authentication.jpg';
import recipe from '../public/recipe.jpg';
import movie from '../public/movie.jpeg';
import e_shopping from '../public/e-shopping.jpg';
import shopping from '../public/shopping.jpg';
import Budget from '../public/Budget.jpg';
import flight_booking from '../public/flight-booking.jpg';
import forget_password from '../public/forget-password.jpg';
import Coaching from '../public/Coaching.jpg';
import tour from '../public/tour.jpeg';
import elevator from '../public/elevator.jpg';


const Project =()=>{
   const [showMoreFlight, setShowMoreFlight] = useState(false);
return(
    <div className="grid grid-cols-3">
      
       <div className="py-10">
  <p className="text-center font-bold text-xl">Elevator Project</p>

  <a href="https://fascinating-madeleine-cd0295.netlify.app/" target="_blank" className="relative group inline-block mx-8 my-4">
    {/* Image */}
    <img
      src={elevator}
      className="h-70 w-70 border-6 border-gray-700 transition-opacity duration-300 group-hover:opacity-50"
    />

    {/* Overlay text */}
    <span className="absolute inset-0 flex items-center justify-center text-black text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Deployed URL
    </span>
  </a>

  <div className="grid grid-cols-2 gap-4 my-2 w-70 mx-8">
    <Link
      to="https://github.com/jeni-t/elevator"
      target="_blank"
      className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center"
    >
      Frontend Git 
    </Link>
    <Link
      to="https://github.com/jeni-t/elevator_Mern_nodejs"
      target="_blank"
      className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center"
    >
      Backend Git
    </Link>
  </div>
   {/* {showMoreFlight && (
          <div className="mt-4">
  <h1><span className="text-[#0f172a] mr-10 mx-30 font-bold">Description:</span>
  <br></br><div className="mx-10 font-medium">Flight booking user can book flight and track flight status then user can select seat. 
    user can do online secure payment. View the booking history and get the live notification then get email and message 
    notification.</div> 
  </h1><br></br>
  <p className="mx-10"><span className="text-[#0f172a] font-bold">Frontend:</span>ReactJs, TailwindCss</p>
  <p className="mx-10"><span className="text-[#0f172a] font-bold">Backend:</span> Nodejs, Express</p>
  <p className="mx-10"><span className="text-[#0f172a] font-bold">Database:</span>MongoDb</p>
  <p className="mx-10"><span className="text-[#0f172a] font-bold">Package: </span>stripe, nodemailer, twilio, socket.io, amadeus, bcryptjs, jsonwebtoken</p>
 </div>
        )}
         <button
          onClick={() => setShowMoreFlight(!showMoreFlight)}
          className="mx-10 mt-2 text-blue-600 font-semibold hover:underline"
        >
          {showMoreFlight ? "Show Less" : "View More"}
        </button> */}
</div>

       <div className="py-10">
  <p className="text-center font-bold text-xl">Flight Ticket Booking</p>

  <a href="https://regal-sable-efac67.netlify.app/" target="_blank" className="relative group inline-block mx-8 my-4">
    {/* Image */}
    <img
      src={flight_booking}
      className="h-70 w-70 border-6 border-gray-700 transition-opacity duration-300 group-hover:opacity-50"
    />

    {/* Overlay text */}
    <span className="absolute inset-0 flex items-center justify-center text-black text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Deployed URL
    </span>
  </a>

  <div className="grid grid-cols-2 gap-4 my-2 w-70 mx-8">
    <Link
      to="https://github.com/jeni-t/FlightTicket_Booking_react_Allapi"
      target="_blank"
      className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center"
    >
      Frontend Git 
    </Link>
    <Link
      to="https://github.com/jeni-t/FlightTicket_Booking_node_Allapi"
      target="_blank"
      className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center"
    >
      Backend Git
    </Link>
  </div>
   {/* {showMoreFlight && (
          <div className="mt-4">
  <h1><span className="text-[#0f172a] mr-10 mx-30 font-bold">Description:</span>
  <br></br><div className="mx-10 font-medium">Flight booking user can book flight and track flight status then user can select seat. 
    user can do online secure payment. View the booking history and get the live notification then get email and message 
    notification.</div> 
  </h1><br></br>
  <p className="mx-10"><span className="text-[#0f172a] font-bold">Frontend:</span>ReactJs, TailwindCss</p>
  <p className="mx-10"><span className="text-[#0f172a] font-bold">Backend:</span> Nodejs, Express</p>
  <p className="mx-10"><span className="text-[#0f172a] font-bold">Database:</span>MongoDb</p>
  <p className="mx-10"><span className="text-[#0f172a] font-bold">Package: </span>stripe, nodemailer, twilio, socket.io, amadeus, bcryptjs, jsonwebtoken</p>
 </div>
        )}
         <button
          onClick={() => setShowMoreFlight(!showMoreFlight)}
          className="mx-10 mt-2 text-blue-600 font-semibold hover:underline"
        >
          {showMoreFlight ? "Show Less" : "View More"}
        </button> */}
</div>


  <div className="py-10">
  <p className="text-center font-bold text-xl">Forget password</p>

  <a href="https://strong-valkyrie-67df57.netlify.app/" target="_blank" className="relative group inline-block mx-8 my-4">
    {/* Image */}
    <img
      src={forget_password}
      className="h-70 w-70 border-6 border-gray-700 transition-opacity duration-300 group-hover:opacity-50"
    />

    {/* Overlay text */}
    <span className="absolute inset-0 flex items-center justify-center text-black text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Deployed URL
    </span>
  </a>

  <div className="grid grid-cols-2 gap-4 my-2 w-70 mx-8">
    <Link
      to="https://github.com/jeni-t/password-rest"
      target="_blank"
      className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center"
    >
      Frontend Git
    </Link>
    <Link
      to="https://github.com/jeni-t/Password_Reset"
      target="_blank"
      className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center"
    >
      Backend Git
    </Link>
  </div>
</div>

<div className="py-10">
            <p className="text-center font-bold text-xl">userAuthenticationVerify</p>
        <a href="https://iridescent-raindrop-ce9a16.netlify.app/" target="_blank" className="relative group inline-block mx-8 my-4">
    <img src={User_Authentication} className="h-70 w-70 border-6 border-gray-700 transition-opacity duration-300 group-hover:opacity-50"></img>
    <span className="absolute inset-0 flex items-center justify-center text-black text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Deployed URL
    </span>
    </a>
    <div className="grid grid-cols-2 gap-4 my-2 w-70 mx-26">
    {/* <Link to="https://github.com/jeni-t/React_Api" target="_blank"
       className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Frontend Git</Link> */}
    <Link to ="https://github.com/jeni-t/userAuthenticationVerify" target="_blank"
    className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Backend Git</Link>
</div>
</div>

<div className="py-10">
            <p className="text-center font-bold text-xl">Recipe App</p>
        <a href="https://astonishing-malabi-6da860.netlify.app/" target="_blank" className="relative group inline-block mx-8 my-4">
    <img src={recipe} className="h-70 w-70 border-6 border-gray-700 transition-opacity duration-300 group-hover:opacity-50"></img>
    <span className="absolute inset-0 flex items-center justify-center text-black text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Deployed URL
    </span>
    </a>
    <div className="grid grid-cols-2 gap-4 my-2 w-70 mx-6">
    <Link to="https://github.com/jeni-t/React_Api" target="_blank"
       className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Frontend Git</Link>
    <Link to ="https://github.com/jeni-t/Nodejs" target="_blank"
    className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Backend Git</Link>
</div>
</div>

<div className="py-10">
            <p className="text-center font-bold text-xl">Movie App</p>
        <a href="https://startling-granita-02c1af.netlify.app/" target="_blank" className="relative group inline-block mx-8 my-4">
    <img src={movie} className="h-70 w-70 border-6 border-gray-700 transition-opacity duration-300 group-hover:opacity-50"></img>
     <span className="absolute inset-0 flex items-center justify-center text-black text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Deployed URL
    </span>
    </a>
    <div className="grid grid-cols-2 gap-4 my-2 w-70 mx-26">
    <Link to="https://github.com/jeni-t/Movie-App" target="_blank"
       className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Frontend Git</Link>
    {/* <Link to ="https://regal-sable-efac67.netlify.app/" target="_blank"
    className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Backend Git</Link> */}
</div>
</div>

<div className="py-10">
            <p className="text-center font-bold text-xl">Shopping Website</p>
        <a href="https://unrivaled-boba-6958da.netlify.app/" target="_blank" className="relative group inline-block mx-8 my-4">
    <img src={e_shopping} className="h-70 w-70 border-6 border-gray-700 transition-opacity duration-300 group-hover:opacity-50"></img>
    <span className="absolute inset-0 flex items-center justify-center text-black text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Deployed URL
    </span>
    </a>
    <div className="grid grid-cols-2 gap-4 my-2 w-70 mx-26">
    <Link to="https://github.com/jeni-t/React-Website" target="_blank"
       className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Frontend Git</Link>
    {/* <Link to ="https://regal-sable-efac67.netlify.app/" target="_blank"
    className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Backend Git</Link> */}
</div>
</div>

<div className="py-10">
            <p className="text-center font-bold text-xl">Shopping Website</p>
        <a href="https://stately-smakager-aa768c.netlify.app/" target="_blank" className="relative group inline-block mx-8 my-4">
    <img src={shopping} className="h-70 w-70 border-6 border-gray-700 transition-opacity duration-300 group-hover:opacity-50"></img>
     <span className="absolute inset-0 flex items-center justify-center text-black text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Deployed URL
    </span>
    </a>
    <div className="grid grid-cols-2 gap-4 my-2 w-70 mx-26">
    <Link to="https://github.com/jeni-t/E-comShoppingWebsite" target="_blank"
       className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Frontend Git</Link>
    {/* <Link to ="https://regal-sable-efac67.netlify.app/" target="_blank"
    className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Backend Git</Link> */}
</div>
</div>

<div className="py-10">
            <p className="text-center font-bold text-xl">Budget App</p>
        <a href="https://warm-bienenstitch-a3ff8d.netlify.app/" target="_blank" className="relative group inline-block mx-8 my-4">
    <img src={Budget} className="h-70 w-70 border-6 border-gray-700 transition-opacity duration-300 group-hover:opacity-50"></img>
      <span className="absolute inset-0 flex items-center justify-center text-black text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Deployed URL
    </span>
    </a>
   <div className="grid grid-cols-2 gap-4 my-2 w-70 mx-26">
    <Link to="https://github.com/jeni-t/Budget-App" target="_blank"
       className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Frontend Git</Link>
    {/* <Link to ="https://regal-sable-efac67.netlify.app/" target="_blank"
    className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Backend Git</Link> */}
</div>
</div>

<div className="py-10">
            <p className="text-center font-bold text-xl">Memory Game App</p>
        <a href="https://teal-meringue-9ea6ee.netlify.app/" target="_blank" className="relative group inline-block mx-8 my-4">
    <img src={memory_game} className="h-70 w-70 border-6 border-gray-700 transition-opacity duration-300 group-hover:opacity-50"></img>
     <span className="absolute inset-0 flex items-center justify-center text-black text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Deployed URL
    </span>
    </a>
    <div className="grid grid-cols-2 gap-4 my-2 w-70 mx-26">
    <Link to="https://github.com/jeni-t/card_fip_JS" target="_blank"
       className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Frontend Git</Link>
    {/* <Link to ="https://regal-sable-efac67.netlify.app/" target="_blank"
    className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Backend Git</Link> */}
</div>
</div>

<div className="py-10">
            <p className="text-center font-bold text-xl">coaching web page</p>
        <a href="https://inspiring-crepe-d69567.netlify.app/" target="_blank" className="relative group inline-block mx-8 my-4">
    <img src={Coaching} className="h-70 w-70 border-6 border-gray-700 transition-opacity duration-300 group-hover:opacity-50"></img>
     <span className="absolute inset-0 flex items-center justify-center text-black text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Deployed URL
    </span>
    </a>
    <div className="grid grid-cols-2 gap-4 my-2 w-70 mx-26">
    <Link to="https://github.com/jeni-t/coaching-web-page" target="_blank"
       className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Frontend Git</Link>
    {/* <Link to ="https://regal-sable-efac67.netlify.app/" target="_blank"
    className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Backend Git</Link> */}
</div>
</div>

<div className="py-10">
            <p className="text-center font-bold text-xl">Landing web page</p>
        <a href="https://sunny-hotteok-98dc14.netlify.app/" target="_blank" className="relative group inline-block mx-8 my-4">
    <img src={tour} className="h-70 w-70 border-6 border-gray-700 transition-opacity duration-300 group-hover:opacity-50"></img>
     <span className="absolute inset-0 flex items-center justify-center text-black text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Deployed URL
    </span>
    </a>
    <div className="grid grid-cols-2 gap-4 my-2 w-70 mx-26">
    <Link to="https://github.com/jeni-t/landing_pages" target="_blank"
       className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Frontend Git</Link>
    {/* <Link to ="https://regal-sable-efac67.netlify.app/" target="_blank"
    className="bg-[#0f172a] text-white font-bold text-lg py-4 rounded-lg text-center">Backend Git</Link> */}
</div>
</div>
   
    </div>
)
}
export default Project
