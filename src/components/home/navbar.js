"use client";

import { SearchNormal, ShoppingCart, User } from "iconsax-react";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "خانه", href: "/" },
  { name: "فروشگاه", href: "/shop" },
  { name: "دسته بندی", href: "/category" },
  { name: "درباره ما", href: "/about" },
  { name: " تماس با ما", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between py-4 px-8 shadow-sm bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-yellow-700">Threadly</h1>

      <ul className="flex items-center gap-8 text-gray-700 font-medium">
        {menuItems.map((item) => (
          <li key={item.name} className="flex flex-row items-center cursor-pointer">
            {(pathname === item.href) && (
              <div
                className={`
            rounded-full w-1 h-1 mr-2 
            ${pathname === item.href ? "bg-yellow-700" : "bg-gray-700"} 
             transition-opacity duration-300
          `}
              ></div>
            )}
            <a
              href={item.href}
              className={`mr-2 transition-colors duration-300 ${pathname === item.href ? "text-yellow-700" : "hover:text-yellow-700"
                }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 text-black">
        <a
          href='/login'
        >
          <User size={20} color="#171717" className="cursor-pointer hover:text-yellow-700 hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href='/'
        >
          <SearchNormal size={20} color="#171717" className="cursor-pointer hover:text-yellow-700 hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href='/checkout'
        >
          <ShoppingCart size={20} color="#171717" className="cursor-pointer hover:text-yellow-700 hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
    </nav>
  );
}
