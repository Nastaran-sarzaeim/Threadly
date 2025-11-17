"use client";

import { Filter } from "iconsax-react";
import { useState, useEffect } from "react";
import { useSearch } from "../home/context/search-context";
import { usePathname } from "next/navigation";

export default function FilterBar() {
  const { query, searchProducts, setQuery } = useSearch();
  const [category, setCategory] = useState("همه");
  const pathname = usePathname();

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    searchProducts(query, value);
  };

  const handleSearchChange = (e) => {
    const text = e.target.value;
    searchProducts(text, category);
  };

  useEffect(() => {
    setCategory("همه");
    searchProducts("", "همه");
    setQuery("")
  }, [pathname]);

  return (
    <div className="flex flex-col md:flex-row justify-between bg-orange-50 p-4 rounded-xl mb-6 text-sm mx-4 md:mx-10 gap-4 md:gap-0">
      <div className="flex flex-row sm:items-center gap-2 flex-1">
        <Filter size={24} color="black" />
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="جستجو محصولات..."
          className="border-b px-2 py-1 w-full md:w-auto"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-3">
        <div className="flex items-center gap-1">
          <span>دسته‌بندی:</span>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="border-b px-2 py-1"
          >
            <option>همه</option>
            <option>زنانه</option>
            <option>مردانه</option>
            <option>بچگانه</option>
          </select>
        </div>
      </div>
    </div>
  );
}
