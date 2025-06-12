"use client";
import { createContext, useContext, useState } from "react";
// Autre import
import { loginUser } from "../utils/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  const login = async (username, password) => {
    try {
      const data = await loginUser(username, password);
      const { token } = data;

      if (token) {
        setAccessToken(token);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return <AuthContext.Provider value={{ accessToken, login }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
