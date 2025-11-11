import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [login,setLogin] = useState(false);
  const [register , setRegister] = useState(false);


  return (
    <UserContext.Provider value={{ user,setUser, login,setLogin, register,setRegister }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
