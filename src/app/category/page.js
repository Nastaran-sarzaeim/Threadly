"use client";

import ProductCard from "@/components/home/product-card";
import { products } from "@/data/products";
import Link from "next/link";

const categories = [
    {
        title: "مردانه",
        image: "/category/men.jpg",
        slug: "man",
    },
    {
        title: "زنانه",
        image: "/category/women.jpg",
        slug: "women",
    },
    {
        title: "بچگانه",
        image: "/category/kid.jpg",
        slug: "kis",
    }
];

export default function AllCategoriesPage() {
    const featuredProducts = products.slice(0, 4);
    return (
        <section className="px-6 md:px-20 py-10">
            <h1 className="text-2xl font-bold mb-8">دسته‌بندی محصولات</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat) => (
                    <Link
                        key={cat.slug}
                        href={`/category/${cat.slug}`}
                        className="block rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                    >
                        <div className="relative">
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4 text-center font-semibold text-lg">
                            {cat.title}
                        </div>
                    </Link>
                ))}
            </div>
            <div className="pt-18">
                <h2 className="text-xl font-bold mb-6">محصولات پیشنهادی</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {featuredProducts.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
