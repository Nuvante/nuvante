"use client";
import { createContext, useState, useEffect } from "react";
import React from "react";
import axios from "axios";

interface GlobalContextType {
  GlobalWishlist: string[];
  GlobalCart: string[];
  changeGlobalWishlist: (updatedWishlist: string[]) => void;
  changeGlobalCart: (element: any) => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [GlobalWishlist, setGlobalWishlist] = useState<string[]>([]);
  const [GlobalCart, setGlobalCart] = useState<any[]>([]);

  const changeGlobalWishlist = (updatedWishlist: string[]) => {
    setGlobalWishlist([...updatedWishlist]);
  };

  const changeGlobalCart = (element: any) => {
    setGlobalCart([...GlobalCart, element]);
    (async () => {
      const response = await axios.get(
        "https://nuventa.vercel.app/api/propagation_client"
      );
      setGlobalWishlist(response.data.wishlist);
      setGlobalCart(response.data.cart || []);
    })();
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://nuventa.vercel.app/api/propagation_client"
      );
      setGlobalWishlist(
        response.data.wishlist === null ? [] : response.data.wishlist
      );
      setGlobalCart(response.data.cart || []);
    })();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        GlobalWishlist,
        GlobalCart,
        changeGlobalWishlist,
        changeGlobalCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
