"use client";
import React, { useEffect, useState } from "react";
import { formatPrice } from "@/utils/utils";

export default function CartTab() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.cart) {
      setCart(loggedInUser.cart);
    }
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      loggedInUser.cart = updatedCart;
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userIndex = users.findIndex(u => u.username === loggedInUser.username);
      if (userIndex !== -1) {
        users[userIndex].cart = updatedCart;
        localStorage.setItem("users", JSON.stringify(users));
      }
    }
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    updateCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4">سبد خرید</h3>
      {cart.length === 0 ? (
        <p>سبد خرید خالی است.</p>
      ) : (
        <div className="flex flex-col gap-3 max-w-md">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center border p-2 rounded">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm">تعداد: {item.qty}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-bold">{formatPrice(item.price * item.qty)} تومان</p>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 text-sm"
                >
                  حذف
                </button>
              </div>
            </div>
          ))}
          <hr className="my-2"/>
          <p className="font-bold">جمع کل: {formatPrice(total)} تومان</p>
        </div>
      )}
    </div>
  );
}
