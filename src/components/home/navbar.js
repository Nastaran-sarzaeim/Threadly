"use client";

import { SearchFavorite, SearchNormal, ShoppingCart, User } from "iconsax-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 shadow-sm bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-yellow-700">Threadly</h1>

      <ul className="flex items-center gap-8 text-gray-700 font-medium">
        <li><a href="/" className="hover:text-yellow-700">Home</a></li>
        <li><a href="/shop" className="hover:text-yellow-700">Shop</a></li>
        <li><a href="/about" className="hover:text-yellow-700">About</a></li>
        <li><a href="/contact" className="hover:text-yellow-700">Contact</a></li>
      </ul>

      {/* <div className="flex items-center gap-4">
        <User className="cursor-pointer hover:text-yellow-700" />
        <User variant="Outline" size={40} color="oklch(68.1% 0.162 75.834)"/>
        <SearchNormal variant="Outline" size={40} color="oklch(68.1% 0.162 75.834)"/>
        <ShoppingCart variant="Outline" size={40} color="oklch(68.1% 0.162 75.834)" />
      </div> */}

      <div className="flex items-center gap-4 text-black">
  <User className="cursor-pointer hover:text-yellow-700" size={20} color="#171717" />
  <SearchNormal className="cursor-pointer hover:text-yellow-700" size={20} color="#171717" />
  <ShoppingCart className="cursor-pointer hover:text-yellow-700" size={20} color="#171717" />
</div>
    </nav>
  );
}
