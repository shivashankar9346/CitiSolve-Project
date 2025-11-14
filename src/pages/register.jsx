
import React, { useState } from "react";
import { useNavigate,NavLink } from "react-router-dom";
import { useUser } from "../context/userContext";
import './register.css'

const Register = () => {
  const { registerUser } = useUser();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "citizen",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const user = await registerUser({
        name: form.name,
        email: form.email,
        password: form.password,
        role: form.role,
      });

      if (user.role === "admin") navigate("/allComplaints");
      else navigate("/mycomplaints");

    } catch (err) {
      alert(err.message || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>
        <p>Join our citizen resolution system</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            value={form.name}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            value={form.email}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
            required
          />

          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={form.confirmPassword}
            required
          />

          <label htmlFor="role">Role</label>

          <select name="role" onChange={handleChange} value={form.role}>
            <option value="citizen">Citizen</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">Create Account</button>
        </form>
        <p>Already have an account?<NavLink to='/login'>Sign In </NavLink></p>

      </div>
    </div>
  );
};

export default Register;
