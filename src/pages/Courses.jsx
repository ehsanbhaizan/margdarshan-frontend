import { FaGraduationCap, FaLaptopCode, FaUserTie, FaBookOpen } from "react-icons/fa";

export default function Courses() {
  const courses = [
    {
      title: "Engineering Guidance",
      desc: "Complete guidance for JEE, diploma, and engineering career paths.",
      icon: <FaLaptopCode />,
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Medical Guidance",
      desc: "NEET, medical colleges, and healthcare career counseling.",
      icon: <FaBookOpen />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Government Exams",
      desc: "SSC, Banking, Railway, UPSC and other govt exam guidance.",
      icon: <FaGraduationCap />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Career Counseling",
      desc: "1-to-1 personalized counseling sessions with experts.",
      icon: <FaUserTie />,
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-24 pb-16">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our <span className="text-indigo-600">Courses</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Explore career guidance programs designed to shape your future with confidence.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl bg-gradient-to-r ${course.color}`}>
              {course.icon}
            </div>

            <h3 className="text-xl font-bold mt-5 text-gray-900">
              {course.title}
            </h3>

            <p className="text-gray-600 mt-2 text-sm">
              {course.desc}
            </p>

            <button className="mt-5 text-indigo-600 font-semibold hover:underline">
              Learn More →
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}
