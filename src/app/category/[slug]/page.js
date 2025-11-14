"use client";
import React, { useState } from "react";
import ProductCard from "@/components/home/product-card";
import { products } from "@/data/products";

export default function CategoryPage({ params }) {
  const { category } = params;

  const slugToFa = {
    man: "مردانه",
    woman: "زنانه",
    kid: "بچگانه",
    sport: "ورزشی",
  };

  const faCategory = slugToFa[category]; 

  if (!faCategory) {
    return (
      <div className="mx-6 md:mx-10 my-10">
        <h1 className="text-2xl font-bold text-red-600">
          دسته‌بندی پیدا نشد
        </h1>
      </div>
    );
  }

  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const categoryProducts = products.filter(
    (p) => p.category === faCategory
  );

  const totalPages = Math.ceil(categoryProducts.length / pageSize);

  const displayedProducts = categoryProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="mx-6 md:mx-10 my-10">
      <h1 className="text-2xl font-bold mb-4">دسته: {faCategory}</h1>
      <p className="text-gray-500 mb-6">
        {categoryProducts.length} محصول یافت شد
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded-md ${
                currentPage === i + 1
                  ? "bg-amber-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
