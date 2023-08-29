"use client";

import { createContext, useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";

export const cartContext = createContext();

export default function AuthProvider({ children }) {
  const [cartItem, setCartItem] = useState(0);

  useEffect(() => {
    const cartData = JSON.parse(sessionStorage.getItem("cartCours"));
    if (cartData) {
      setCartItem(cartData.length);
    }
  }, []);

  return (
    <SessionProvider >
      <cartContext.Provider value={{ cartItem, setCartItem }}>
        {children}
      </cartContext.Provider>
    </SessionProvider>
  );
}
