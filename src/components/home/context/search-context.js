"use client";
import { createContext, useContext, useState } from "react";
import { products } from "@/data/products";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("همه");
  const [results, setResults] = useState([]);

  const searchProducts = (text = "", cat = category) => {
    setQuery(text);
    setCategory(cat);

    let filtered = products;

    if (text.trim()) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
    }

    if (cat !== "همه") {
      filtered = filtered.filter((item) => item.category === cat);
    }

    setResults(filtered);
  };

  return (
    <SearchContext.Provider value={{ query, category, results, searchProducts, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
