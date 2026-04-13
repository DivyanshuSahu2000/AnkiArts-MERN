import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };
  const signUp = (userData) => login(userData);
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <>
      <AuthContext.Provider value={{ user, setUser, login, signUp, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export { AuthContext, AuthProvider };
