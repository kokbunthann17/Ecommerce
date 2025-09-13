import React from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../context/DataContext";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
const Products = () => {
  const { products, addToCart } = useContext(DataContext);
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-lg font-semibold">
            Loading products...
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
