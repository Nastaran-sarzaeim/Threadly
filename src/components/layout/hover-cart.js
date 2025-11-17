"use client";
import { ShoppingCart } from "iconsax-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function HoverCart() {
    const [cart, setCart] = useState([]);
    const [open, setOpen] = useState(false);
    const cartRef = useRef(null);

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedInUser?.cart) setCart(loggedInUser.cart);
    }, []);

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            ref={cartRef}
        >
            <div className="cursor-pointer hover:text-yellow-700 transition">
                <ShoppingCart size={20} color="#171717" className="cursor-pointer hover:text-yellow-700 hover:scale-110 transition-transform duration-300" />
            </div>
            {/* {open && (
                <div className="fixed inset-0 bg-black/40 z-40 animate-fadeIn" ></div>
            )} */}
            {open && (
                <div className="absolute left-0 top-5 w-80 bg-amber-50 shadow-xl p-4 z-50 animate-fadeIn rounded-2xl">
                    <h3 className="text-lg font-semibold mb-3 text-gray-700">سبد خرید</h3>

                    <div className="max-h-64 overflow-y-auto pr-2">
                        {cart.length === 0 && (
                            <p className="text-gray-500 text-center py-4">
                                سبد خرید خالی است.
                            </p>
                        )}

                        {cart.map((item) => (
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
                                        {item.qty} عدد × {item.price.toLocaleString("fa-IR")}
                                    </p>
                                </div>

                                <span className="text-yellow-700 font-semibold text-sm">
                                    {(item.price * item.qty).toLocaleString("fa-IR")}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t my-3"></div>

                    <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">جمع کل:</span>
                        <span className="text-yellow-700 font-semibold text-lg">
                            {total.toLocaleString("fa-IR")} تومان
                        </span>
                    </div>

                    <Link href="/checkout">
                        <button className="w-full mt-3 bg-yellow-700 text-white py-2 rounded-xl font-medium hover:bg-yellow-800 transition">
                            مشاهده سبد خرید
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}
