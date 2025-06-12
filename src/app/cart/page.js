"use client";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cart } = useCart();

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
                <img src={item.image} alt={item.title} className="w-16 h-16" />
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p>{item.price} €</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
