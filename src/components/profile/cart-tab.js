"use client";
import React, { useEffect, useState } from "react";
import { formatPrice, parsePriceToNumber } from "@/utils/utils";
import CustomAlert from "../alert/custom-alert";
import { useSnackbar } from "notistack";
import { Trash } from "iconsax-react";
import { useUser } from "../login/context/user-context";
import Link from "next/link";


export default function CartTab() {
  const { enqueueSnackbar } = useSnackbar();

  // useEffect(() => {
  //   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  //   if (loggedInUser && loggedInUser.cart) {
  //     setCart(loggedInUser.cart);
  //   }
  // }, []);

  // const updateCart = (updatedCart) => {
  //   setCart(updatedCart);

  //   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  //   if (loggedInUser) {
  //     loggedInUser.cart = updatedCart;
  //     localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

  //     const users = JSON.parse(localStorage.getItem("users")) || [];
  //     const userIndex = users.findIndex(u => u.username === loggedInUser.username);
  //     if (userIndex !== -1) {
  //       users[userIndex].cart = updatedCart;
  //       localStorage.setItem("users", JSON.stringify(users));
  //     }
  //   }
  // };

  // const handleRemove = (id) => {
  //   const updatedCart = cart.filter(item => item.id !== id);
  //   updateCart(updatedCart);
  // };

  const { user, removeFromCart } = useUser();
  const cart = user?.cart || [];
  const [open, setOpen] = useState(false);

  const total = cart.reduce((sum, item) => sum + parsePriceToNumber(item.price) * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  // const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="w-full shadow-xl p-4 z-50 rounded-2xl">
      <h3 className="text-lg font-semibold mb-3 text-gray-700">سبد خرید</h3>

      <div className="max-h-64 overflow-y-auto pr-2">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            سبد خرید خالی است.
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4"
            >
              <img
                src={item.images[0]}
                className="w-14 h-14 rounded-lg object-cover bg-gray-100"
              />

              <div className="flex-1 mr-3">
                <p className="text-gray-800 text-sm font-medium">{item.name}</p>
                <p className="text-gray-500 text-xs">
                  {item.qty} عدد ×{" "}
                  {formatPrice(item.price)}
                </p>
              </div>

              <div className="flex flex-col items-end gap-2">
                <span className="text-yellow-700 font-semibold text-sm">
                  {formatPrice(parsePriceToNumber(item.price) * item.qty)}
                </span>

                <button
                  onClick={() => {
                    removeFromCart(item.id);
                    enqueueSnackbar(
                      <CustomAlert message={`محصول "${item.name}" از سبد خرید حذف شد!`} type="error" />,
                      { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
                    );
                  }}
                  className="text-red-600 hover:text-red-800 transition cursor-pointer"
                >
                  <Trash size={18} color="red" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="border-t my-3"></div>

      <div className="flex items-center justify-between">
        <span className="text-gray-700 font-medium">جمع کل:</span>
        <span className="text-yellow-700 font-semibold text-lg">
          {formatPrice(total)} تومان
        </span>
      </div>

      <Link href="/checkout">
        <button className="w-full mt-3 bg-yellow-700 text-white py-2 rounded-xl font-medium hover:bg-yellow-800 transition">
          مشاهده سبد خرید
        </button>
      </Link>
    </div>
  );
}
