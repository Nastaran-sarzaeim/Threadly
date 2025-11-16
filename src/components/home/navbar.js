"use client";

import Link from "next/link";
import { SearchNormal, ShoppingCart, User } from "iconsax-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  { name: "خانه", href: "/" },
  { name: "فروشگاه", href: "/shop" },
  // { name: "دسته بندی", href: "/category" },
  { name: "درباره ما", href: "/about" },
  { name: "تماس با ما", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const data = localStorage.getItem("loggedInUser");
    if (data) setUser(JSON.parse(data));
  }, []);

  const [user, setUser] = useState(null);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };
  return (
    <nav className="flex items-center justify-between py-4 px-8 shadow-sm bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-yellow-700">Threadly</h1>

      <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
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
            <Link
              href={item.href}
              className={`mr-2 transition-colors duration-300 ${pathname === item.href ? "text-yellow-700" : "hover:text-yellow-700"
                }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 text-black">
        {mounted && !user && (
          <Link href="/login" className="hover:text-yellow-700 transition">
            ورود / ثبت‌نام
          </Link>
        )}


        {mounted && user && (
          <div className="group relative">
            <span className="cursor-pointer font-medium hover:text-yellow-700 transition">
              {user.username}
            </span>

            <div className="absolute left-0 w-28 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition bg-white border rounded shadow-sm p-2">
              <Link href={user.role === "admin" ? "/dashboard-admin" : "/profile"} onClick={() => {

              }} className="block hover:text-yellow-700 py-1">
                پروفایل
              </Link>
              <button
                onClick={logout}
                className="block text-left w-full hover:text-yellow-700 py-1"
              >
                خروج
              </button>
            </div>
          </div>
        )}
        {/* <Link href="/login">
          <User size={20} color="#171717" className="cursor-pointer hover:text-yellow-700 hover:scale-110 transition-transform duration-300" />
        </Link> */}
        <Link href="/">
          <SearchNormal size={20} color="#171717" className="cursor-pointer hover:text-yellow-700 hover:scale-110 transition-transform duration-300" />
        </Link>
        <Link href="/checkout">
          <ShoppingCart size={20} color="#171717" className="cursor-pointer hover:text-yellow-700 hover:scale-110 transition-transform duration-300" />
        </Link>
      </div>
    </nav>
  );
}
