import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { getProducts } from "../context/DataContext";


const ProductCard = ({ product, addToCart }) => (
  <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 p-5 rounded-2xl shadow-xl flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative">
    {/* Favorite Button */}
    <button className="absolute top-4 left-4 text-pink-500 hover:text-pink-700 transition-colors">
      <FaHeart size={20} />
    </button>
    {/* Product Image */}
    <img
      src={product.image}
      alt={product.title}
      className="h-32 object-contain mb-4 drop-shadow-lg"
    />
    {/* Category Badge */}
    <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full shadow">
      {product.category}
    </span>
    {/* Title */}
    <h2 className="font-bold text-lg text-center mb-2 line-clamp-2 text-gray-800">
      {product.title}
    </h2>
    {/* Rating */}
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i < Math.round(product.rating?.rate || 0) ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
      <span className="ml-2 text-sm text-gray-500">({product.rating?.count || 0})</span>
    </div>
    {/* Price */}
    <p className="text-xl font-extrabold text-blue-700 mb-2">${product.price}</p>
    {/* Add to Cart Button */}
    <button
      className="mt-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg shadow hover:from-blue-700 hover:to-blue-900 transition-colors font-semibold"
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;