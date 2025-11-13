import React, { useEffect, useState } from "react";
import "./mycomplaints.css";

const MyComplaints = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const storedComplaints = JSON.parse(localStorage.getItem("complaints")) || [];
    setComplaints(storedComplaints);
  }, []);

  return (
    <div className="mycomplaints-container">
      <h2>📋 My Complaints</h2>

      {complaints.length === 0 ? (
        <p>No complaints found.</p>
      ) : (
        <div className="complaints-grid">
          {complaints.map((c) => (
            <div key={c.id} className="complaint-card">
              <h3>{c.category}</h3>
              <p><strong>Description:</strong> {c.description}</p>
              <p><strong>Ward:</strong> {c.ward}</p>
              <p><strong>Location:</strong> {c.location}</p>
              <p><strong>Status:</strong> {c.status}</p>
              <p><strong>Date:</strong> {c.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyComplaints;
