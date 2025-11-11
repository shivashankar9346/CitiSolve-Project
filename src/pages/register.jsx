import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "citizen",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate=useNavigate();

  function handleSubmit (){
    e.preventDefault();
    navigate('/submitComplaint')
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
        <select name="role" onChange={handleChange}>
          <option value="citizen">Citizen</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Register;
