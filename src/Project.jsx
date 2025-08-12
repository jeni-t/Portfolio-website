import { Link } from "react-router-dom";
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


const Project =()=>{
return(
    <div className="grid grid-cols-3">
      
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



// import { Link } from "react-router-dom";
// import memory_game from '../public/memory_game.jpeg';
// import User_Authentication from '../public/User-Authentication.jpg';
// import recipe from '../public/recipe.jpg';
// import movie from '../public/movie.jpeg';
// import e_shopping from '../public/e-shopping.jpg';
// import shopping from '../public/shopping.jpg';
// import Budget from '../public/Budget.jpg';
// import flight_booking from '../public/flight-booking.jpg';
// import forget_password from '../public/forget-password.jpg';


// const Project =()=>{
// return(
//     <div className="grid grid-cols-3">
      
//         <div className="py-10">
//             <p className="text-center font-bold text-xl">Flight Ticket Booking</p>
//         <a href="https://regal-sable-efac67.netlify.app/">
//     <img src={flight_booking} className="my-4 mx-8 h-70 w-70 border-6 border-gray-700"></img>
//     </a>
//     <p className="text-center text-gray font-semibold">Flight Ticket Booking Website. 
//     integrating with airline databases to access flight schedules, pricing information, and seat availability
//     Send booking confirmations to users via email or SMS.Integrate secure payment gateways to handle transactions for flight bookings. Support various payment methods, including credit/debit cards, digital wallets, and bank transfers.
// </p>
// </div>

// <div className="py-10">
//             <p className="text-center font-bold text-xl">Forget password</p>
//         <a href="https://strong-valkyrie-67df57.netlify.app/">
//     <img src={forget_password} className="my-4 py-4 mx-8 h-70 w-70 border-6 border-gray-700"></img>
//     </a>
//     <p className="text-center text-gray font-semibold">Forget password page ask your registered email id.
//     once you enter it send a password rest link to your email id. you can click and rest your password</p>
// </div>

// <div className="py-10">
//             <p className="text-center font-bold text-xl">userAuthenticationVerify</p>
//         <a href="https://iridescent-raindrop-ce9a16.netlify.app/">
//     <img src={User_Authentication} className="my-4 py-4 mx-8 h-70 w-70 border-6 border-gray-700"></img>
//     </a>
//     <p className="text-center text-gray font-semibold">user registration. user login. JWT upon successful login.
//     middleware function to verify the JWT from the request headers.Decode the token to get the user's information.

// </p>
// </div>

// <div className="py-10">
//             <p className="text-center font-bold text-xl">Recipe App</p>
//         <a href="https://astonishing-malabi-6da860.netlify.app/">
//     <img src={recipe} className="my-4 mx-8 h-70 w-70 border-6 border-gray-700"></img>
//     </a>
//     <p className="text-center text-gray font-semibold">MVC pattern with separate folders for models, views, and controllers.
//     CRUD operations. error handling and validation.requests and responses for each operation.
// </p>
// </div>

// <div className="py-10">
//             <p className="text-center font-bold text-xl">Movie App</p>
//         <a href="https://startling-granita-02c1af.netlify.app/">
//     <img src={movie} className="my-4 mx-8 h-70 w-70 border-6 border-gray-700"></img>
//     </a>
//     <p className="text-center text-gray font-semibold">fetch movie data, including search results and detailed movie information.
//     search bar for users to enter movie titles or keywords.  list format, showing movie posters, titles, and brief descriptions.
//     each movie, including a larger poster, title, release year, genre, plot summary, ratings, and cast.navigation between the search page, movie details page.

// </p>
// </div>

// <div className="py-10">
//             <p className="text-center font-bold text-xl">Shopping Website</p>
//         <a href="https://unrivaled-boba-6958da.netlify.app/">
//     <img src={e_shopping} className="my-4 mx-8 h-70 w-70 border-6 border-gray-700"></img>
//     </a>
//     <p className="text-center text-gray font-semibold">key information, such as the product image, title, price, and description.
//     cart page that displays the items added to the cart.Each cart item should show the product name, price, quantity, and a "Remove from Cart" button.
// When the "Add to Cart" button is clicked, the product should be added to the cart.
// Remove from Cart  removed from the cart.able to Increase/Decrease the quantity of each item.  10% discount on the total price
// </p>
// </div>

// <div className="py-10">
//             <p className="text-center font-bold text-xl">Shopping Website</p>
//         <a href="https://stately-smakager-aa768c.netlify.app/">
//     <img src={shopping} className="my-4 mx-8 h-70 w-70 border-6 border-gray-700"></img>
//     </a>
//     <p className="text-center text-gray font-semibold">key information, such as the product image, title, price, and add to cart button.
//     add the product in the cart. already added to the cart display the Alert with the message  “Item already added to the cart”.
//     displayed in a responsive layout. Remove from Cart button removes the product from the cart.


// </p>
// </div>

// <div className="py-10">
//             <p className="text-center font-bold text-xl">Budget App</p>
//         <a href="https://warm-bienenstitch-a3ff8d.netlify.app/">
//     <img src={Budget} className="my-4 py-4 mx-8 h-70 w-70 border-6 border-gray-700"></img>
//     </a>
//     <p className="text-center text-gray font-semibold">entering income and expense details.Display a  list of all entries with options to edit or delete each one.
//     total income, total expenses, and net balance at the top. reset button to clear the input fields
//     Allow users to add new income and expense entries.users to edit existing entries.
// </p>
// </div>

// <div className="py-10">
//             <p className="text-center font-bold text-xl">Memory Game App</p>
//         <a href="https://teal-meringue-9ea6ee.netlify.app/">
//     <img src={memory_game} className="my-4 mx-8 h-70 w-70 border-6 border-gray-700"></img>
//     </a>
//     <p className="text-center text-gray font-semibold">game title and a restart button. game logic to handle card flipping. When a card is clicked, it should flip to reveal the front face.
//     shuffle function to randomize the card positions at the start of the game.the logic to check for matching pairs. If two cards match, they should remain face-up. If they do not match, they should flip back after a short delay.

// </p>
// </div>
   
//     </div>
// )
// }
// export default Project