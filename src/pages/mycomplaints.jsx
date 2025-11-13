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
     <div className="headers">
       <h1>My Complaints</h1>
      <p>Track the status of your submitted complaints</p>
     </div>
     <div className="mycomplaints-header">
      <div className="filter-dropdown">
        <label htmlFor=""> Filter By Status : </label>
        <select name="" id="filtering-options">
          <option value="All Status">All Status</option>
          <option value="Open">Open</option>
          <option value="Inprogess">Inprogess</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>
      
       <div>
        <h2>📋 My Complaints</h2>
       </div>
     </div>

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
