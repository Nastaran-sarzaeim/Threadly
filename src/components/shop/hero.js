"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-64 overflow-hidden mb-8">
      <img
        src="/store/store-1.jpg"
        alt="فروشگاه"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute bottom-4 left-6 right-10">
        <nav className="text-sm flex items-center gap-2">
          <Link href="/" className="hover:underline text-gray-400">
            خانه
          </Link>
          <span className="text-white">/</span>
          <span className="text-white">فروشگاه لباس</span>
        </nav>
        <h2 className="text-3xl font-bold mt-2 text-white">فروشگاه لباس</h2>
      </div>
    </div>
  );
}
