"use client";
import { createContext, useContext, useState } from "react";
import { products } from "@/data/products";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchProducts = (text) => {
    setQuery(text);

    if (!text.trim()) {
      setResults([]);
      return;
    }

    const filtered = products.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <SearchContext.Provider value={{ query, results, searchProducts }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
