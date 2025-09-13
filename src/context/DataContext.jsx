import React, { createContext, useState, useEffect, use, useContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products once
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <DataContext.Provider value={{ products, cart, addToCart }}>
      {children}
    </DataContext.Provider>
  );
};
export const getProducts = () => useContext(DataContext);