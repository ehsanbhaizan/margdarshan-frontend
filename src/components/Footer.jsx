import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-gray-300 pt-16 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4 cursor-pointer" onClick={() => navigate("/")}>
            <img
              src={logo}
              alt="Margdarshan Logo"
              className="h-16 w-auto object-contain"
            />
            <h2 className="text-2xl font-bold text-white">Margdarshan</h2>
          </div>

          <p className="text-sm leading-relaxed text-gray-300">
            Margdarshan is a smart career guidance platform helping students make
            the right decisions with expert counseling and structured guidance.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-indigo-300 text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li onClick={() => navigate("/home")} className="hover:text-white cursor-pointer">Home</li>
            <li onClick={() => navigate("/about")} className="hover:text-white cursor-pointer">About Us</li>
            <li onClick={() => navigate("/courses")} className="hover:text-white cursor-pointer">Courses</li>
            <li onClick={() => navigate("/privacy-policy")} className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-indigo-300 text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3 items-start">
              <FaMapMarkerAlt className="text-indigo-400 mt-1" />
              Muzaffarpur, Bihar, India
            </li>
            <li className="flex gap-3 items-center">
              <FaPhoneAlt className="text-indigo-400" />
              <a href="tel:8002633981" className="hover:text-white">+91 8002633981</a>
            </li>
            <li className="flex gap-3 items-center">
              <FaEnvelope className="text-indigo-400" />
              <a
                href="mailto:margdarshanplatform@gmail.com"
                className="hover:text-white"
              >
                margdarshanplatform@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-indigo-300 text-lg font-semibold mb-4">Follow Us</h3>
          <p className="text-sm mb-4 text-gray-300">
            Stay connected with us on social media
          </p>
          <div className="flex gap-4">
            <div
              onClick={() => window.open("https://facebook.com", "_blank")}
              className="bg-indigo-600 p-3 rounded-full cursor-pointer hover:bg-indigo-500 transition"
            >
              <FaFacebookF className="text-white" />
            </div>
            <div
              onClick={() => window.open("https://instagram.com", "_blank")}
              className="bg-indigo-600 p-3 rounded-full cursor-pointer hover:bg-indigo-500 transition"
            >
              <FaInstagram className="text-white" />
            </div>
            <div
              onClick={() => window.open("https://twitter.com", "_blank")}
              className="bg-indigo-600 p-3 rounded-full cursor-pointer hover:bg-indigo-500 transition"
            >
              <FaTwitter className="text-white" />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Margdarshan</span>. All Rights Reserved
      </div>
    </footer>
  );
}



