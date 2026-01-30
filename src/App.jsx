import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { useContext } from "react";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ScrollToTop from "./components/ScrollToTop";


import StudentDashboard from "./pages/dashboards/StudentDashboard";
import CounselorDashboard from "./pages/dashboards/CounselorDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import NGODashboard from "./pages/dashboards/NGODashboard";

function RoleRedirect() {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />;

  if (user.role === "student") return <Navigate to="/student" />;
  if (user.role === "counselor") return <Navigate to="/counselor" />;
  if (user.role === "admin") return <Navigate to="/admin" />;
  if (user.role === "ngo") return <Navigate to="/ngo" />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <ScrollToTop /> 
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* After login */}
          <Route path="/redirect" element={<RoleRedirect />} />

          {/* Dashboards */}
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/counselor" element={<CounselorDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/ngo" element={<NGODashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}










