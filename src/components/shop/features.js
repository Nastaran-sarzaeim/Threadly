"use client";
import React from "react";
import { TickCircle, ShieldTick, Truck, Headphones, ArrowCircleLeft2, DiscountCircle } from "iconsax-react";

export default function Features() {
    const features = [
        {
            title: "کیفیت بالا",
            icon: <TickCircle size="32" color="#F59E0B" variant="Bold" />,
        },
        {
            title: "گارانتی محصول",
            icon: <ShieldTick size="32" color="#F59E0B" variant="Bold" />,
        },
        {
            title: "ارسال رایگان",
            icon: <Truck size="32" color="#F59E0B" variant="Bold" />,
        },
        {
            title: "پشتیبانی ۲۴/۷",
            icon: <Headphones size="32" color="#F59E0B" variant="Bold" />,
        },
        {
            title: "تخفیف ویژه",
            icon: <DiscountCircle size="32" color="#F59E0B" variant="Bold" />,
        },
        {
            title: "بازگشت آسان",
            icon: <ArrowCircleLeft2 size="32" color="#F59E0B" variant="Bold" />,
        },
    ];

    return (
        <div
            className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-10 text-center m-4 md:m-10"
            // className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-10 text-center m-4 md:m-10  bg-orange-50"
        >
            {features.map((f, i) => (
                <div
                    key={i}
                    className="flex flex-col items-center justify-center bg-orange-50 rounded-lg p-4 shadow-sm aspect-square"
                // className="flex flex-col items-center justify-center spect-square"
                >
                    <div className="mb-3">{f.icon}</div>
                    <p className="font-semibold">{f.title}</p>
                </div>
            ))}
        </div>
    );
}
