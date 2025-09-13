import React from "react";
import { getProducts } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaHeart, FaStar } from "react-icons/fa";

const Carousel = () => {
  const { products, addToCart } = getProducts();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return products && products.length > 0 ? (
    <Slider {...settings}>
      {products.slice(0, 5).map((product) => (
        <div key={product.id} className="p-4">
          <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 p-6 rounded-2xl shadow-2xl flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-3xl relative">
            {/* Favorite Button */}
            <button className="absolute top-4 left-4 text-pink-500 hover:text-pink-700 transition-colors">
              <FaHeart size={22} />
            </button>
            {/* Product Image with Blur Background */}
            <div className="relative w-full flex justify-center mb-4">
              <div className="absolute inset-0 blur-lg opacity-30">
                <img src={product.image} alt="" className="h-40 object-contain mx-auto" />
              </div>
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain relative z-10 drop-shadow-xl"
              />
              <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full shadow">
                {product.category}
              </span>
            </div>
            {/* Product Title */}
            <h2 className="font-extrabold text-xl text-center mb-2 line-clamp-2 text-gray-900">
              {product.title}
            </h2>
            {/* Rating Stars */}
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
            <p className="text-2xl font-black text-blue-700 mb-2">${product.price}</p>
            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product)}
              className="mt-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-2 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-900 transition-all font-semibold"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </Slider>
    
  ) : (
    <div className="text-center py-10 text-lg font-semibold">
      Loading products...
    </div>
    
  );
};
export default Carousel;
