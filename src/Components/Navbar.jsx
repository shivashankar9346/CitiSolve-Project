import React from 'react';
import { useUser } from '../context/userContext';
import { NavLink,useNavigate } from 'react-router-dom';
import { FaBuildingColumns } from "react-icons/fa6";
import './navbar.css';

const Navbar = () => {
  const { user, logout} = useUser();

    const navigate = useNavigate();

  const handleLogout = () => {
    logout()
    navigate('/'); 
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2><FaBuildingColumns /> CitiSolve</h2>
      </div>

      <div className="navbar-center">
        {user && (
          <>
            <NavLink to="/submitComplaint" className="submit-complaints-btn">Submit Complaint</NavLink>
            <NavLink to="/myComplaints" className="my-complaints-btn">My Complaints</NavLink>
          </>
        )}
      </div>

      <div className="navbar-right">
        {!user ? (
          <>
            <NavLink to="/login" className="login-btn">Login</NavLink>
            <NavLink to="/register" className="register-btn">Register</NavLink>
          </>
        ) : (
          <>
            <p className="welcome-text">Welcome, <strong>{user.name || user.email}</strong></p>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;