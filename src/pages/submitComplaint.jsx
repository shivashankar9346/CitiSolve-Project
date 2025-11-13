import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./submitComplaints.css";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Load existing complaints from localStorage
    const existingComplaints =
      JSON.parse(localStorage.getItem("complaints")) || [];

    // ✅ Create new complaint object
    const newComplaint = {
      ...formData,
      id: Date.now(),
      status: "Pending",
      date: new Date().toLocaleString(),
    };

    // ✅ Save updated complaints list
    existingComplaints.push(newComplaint);
    localStorage.setItem("complaints", JSON.stringify(existingComplaints));

    alert("✅ Complaint submitted successfully!");

    // ✅ Redirect to My Complaints page
    navigate("/mycomplaints");
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
            <option value="Roads & Infrastructure">
              Roads & Infrastructure
            </option>
            <option value="Noise Pollution">Noise Pollution</option>
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
