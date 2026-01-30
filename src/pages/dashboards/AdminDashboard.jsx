import { useEffect, useState, useContext } from "react";
import API from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function AdminDashboard() {
  const { user, logout } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [resources, setResources] = useState([]);

  if (!user) return <Navigate to="/login" />;

  const fetchData = async () => {
    const usersRes = await API.get("/admin/pending-users");
    const resourcesRes = await API.get("/resources/pending");
    setUsers(usersRes.data);
    setResources(resourcesRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const approveUser = async (id) => {
    await API.put(`/admin/approve/${id}`);
    fetchData();
  };

  const approveResource = async (id) => {
    await API.put(`/resources/${id}/approve`);
    fetchData();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 md:p-8">

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-6 mb-8 shadow-lg flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">🛡️ Admin Dashboard</h1>
          <p className="opacity-90">Welcome, {user.name}</p>
        </div>
        <button
          onClick={logout}
          className="mt-4 md:mt-0 bg-white text-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </div>

      {/* Pending Users */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-indigo-800">
          👥 Pending Users
        </h2>

        {users.length === 0 && (
          <div className="bg-white rounded-xl p-6 text-center text-gray-500 shadow">
            No pending users.
          </div>
        )}

        <div className="grid gap-5">
          {users.map((u) => (
            <div
              key={u._id}
              className="bg-white rounded-2xl shadow-lg p-5 flex flex-col md:flex-row md:justify-between md:items-center hover:shadow-xl transition"
            >
              <div>
                <p className="font-bold text-lg text-gray-800">
                  👤 {u.name}
                </p>
                <p className="text-gray-600">
                  {u.email} — Role: {u.role}
                </p>
              </div>

              <button
                onClick={() => approveUser(u._id)}
                className="mt-4 md:mt-0 bg-green-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                ✅ Approve
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Pending Resources */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-indigo-800">
          📚 Pending Resources
        </h2>

        {resources.length === 0 && (
          <div className="bg-white rounded-xl p-6 text-center text-gray-500 shadow">
            No pending resources.
          </div>
        )}

        <div className="grid gap-5">
          {resources.map((r) => (
            <div
              key={r._id}
              className="bg-white rounded-2xl shadow-lg p-5 flex flex-col md:flex-row md:justify-between md:items-center hover:shadow-xl transition"
            >
              <div>
                <p className="font-bold text-lg text-gray-800">
                  📄 {r.title}
                </p>
                <p className="text-gray-600">
                  Category: {r.category}
                </p>
              </div>

              <button
                onClick={() => approveResource(r._id)}
                className="mt-4 md:mt-0 bg-green-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                ✅ Approve
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}


