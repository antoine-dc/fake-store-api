"use client";

import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "../utils/api"; // <------

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      //
      const data = await getProducts(); //
      setProducts(data); //  <-------
      console.log(data);
    }; //
    getAllProducts(); //
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Nos Produits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
