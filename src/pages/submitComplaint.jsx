
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";
import "./submitComplaints.css";
const SubmitComplaint = () => {
  const { addComplaint } = useUser();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", ward: "", location: "", category: "", description: "", photo: null });

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    setForm(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("ward", form.ward);
      fd.append("location", form.location);
      fd.append("category", form.category);
      fd.append("description", form.description);
      if (form.photo) fd.append("photo", form.photo);

      await addComplaint(fd);
      alert("Complaint submitted");
      navigate("/mycomplaints");
    } catch (err) {
      alert(err.message || "Failed to submit complaint");
    }
  };

  return (
    <div className="complaint-container">
      <div className="complaint-card">
        <h2 className="complaint-title">Submit Complaint</h2>

        <form className="complaint-form" onSubmit={handleSubmit}>
          <input
            className="form-input"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
          <input
            className="form-input"
            name="ward"
            placeholder="Ward"
            onChange={handleChange}
            required
          />
          <input
            className="form-input"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            required
          />
          <select
            className="form-select"
            name="category"
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Water Supply">Water Supply</option>
            <option value="Roads & Infrastructure">Roads & Infrastructure</option>
            <option value="Noise Pollution">Noise Pollution</option>
            <option value="Sanitation & Waste">Sanitation & Waste</option>
            <option value="Street Lighting">Street Lighting </option>
            <option value="Public safety">Public safety</option>
            <option value="Environmental Issue">Environmental Issue</option>
            <option value="Others">Others</option>
          </select>
          <textarea
            className="form-textarea"
            name="description"
            placeholder="Describe the issue..."
            onChange={handleChange}
            required
          ></textarea>
          <input
            className="form-file"
            type="file"
            name="photo"
            onChange={handleChange}
          />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
 
  );
};

export default SubmitComplaint;
