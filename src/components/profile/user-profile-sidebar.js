"use client";
import React from "react";

export default function UserProfileSidebar({ selectedTab, setSelectedTab }) {
  return (
    <div className="w-64 bg-gray-50 p-4 shadow-lg h-screen fixed left-0 top-0">
      <h3 className="text-xl font-bold mb-6">پروفایل کاربر</h3>
      <ul className="flex flex-col gap-2">
        <li>
          <button
            onClick={() => setSelectedTab("account")}
            className={`w-full text-right px-3 py-2 rounded ${
              selectedTab === "account" ? "bg-yellow-700 text-white" : "hover:bg-gray-200"
            }`}
          >
            اطلاعات حساب
          </button>
        </li>
        <li>
          <button
            onClick={() => setSelectedTab("cart")}
            className={`w-full text-right px-3 py-2 rounded ${
              selectedTab === "cart" ? "bg-yellow-700 text-white" : "hover:bg-gray-200"
            }`}
          >
            سبد خرید
          </button>
        </li>
        <li>
          <button
            onClick={() => setSelectedTab("orders")}
            className={`w-full text-right px-3 py-2 rounded ${
              selectedTab === "orders" ? "bg-yellow-700 text-white" : "hover:bg-gray-200"
            }`}
          >
            سفارش‌ها
          </button>
        </li>
      </ul>
    </div>
  );
}
