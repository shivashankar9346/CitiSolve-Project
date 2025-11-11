import React, { useEffect, useState } from "react";

const MyComplaints = () => {
  const [complaints, setComplaints] = useState([]);


  return (
    <div>
      <h2>My Complaints</h2>
      {complaints.length === 0 ? (
        <p>No complaints found.</p>
      ) : (
        complaints.map((c, i) => (
          <div key={i}>
            <h3>{c.category}</h3>
            <p>{c.description}</p>
            <p>Status: {c.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyComplaints;
