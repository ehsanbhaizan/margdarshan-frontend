import { useEffect, useState, useContext } from "react";
import API from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function CounselorDashboard() {
  const { user, logout } = useContext(AuthContext);
  const [sessions, setSessions] = useState([]);

  if (!user) return <Navigate to="/login" />;

  const fetchPendingSessions = async () => {
    const res = await API.get("/sessions/pending");
    setSessions(res.data);
  };

  useEffect(() => {
    fetchPendingSessions();
  }, []);

  const updateStatus = async (id, status) => {
    await API.put(`/sessions/${id}`, { status });
    fetchPendingSessions();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 md:p-8">

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-6 mb-8 shadow-lg flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">🧑‍🏫 Counselor Dashboard</h1>
          <p className="opacity-90">Welcome, {user.name}</p>
        </div>
        <button
          onClick={logout}
          className="mt-4 md:mt-0 bg-white text-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </div>

      {/* Pending Sessions */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-indigo-800">
          ⏳ Pending Sessions
        </h2>

        {sessions.length === 0 && (
          <div className="bg-white rounded-xl p-6 text-center text-gray-500 shadow">
            No pending sessions.
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
                  👨‍🎓 Student: {s.student?.name || "N/A"}
                </p>
                <p className="text-gray-600">
                  📅 {s.date} ⏰ {s.time}
                </p>
              </div>

              <div className="flex gap-3 mt-4 md:mt-0">
                <button
                  onClick={() => updateStatus(s._id, "approved")}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  ✅ Approve
                </button>

                <button
                  onClick={() => updateStatus(s._id, "rejected")}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                >
                  ❌ Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}


