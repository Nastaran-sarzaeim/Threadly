"use client";
import React from "react";
import { formatPrice } from "@/utils/utils";
import Link from "next/link";

export default function ProductCard({ product }) {
    const { id, name, images, price, oldPrice, tag } = product;

    const getTagColor = (tag) => {
        if (tag === "جدید") return "bg-green-700";
        if (tag.includes("٪")) return "bg-red-700";
        return "bg-yellow-700";
    };
    const handleAddToCart = () => {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (!loggedInUser) {
          alert("لطفاً ابتدا وارد شوید!");
          return;
        }
    
        const cart = loggedInUser.cart || [];
        const existingIndex = cart.findIndex(item => item.id === id);
    
        if (existingIndex !== -1) {
          cart[existingIndex].qty += 1; 
        } else {
          cart.push({ ...product, qty: 1 });
        }
    
        loggedInUser.cart = cart;
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userIndex = users.findIndex(u => u.username === loggedInUser.username);
        if (userIndex !== -1) {
          users[userIndex].cart = cart;
          localStorage.setItem("users", JSON.stringify(users));
        }
    
        alert(`محصول "${name}" به سبد خرید اضافه شد!`);
      };

    return (
        <div
            key={id}
            className="relative group bg-white rounded-lg overflow-hidden shadow-sm"
        >
            <div className="relative group/image">
                <img
                    src={images[0]}
                    alt={name}
                    className="w-full h-72 object-cover group-hover/image:opacity-75 transition-all duration-300"
                />
                {tag && (
                    <span
                        className={`absolute top-3 left-3 text-white text-xs px-2 py-1 rounded ${getTagColor(
                            tag
                        )}`}
                    >
                        {tag}
                    </span>
                )}
                <Link
                    href={`/shop/${id}`}
                    className="absolute inset-0 bg-black/20 group-hover/image:bg-black/50 flex items-center justify-center text-white text-lg font-semibold transition-all duration-300 opacity-0 group-hover/image:opacity-100 cursor-pointer"
                >
                    مشاهده جزئیات
                </Link>
            </div>

            <div className="p-4 text-right">
                <h3 className="font-semibold text-gray-700 mb-2">{name}</h3>
                <div className="flex flex-row justify-between items-center">
                    <p className="text-yellow-700 font-bold">{formatPrice(price)} تومان</p>
                    {oldPrice && (
                        <p className="text-gray-400 line-through text-sm">
                            {formatPrice(oldPrice)} تومان
                        </p>
                    )}
                </div>
            </div>

            <div className="flex justify-center items-center mb-6">
                <button
                    onClick={handleAddToCart}
                    className="flex items-center justify-center text-yellow-700 bg-white rounded px-4 py-1 border-yellow-700 border cursor-pointer hover:bg-yellow-700 hover:text-white hover:border-white duration-500">
                    اضافه کردن به سبد
                </button>
            </div>
        </div>
        // <div key={p.id} className="relative group bg-white rounded-lg overflow-hidden shadow-sm">
        //              <div className="relative group/image">
        //                <img
        //                  src={p.image}
        //                  alt={p.name}
        //                  className="w-full h-72 object-cover group-hover/image:opacity-75 transition-all duration-300"
        //                />
        //                {p.tag && (
        //                  <span
        //                    className={`absolute top-3 left-3 text-white text-xs px-2 py-1 rounded ${p.tag === "جدید"
        //                        ? "bg-green-700"
        //                        : p.tag.includes("٪")
        //                          ? "bg-red-700"
        //                          : "bg-yellow-700"
        //                      }`}
        //                  >
        //                    {p.tag}
        //                  </span>
        //                )}

        //                <button className="absolute inset-0 bg-black/20 group-hover/image:bg-black/50 flex items-center justify-center text-white text-lg font-semibold transition-all duration-300 opacity-0 group-hover/image:opacity-100 cursor-pointer">
        //                  مشاهده جزئیات
        //                </button>
        //              </div>

        //              <div className="p-4 text-right">
        //                <h3 className="font-semibold text-gray-700 mb-2">{p.name}</h3>
        //                <div className="flex flex-row justify-between items-center">
        //                  <p className="text-yellow-700 font-bold">
        //                    {formatPrice(p.price)} تومان
        //                  </p>
        //                  {p.oldPrice && (
        //                    <p className="text-gray-400 line-through text-sm">
        //                      {formatPrice(p.oldPrice)} تومان
        //                    </p>
        //                  )}
        //                </div>
        //              </div>

        //              <div className="flex justify-center items-center mb-6">
        //                <button className="flex items-center justify-center text-yellow-700 bg-white rounded px-4 py-1 border-yellow-700 border cursor-pointer hover:bg-yellow-700 hover:text-white hover:border-white duration-500">
        //                  اضافه کردن به سبد
        //                </button>
        //              </div>
        //            </div>
    );
}
