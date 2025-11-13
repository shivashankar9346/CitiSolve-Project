import React from 'react'

const AdminDashboard = () => {
  return (
    <div>
      <div>

      </div>
      <div className='counter-cards'>
        <div>
          <p>Total Complaints</p>
        </div>
        <div>
          <p>Open</p>
        </div>
        <div>
          <p>InProgress</p>
        </div>
        <div>
          <p>Resolved</p>
        </div>
      </div>
      <div>
        <input type="text"  placeholder='Search Complaints by ID'/>
          <select name="" id="filtering-options">
          <option value="All Status">All Status</option>
          <option value="Open">Open</option>
          <option value="Inprogess">Inprogess</option>
          <option value="Resolved">Resolved</option>
        </select>

           <select>
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
      </div>
      
    </div>
  )
}

export default AdminDashboard