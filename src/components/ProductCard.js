import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
      <img src={product.image} alt={product.title} className="h-40 w-auto mx-auto object-contain mb-4" />
      <h2 className="text-lg font-semibold">
        <Link href={`/products/${product.id}`}>{product.title}</Link>
      </h2>
      <p className="text-gray-600 mt-2">{product.price} €</p>
      <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition-colors">
        Ajouter au panier
      </button>
    </div>
  );
}
