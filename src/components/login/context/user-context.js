"use client";
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("loggedInUser"));
    if (stored) setUser(stored);
  }, []);

  const login = (userData) => {
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  const updateCart = (cart) => {
    if (!user) return;
    const updated = { ...user, cart };
    localStorage.setItem("loggedInUser", JSON.stringify(updated));
    setUser(updated);
  };

  const removeFromCart = (id) => {
    if (!user || !user.cart) return;
  
    const filtered = user.cart.filter((item) => item.id !== id);
    const updated = { ...user, cart: filtered };
  
    localStorage.setItem("loggedInUser", JSON.stringify(updated));
    setUser(updated);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateCart, removeFromCart }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
