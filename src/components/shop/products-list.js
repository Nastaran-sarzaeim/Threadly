"use client";
import React from "react";
import ProductCard from "../home/product-card";

export default function ProductList({ products }) {
  return (
    <div className="mx-10">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-10">
        <button className="px-3 py-1 rounded-md bg-amber-600 text-white">۱</button>
        <button className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200">۲</button>
        <button className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200">۳</button>
        <button className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200">بعدی</button>
      </div>
    </div>
  );
}
