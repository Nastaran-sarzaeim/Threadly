"use client";
import React, { useState } from "react";
import ProductCard from "../home/product-card";
import { useSearch } from "../home/context/search-context";

export default function ProductList({ products }) {
  const { results } = useSearch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const totalPages = Math.ceil(results.length / itemsPerPage);
  const currentProducts = results.slice(startIndex, endIndex);

  return (
    <div className="mx-10">
      {currentProducts.length === 0 && (
        <p className="text-center text-gray-600 mt-4 h-80 items-center justify-center flex">
          هیچ محصولی یافت نشد
        </p>
      )}

      {currentProducts.length > 0 && (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      {currentProducts.length > 8 && (
      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md ${currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          قبلی
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1 rounded-md ${currentPage === i + 1
              ? "bg-amber-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md ${currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          بعدی
        </button>
      </div>
      )}
    </div>
  );
}
