import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

export default function Navbar() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      
      {/* Logo + Brand */}
      <Link to="/home" onClick={scrollTop} className="flex items-center">
        <img 
          src={logo} 
          alt="Margdarshan Logo" 
          className="h-16 w-16 object-contain scale-125"
        />
        <span className="text-2xl font-bold text-blue-600">
          Margdarshan
        </span>
      </Link>

      {/* Menu */}
      <div className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link to="/home" onClick={scrollTop} className="hover:text-indigo-600">Home</Link>
        <Link to="/courses" onClick={scrollTop} className="hover:text-indigo-600">Courses</Link>
        <Link to="/resources" onClick={scrollTop} className="hover:text-indigo-600">Resources</Link>
        <Link to="/about" onClick={scrollTop} className="hover:text-indigo-600">About Us</Link>
      </div>

      {/* Login Button */}
      <Link
        to="/login"
        onClick={scrollTop}
        className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700"
      >
        Login / Register
      </Link>
    </nav>
  );
}




