"use client";
import React from "react";
import { useEffect, useState } from "react";
import { getProductById } from "../../../utils/api";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Product({ params }) {
  const { id } = React.use(params);
  const [product, setProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      getProductById(id)
        .then((data) => setProduct(data))
        .catch((error) =>
          console.error("Erreur lors de la récupération du produit", error),
        );
    }
  }, [id]);

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <button
        onClick={() => router.push("/")}
        className="bg-gray-500 text-white py-2 px-4 rounded mb-4"
      >
        Retour
      </button>
      <h1 className="text-3xl font-bold mb-4">Détails du produit</h1>
      {product ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <Image
              src={product.image}
              alt={product.title}
              className="w-full h-auto max-w-md rounded-lg shadow-md"
              width={200}
              height={200}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">{product.title}</h2>
            <p className="text-lg text-gray-700">{product.description}</p>
            <p className="text-xl font-bold text-gray-800">${product.price}</p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition">
              Ajouter au panier
            </button>
          </div>
        </div>
      ) : (
        <p>Chargement des détails du produit...</p>
      )}
    </div>
  );
}
