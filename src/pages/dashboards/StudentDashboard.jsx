import { useEffect, useState, useContext } from "react";
import API from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function StudentDashboard() {
  const { user, logout } = useContext(AuthContext);
  const [sessions, setSessions] = useState([]);
  const [counselorId, setCounselorId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  if (!user) return <Navigate to="/login" />;

  const fetchSessions = async () => {
    const res = await API.get("/sessions/my-sessions");
    setSessions(res.data);
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const bookSession = async (e) => {
    e.preventDefault();
    await API.post("/sessions/book", { counselorId, date, time });
    alert("Session booked!");
    setCounselorId("");
    setDate("");
    setTime("");
    fetchSessions();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 md:p-8">

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-6 mb-8 shadow-lg flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">🎓 Student Dashboard</h1>
          <p className="opacity-90">Welcome, {user.name}</p>
        </div>
        <button
          onClick={logout}
          className="mt-4 md:mt-0 bg-white text-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </div>

      {/* Book Session Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-purple-100">
        <h2 className="text-xl font-bold mb-4 text-indigo-700">
          📅 Book a Counseling Session
        </h2>

        <form onSubmit={bookSession} className="grid md:grid-cols-3 gap-4">
          <input
            className="border border-purple-200 p-3 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
            placeholder="Counselor ID"
            value={counselorId}
            onChange={(e) => setCounselorId(e.target.value)}
            required
          />

          <input
            className="border border-purple-200 p-3 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <input
            className="border border-purple-200 p-3 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
            placeholder="Time (10:00 AM)"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <div className="md:col-span-3">
            <button className="w-full md:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
              🚀 Book Session
            </button>
          </div>
        </form>
      </div>

      {/* Sessions */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-indigo-800">
          📖 My Sessions
        </h2>

        {sessions.length === 0 && (
          <div className="bg-white rounded-xl p-6 text-center text-gray-500 shadow">
            No sessions booked yet.
          </div>
        )}

        <div className="grid gap-5">
          {sessions.map((s) => (
            <div
              key={s._id}
              className="bg-white rounded-2xl shadow-lg p-5 flex flex-col md:flex-row md:justify-between md:items-center hover:shadow-xl transition"
            >
              <div>
                <p className="font-bold text-lg text-gray-800">
                  👨‍🏫 Counselor: {s.counselor?.name || "N/A"}
                </p>
                <p className="text-gray-600">
                  📅 {s.date} ⏰ {s.time}
                </p>
              </div>

              <span
                className={`mt-3 md:mt-0 inline-block px-5 py-1.5 rounded-full text-sm font-bold
                  ${
                    s.status === "approved"
                      ? "bg-green-100 text-green-700"
                      : s.status === "rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }
                `}
              >
                {s.status.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}




