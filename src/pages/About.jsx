import { FaUserGraduate, FaChalkboardTeacher, FaLightbulb, FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero.png";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 leading-tight mb-6">
            About <span className="text-purple-700">Margdarshan</span>
          </h1>

          <p className="text-indigo-700 text-lg mb-8 max-w-xl">
            Margdarshan is a modern career guidance platform helping students choose
            the right path with expert counseling, structured guidance, and real-world insights.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            Get Started →
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="About Margdarshan"
            className="max-w-md w-full drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Mission / Vision */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-indigo-900">
            Our <span className="text-purple-700">Mission & Vision</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-10 rounded-3xl shadow-lg bg-white/70 backdrop-blur border border-white">
              <h3 className="text-xl font-bold mb-4 text-indigo-800">🎯 Our Mission</h3>
              <p className="text-indigo-700">
                To guide every student in India towards the right career path using
                technology, mentorship, and personalized counseling.
              </p>
            </div>

            <div className="p-10 rounded-3xl shadow-lg bg-white/70 backdrop-blur border border-white">
              <h3 className="text-xl font-bold mb-4 text-purple-800">🚀 Our Vision</h3>
              <p className="text-indigo-700">
                To become India’s most trusted digital career guidance ecosystem
                for students, parents, and institutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14 text-indigo-900">
            Why <span className="text-purple-700">Choose Margdarshan?</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <Feature icon={<FaUserGraduate />} title="Student Focused" />
            <Feature icon={<FaChalkboardTeacher />} title="Expert Mentors" />
            <Feature icon={<FaLightbulb />} title="Smart Guidance" />
            <Feature icon={<FaRocket />} title="Career Growth" />
          </div>
        </div>
      </div>

    </div>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition-transform border border-white">
      <div className="text-indigo-600 text-4xl mb-4 flex justify-center">{icon}</div>
      <h3 className="font-bold text-lg text-indigo-900">{title}</h3>
    </div>
  );
}

