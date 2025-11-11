import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmitComplaint = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    ward: "",
    location: "",
    category: "",
    description: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

function handleSubmit() {
    e.preventDefault();
    navigate("/mycomplaints")
  }

  return (
    <div>
      <h2>Submit Complaint</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} />
        <input name="ward" placeholder="Ward" onChange={handleChange} />
        <input name="location" placeholder="Location" onChange={handleChange} />
        <select name="category" onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="Water Supply">Water Supply</option>
          <option value="Roads & Infrastructure">Roads & Infrastructure</option>
          <option value="Noise Pollution">Noise Pollution</option>
        </select>
        <textarea name="description" placeholder="Describe issue..." onChange={handleChange}></textarea>
        <input type="file" name="photo" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitComplaint;
