import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import AdminCourses from "./pages/AdminCourses";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/courses" element={<AdminCourses />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
