"use client";
import { ShoppingCart, Trash } from "iconsax-react";
import { useState } from "react";
import Link from "next/link";
import { useUser } from "../login/context/user-context";
import { formatPrice, parsePriceToNumber } from "@/utils/utils";
import { useSnackbar } from "notistack";
import CustomAlert from "../alert/custom-alert";

export default function HoverCart() {
    const { user, removeFromCart } = useUser();
    const cart = user?.cart || [];
    const [open, setOpen] = useState(false);

    const total = cart.reduce((sum, item) => sum + parsePriceToNumber(item.price) * item.qty, 0);
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const { enqueueSnackbar } = useSnackbar();

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <div className="cursor-pointer relative">
                <ShoppingCart
                    size={20}
                    color="#171717"
                    className="cursor-pointer hover:text-yellow-700 hover:scale-110 transition-transform duration-300"
                />
                {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {totalItems}
                    </span>
                )}
            </div>

            {open && (
                <div className="absolute left-0 top-5 w-80 bg-amber-50 shadow-xl p-4 z-50 rounded-2xl">
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
            )}
        </div>
    );
}
