"use client";
import { useState } from "react";

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg text-gray-700">{product.price}</p>

      <div className="flex items-center gap-1 text-yellow-500">
        {"★".repeat(Math.floor(product.rating))}
        {"☆".repeat(5 - Math.floor(product.rating))}
        <span className="text-gray-600 text-sm">
          ({product.reviews} نظر)
        </span>
      </div>
      <div>
        <p>
          {product.description}
        </p>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">اندازه</h3>
        <div className="flex gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              className="border rounded-full px-3 py-1 hover:bg-gray-100 transition"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">رنگ</h3>
        <div className="flex gap-3">
          {product.colors.map((color) => (
            <div
              key={color}
              className="w-6 h-6 rounded-full cursor-pointer border border-gray-300"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="border rounded-full w-8 h-8 flex justify-center items-center"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="border rounded-full w-8 h-8 flex justify-center items-center"
        >
          +
        </button>
        <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}
