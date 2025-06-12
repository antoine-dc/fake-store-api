"use client";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { accessToken, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      router.push("/login");
    }
  }, [accessToken, router]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg px-8 py-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Profile</h2>
        <p className="mb-4">Welcome to your profile!</p>
        <p className="text-sm text-gray-600">Access token: {accessToken}</p>
        <button
          onClick={logout}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
