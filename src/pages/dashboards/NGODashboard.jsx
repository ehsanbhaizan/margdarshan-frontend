import { useState, useContext } from "react";
import API from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function NGODashboard() {
  const { user, logout } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [resourceUrl, setResourceUrl] = useState("");

  if (!user) return <Navigate to="/login" />;

  const uploadResource = async (e) => {
    e.preventDefault();
    await API.post("/resources", { title, category, resourceUrl });
    alert("Resource submitted for approval!");
    setTitle("");
    setCategory("");
    setResourceUrl("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 md:p-8">

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-6 mb-8 shadow-lg flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">🏫 NGO Dashboard</h1>
          <p className="opacity-90">Welcome, {user.name}</p>
        </div>
        <button
          onClick={logout}
          className="mt-4 md:mt-0 bg-white text-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </div>

      {/* Upload Resource */}
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 border border-purple-100">
        <h2 className="text-xl font-bold mb-4 text-indigo-700">
          📤 Upload Study Resource
        </h2>

        <form onSubmit={uploadResource} className="grid gap-4">
          <input
            className="border border-purple-200 p-3 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
            placeholder="Resource Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            className="border border-purple-200 p-3 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <input
            className="border border-purple-200 p-3 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
            placeholder="Resource URL"
            value={resourceUrl}
            onChange={(e) => setResourceUrl(e.target.value)}
            required
          />

          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
            🚀 Submit Resource
          </button>
        </form>
      </div>

    </div>
  );
}


