import React, { useEffect, useState } from "react";
import "./adminDashboard.css";

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [counts, setCounts] = useState({
    total: 0,
    open: 0,
    inprogress: 0,
    resolved: 0
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("complaints")) || [];

    setComplaints(stored);

    const total = stored.length;
    const open = stored.filter(c => c.status === "Pending" || c.status === "Open").length;
    const inprogress = stored.filter(c => c.status === "Inprogress").length;
    const resolved = stored.filter(c => c.status === "Resolved").length;

    setCounts({ total, open, inprogress, resolved });
  }, []);

  return (
    <div className="admin-dashboard">

      {/* Counter Cards */}
      <div className="counter-cards">
        <div>
          <p>Total Complaints</p>
          <h2>{counts.total}</h2>
        </div>

        <div>
          <p>Open</p>
          <h2>{counts.open}</h2>
        </div>

        <div>
          <p>InProgress</p>
          <h2>{counts.inprogress}</h2>
        </div>

        <div>
          <p>Resolved</p>
          <h2>{counts.resolved}</h2>
        </div>
      </div>

      {/* Filters */}
      <div className="filter-section">
        <input type="text" placeholder="Search Complaints by ID" />

        <select id="filtering-options">
          <option value="All Status">All Status</option>
          <option value="Open">Open</option>
          <option value="Inprogress">Inprogress</option>
          <option value="Resolved">Resolved</option>
        </select>

        <select>
          <option value="">Select Category</option>
          <option value="Water Supply">Water Supply</option>
          <option value="Roads & Infrastructure">Roads & Infrastructure</option>
          <option value="Noise Pollution">Noise Pollution</option>
          <option value="Sanitation & Waste">Sanitation & Waste</option>
          <option value="Street Lighting">Street Lighting</option>
          <option value="Public safety">Public safety</option>
          <option value="Environmental Issue">Environmental Issue</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {/* Display Complaints */}
      <h2 className="table-title">All Complaints</h2>

     <table className="complaints-table">
  <thead>
    <tr>
      <th style={{ width: "8%" }}>ID</th>
      <th style={{ width: "12%" }}>Name</th>
      <th style={{ width: "10%" }}>Ward</th>
      <th style={{ width: "14%" }}>Category</th>
      <th style={{ width: "32%" }}>Description</th>
      <th style={{ width: "10%" }}>Status</th>
      <th style={{ width: "12%" }}>Photo</th>
    </tr>
  </thead>

        <tbody>
          {complaints.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No Complaints Found
              </td>
            </tr>
          ) : (
            complaints.map((c, index) => (
              <tr key={index}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.ward}</td>
                <td>{c.category}</td>
                <td>{c.description}</td>
                <td>{c.status}</td>
                <td>
                  {c.photo ? (
                    <img
                      src={c.photo}
                      alt="complaint"
                      style={{ width: "60px", borderRadius: "5px" }}
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

    </div>
  );
};

export default AdminDashboard;
