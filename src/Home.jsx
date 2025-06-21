import girl from '../public/jeni_3.png';

const Home = () =>{
return(
<>
{/* <div className="mx-20 my-14 py-10 bg-pink-800 w-11/12 shadow-2xl shadow-zinc-600">
<div className="text-3xl mx-10 text-left">Details : </div>
<div className="">
    Name : Jenifer
</div>
</div> */}
<div className="relative">
  <img src={girl} className="w-[1100px] h-[110vh] object-cover opacity-60" alt="Background" />

  <div className="absolute inset-0 flex flex-col items-start justify-center px-10 text-white">
    <h1 className="text-black text-4xl font-bold">Jenifer V</h1>
    <p className="text-black font-bold text-2xl mt-2">
      3D Web Developer &
    </p>
    <p className="text-black font-bold text-2xl mt-2">
       MERN Full Stack Developer
    </p>
  </div>
</div>

</>
)
}

export default Home