import React, { useState } from 'react'
import Sidebar from '../components/admin/Sidebar'
import Header from '../components/admin/Header'
import { useNavigate } from 'react-router';
import { login } from '../utils/api';

function AdminPanel() {

  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await login(credentials);
      localStorage.setItem("adminToken", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <>
   <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full mb-4 p-3 rounded bg-gray-700 text-white"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded bg-gray-700 text-white"
          value={credentials.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
    </>
  )
}

export default AdminPanel