import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../mockData";
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate(
        user.userType === "admin" ? "/admin-dashboard" : "/user-dashboard"
      );
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg text-center text-gray-800">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">Login</h2>
        <p className="text-lg mb-8 text-gray-600">
          Sign in to your account and join us
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-gray-700 mb-2 text-left"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-full bg-gray-100 text-gray-700 placeholder-gray-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-lg font-semibold text-gray-700 mb-2 text-left"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-full bg-gray-100 text-gray-700 placeholder-gray-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
        <div className="mt-4 text-right">
          <a href="#" className="text-blue-600 hover:underline text-sm">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
