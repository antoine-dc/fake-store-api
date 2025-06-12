"use client";
import { createContext, useContext, useState } from "react";
// Autre import
import { loginUser } from "../utils/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    try {
      const data = await loginUser(username, password);
      const { token } = data;

      if (token) {
        setAccessToken(token);
        setError(null);
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("An error occurred while logging in");
      console.error(error);
    }
  };

  const logout = () => {
    setAccessToken(null);
    setError(null);
  };
  return <AuthContext.Provider value={{ accessToken, login, logout, error }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
