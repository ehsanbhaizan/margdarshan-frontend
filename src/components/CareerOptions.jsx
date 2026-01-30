import { 
  FaTrophy, 
  FaClipboardCheck, 
  FaUniversity, 
  FaUserGraduate, 
  FaLaptopCode, 
  FaMedal 
} from "react-icons/fa";

const items = [
  { title: "Courses", icon: <FaLaptopCode /> },
  { title: "Institutions", icon: <FaUniversity /> },
  { title: "Mentorships", icon: <FaUserGraduate /> },
  { title: "Mock Tests", icon: <FaClipboardCheck /> }, 
  { title: "Results", icon: <FaTrophy /> },          
  { title: "Competitions", icon: <FaMedal /> },
  { title: "Achievement", icon: <FaMedal /> },  
];

export default function CareerOptions() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      {/* Heading */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">
          Unlock Your <span className="text-blue-600">Career!</span>
        </h2>

        <div className="hidden md:flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
          ⚡ 100+ students guided by Margdarshan
        </div>
      </div>

      {/* Cards */}
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {items.map((item, i) => (
          <div
            key={i}
            className="min-w-[180px] h-[180px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer border border-indigo-100"
          >
            <div className="text-5xl text-indigo-600 mb-4 drop-shadow-md">
              {item.icon}
            </div>

            <h3 className="font-semibold text-lg text-gray-800">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

    </div>
  );
}

