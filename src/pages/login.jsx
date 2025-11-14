

// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";
import "./login.css";

const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login({ email, password });
      // route by role
      if (user.role === "admin") navigate("/allComplaints"); // admin path
      else navigate("/mycomplaints");
    } catch (err) {
      alert(err.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>Email</label>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} />
      <label>Password</label>
      <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};
export default Login;

