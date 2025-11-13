import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext"; // ✅ Import context
import "./register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "citizen",
  });

  const { login } = useUser(); // ✅ Use context
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("⚠️ Passwords do not match!");
      return;
    }

    // (Optional) store users for reference
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // ✅ Log the user in after successful registration
    login({
      name: formData.name,
      email: formData.email,
      role: formData.role,
    });

    alert("✅ Registration successful!");
    navigate("/myComplaints"); // redirect
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={formData.confirmPassword}
            required
          />
          <select name="role" onChange={handleChange} value={formData.role}>
            <option value="citizen">Citizen</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
