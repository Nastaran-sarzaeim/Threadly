import { formatPrice } from "@/utils/utils";
import { ArrowLeft2 } from "iconsax-react";
import ProductCard from "./product-card";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "پیراهن لینن تابستانی",
    price: "۴۹۰۰۰۰",
    oldPrice: "۶۹۰۰۰۰",
    image: "/products/cloth-2.jpg",
    tag: "۳۰٪",
  },
  {
    id: 2,
    name: "کاپشن جین کژوال",
    price: "۸۹۰۰۰۰",
    image: "/products/cloth-3.jpg",
    tag: "جدید",
  },
  {
    id: 3,
    name: "پیراهن مشکی کلاسیک",
    price: "۱۲۰۰۰۰۰",
    oldPrice: "۱۴۰۰۰۰۰",
    image: "/products/cloth-5.jpg",
    tag: "۱۵٪",
  },
  {
    id: 4,
    name: "هودی نخی",
    price: "۵۹۰۰۰۰",
    image: "/products/cloth-20.jpg",
    tag: "جدید",
  },
  {
    id: 5,
    name: "پیراهن لینن تابستانی",
    price: "۴۹۰۰۰۰",
    oldPrice: "۶۹۰۰۰۰",
    image: "/products/cloth-26.jpg",
    tag: "۳۰٪",
  },
  {
    id: 6,
    name: "کاپشن جین کژوال",
    price: "۸۹۰۰۰۰",
    image: "/products/cloth-31.jpg",
    tag: "جدید",
  },
  {
    id: 7,
    name: "پیراهن مشکی کلاسیک",
    price: "۱۲۰۰۰۰۰",
    oldPrice: "۱۴۰۰۰۰۰",
    image: "/products/cloth-32.jpg",
    tag: "۱۵٪",
  },
  {
    id: 8,
    name: "هودی نخی",
    price: "۵۹۰۰۰۰",
    image: "/products/cloth-24.jpg",
    tag: "جدید",
  },
];

export default function Products() {
  return (
    <section className="py-16 px-6 md:px-16 text-center">
      <h2 className="text-2xl font-semibold mb-10">محصولات ما</h2>

      <div className="flex md:hidden gap-4 overflow-x-auto pb-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="min-w-[70%] sm:min-w-[45%] bg-white rounded-lg overflow-hidden shadow-sm"
          >
            <div className="relative group/image">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-64 object-cover group-hover/image:opacity-75 transition-all duration-300"
              />
              {p.tag && (
                <span
                  className={`absolute top-3 left-3 text-white text-xs px-2 py-1 rounded ${p.tag === "جدید"
                    ? "bg-green-700"
                    : p.tag.includes("٪")
                      ? "bg-red-700"
                      : "bg-yellow-700"
                    }`}
                >
                  {p.tag}
                </span>
              )}
            </div>

            <div className="p-4 text-right">
              <h3 className="font-semibold text-gray-700 mb-2">{p.name}</h3>
              <div className="flex flex-row justify-between items-center">
                <p className="text-yellow-700 font-bold">
                  {formatPrice(p.price)} تومان
                </p>
                {p.oldPrice && (
                  <p className="text-gray-400 line-through text-sm">
                    {formatPrice(p.oldPrice)} تومان
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/shop"
          className="inline-flex items-center bg-yellow-700 text-white px-5 py-2 rounded-md hover:bg-yellow-800 transition-all font-semibold gap-2"
        >
          مشاهده بیشتر
          <ArrowLeft2 color="white" size={24} />
        </Link>
      </div>
    </section>
  );
}
