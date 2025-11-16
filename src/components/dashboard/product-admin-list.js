"use client";
import { useState } from "react";

export default function ProductAdminList({ products, handleDeleteProduct }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const filteredProducts = currentProducts.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="جستجو محصولات..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="border p-2 rounded mb-4 w-full"
      />
      <h3 className="text-xl font-bold mb-4">لیست محصولات</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white p-4 shadow rounded">
            <h4 className="font-bold">{product.title}</h4>
            <p>{product.description}</p>
            <p className="font-semibold">قیمت: ${product.price}</p>
            <p className="text-sm text-gray-500">دسته‌بندی: {product.category}</p>
            <button
              onClick={() => handleDeleteProduct(product.id)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              حذف
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-yellow-700 text-white rounded disabled:opacity-50 hover:bg-yellow-800"
        >
          قبلی
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          if (
            page === 1 ||
            page === totalPages ||
            (page >= currentPage - 1 && page <= currentPage + 1)
          ) {
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page
                    ? "bg-yellow-800 text-white"
                    : "bg-yellow-600 text-white hover:bg-yellow-700"
                }`}
              >
                {page}
              </button>
            );
          } else if (
            (page === currentPage - 2 && page > 2) ||
            (page === currentPage + 2 && page < totalPages - 1)
          ) {
            return <span key={page} className="px-2 py-1">…</span>;
          } else {
            return null;
          }
        })}

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-yellow-700 text-white rounded disabled:opacity-50 hover:bg-yellow-800"
        >
          بعدی
        </button>
      </div>
    </div>
  );
}
