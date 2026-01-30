import { useNavigate } from "react-router-dom";
import founderImg from "../assets/founder.png";  
import cofounderImg from "../assets/cofounder.png";  

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="w-full py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Your Career, <span className="text-blue-600">Our Guidance</span><br />
          Start With Margdarshan
          </h1>


          <p className="mt-4 text-gray-600 max-w-xl">
            Margdarshan helps students choose the right career path with expert
            counseling, resources, and mentorship.
          </p>

          <button
           onClick={() => navigate("/login")}
           className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg"
          >
            Get Started
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">

          {/* Founder Circle */}
          <div className="relative w-[260px] h-[260px] rounded-full border-2 border-dashed border-indigo-300 flex items-center justify-center">
            <img
              src={founderImg}
              className="w-[200px] h-[200px] rounded-full object-cover bg-white"
            />
            <div className="absolute right-[-95px] top-[50%] bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm max-w-[220px]">
            Founder
            </div>
          </div>

          {/* Co-Founder Circle */}
          <div className="absolute top-[-20px] right-[-10px] w-[220px] h-[220px] rounded-full border-2 border-dashed border-purple-300 flex items-center justify-center">
            <img
              src={cofounderImg}
              className="w-[150px] h-[150px] rounded-full object-cover bg-white"
            />
            <div className="absolute right-[-120px] top-[50%] bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm max-w-[220px]">
            Co-Founder
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}





