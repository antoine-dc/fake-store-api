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
      <h1 className="text-2xl font-bold text-gray-800 mb-4 dark:text-red-900">
        Nos Produits !
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div
        data-configuration="Small"
        data-elevation="Flat"
        data-show-1st-trailing-action="true"
        data-show-2nd-trailing-action="true"
        data-show-3rd-trailing-action="false"
        className="w-[817px] h-16 px-3 py-2 relative inline-flex justify-between items-center"
      >
        <div
          data-show-focus-indicator="false"
          data-size="Small"
          data-state="Enabled"
          data-type="Round"
          data-width="Default"
          className="w-12 h-12 flex justify-center items-center"
        >
          <div className="w-10 rounded-[100px] inline-flex flex-col justify-center items-center overflow-hidden">
            <div className="self-stretch h-10 inline-flex justify-center items-center">
              <div className="w-6 h-6 relative overflow-hidden">
                <div className="w-4 h-4 left-[4px] top-[4px] absolute bg-Schemes-On-Surface" />
              </div>
            </div>
          </div>
        </div>
        <div
          data-alignment="Left"
          data-show-supporting-text="false"
          data-size="Small"
          className="w-[705px] left-[56px] top-[18px] absolute inline-flex flex-col justify-center items-start"
        >
          <div className="self-stretch justify-center text-Schemes-On-Surface text-xl font-normal font-['Roboto'] leading-7 line-clamp-1">
            Label
          </div>
        </div>
        <div className="h-12 flex justify-end items-center overflow-hidden">
          <div
            data-show-focus-indicator="false"
            data-size="Small"
            data-state="Enabled"
            data-type="Round"
            data-width="Default"
            className="w-12 h-12 flex justify-center items-center"
          >
            <div className="w-10 rounded-[100px] inline-flex flex-col justify-center items-center overflow-hidden">
              <div className="self-stretch h-10 inline-flex justify-center items-center">
                <div className="w-6 h-6 relative overflow-hidden">
                  <div className="w-3.5 h-4 left-[5px] top-[3px] absolute bg-Schemes-On-Surface-Variant" />
                </div>
              </div>
            </div>
          </div>
          <div
            data-show-focus-indicator="false"
            data-size="Small"
            data-state="Enabled"
            data-type="Round"
            data-width="Default"
            className="w-12 h-12 flex justify-center items-center"
          >
            <div className="w-10 rounded-[100px] inline-flex flex-col justify-center items-center overflow-hidden">
              <div className="self-stretch h-10 inline-flex justify-center items-center">
                <div className="w-6 h-6 relative overflow-hidden">
                  <div className="w-1 h-4 left-[10px] top-[4px] absolute bg-Schemes-On-Surface-Variant" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
