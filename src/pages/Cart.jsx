import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Cart = () => {
  const { cart } = useContext(DataContext);

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">🛒 Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="space-y-3">
          {cart.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between bg-white p-3 rounded-lg shadow"
            >
              <span>{item.title}</span>
              <span className="font-bold">${item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

