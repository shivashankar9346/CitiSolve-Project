import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext"; // ✅ context import
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useUser(); // ✅ from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // ✅ Fetch all users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ Check if user exists
    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!existingUser) {
      alert("⚠️ Invalid credentials or user not registered!");
      return;
    }

    // ✅ Login and store user in context + localStorage
    login(existingUser);

    alert(`✅ Welcome back, ${existingUser.name}!`);

    // ✅ Redirect based on role
    if (existingUser.role === "admin") {
      navigate("/myComplaints");
    } else {
      navigate("/submitComplaint");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
