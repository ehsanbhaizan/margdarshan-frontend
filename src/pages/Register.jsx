import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/auth/register", form);
      alert("Registered successfully! Please login.");
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center p-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">

        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-2">
          📝 Create Account
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Join Margdarshan and start your journey.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Full Name"
            className="w-full border border-purple-200 p-3 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email address"
            className="w-full border border-purple-200 p-3 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border border-purple-200 p-3 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
            value={form.password}
            onChange={handleChange}
            required
          />

          <select
            name="role"
            className="w-full border border-purple-200 p-3 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
            value={form.role}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="counselor">Counselor</option>
            <option value="ngo">NGO</option>
          </select>

          <button
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:scale-105 transition-transform disabled:opacity-50"
          >
            {loading ? "Creating account..." : "🚀 Register"}
          </button>

        </form>

        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}




