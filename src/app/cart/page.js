"use client";
import { useCart } from "../../context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16"
                  width={200}
                  height={200}
                />
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p>${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-200 text-gray-600 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-200 text-gray-600  rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-1 bg-red-500 text-white rounded"
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
