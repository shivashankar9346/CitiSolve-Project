// src/context/userContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { authAPI, complaintAPI } from "../server/Api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { id, name, email, role }
  const [complaints, setComplaints] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);

  // Restore user from token on page refresh
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoadingUser(false);
      return;
    }

    authAPI
      .me()
      .then((u) => {
        // backend returns: { _id, name, email, role }
        setUser({
          id: u._id,
          name: u.name,
          email: u.email,
          role: u.role,
        });
      })
      .catch(() => {
        localStorage.removeItem("token");
      })
      .finally(() => setLoadingUser(false));
  }, []);

  /* ============================
            REGISTER
  ============================== */
  const registerUser = async ({ name, email, password, role }) => {
    const res = await authAPI.register({ name, email, password, role });
    // backend returns: { _id, name, email, role, token }

    localStorage.setItem("token", res.token);

    const newUser = {
      id: res._id,
      name: res.name,
      email: res.email,
      role: res.role,
    };

    setUser(newUser);
    return newUser;
  };

  /* ============================
              LOGIN
  ============================== */
  const login = async ({ email, password }) => {
    const res = await authAPI.login({ email, password });

    // backend returns:
    // { token, user: { id, name, email, role } }
    localStorage.setItem("token", res.token);

    const loggedUser = {
      id: res.user.id,
      name: res.user.name,
      email: res.user.email,
      role: res.user.role,
    };

    setUser(loggedUser);
    return loggedUser;
  };

  /* ============================
              LOGOUT
  ============================== */
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setComplaints([]);
  };

  /* ============================
          FETCH COMPLAINTS
  ============================== */
  const fetchComplaints = async () => {
    const data = await complaintAPI.list();
    setComplaints(data || []);
    return data || [];
  };

  /* ============================
          ADD COMPLAINT
  ============================== */
  const addComplaint = async (payload) => {
    const res = await complaintAPI.create(payload);
    setComplaints((prev) => [...prev, res]);
    return res;
  };

  /* ============================
        ADMIN: UPDATE STATUS
  ============================== */
  const updateComplaintStatus = async (id, payload) => {
    const res = await complaintAPI.updateStatus(id, payload);
    await fetchComplaints();
    return res;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loadingUser,
        registerUser,
        login,
        logout,
        complaints,
        fetchComplaints,
        addComplaint,
        updateComplaintStatus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
