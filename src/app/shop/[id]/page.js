"use client";

import ProductDescription from "@/components/product/product-description";
import ProductImages from "@/components/product/product-image";
import ProductInfo from "@/components/product/product-info";
import { useParams } from "next/navigation";

const products = [
  {
    id: 1,
    name: "تی‌شرت نخی مردانه",
    price: "۲۵۰۰۰۰",
    oldPrice: "۳۵۰۰۰۰",
    tag: "۳۰٪",
    rating: 4.6,
    reviews: 25,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#1E40AF", "#64748B"],
    images: ["/products/man-1.jpg"],
    description: `شلوار جین زنانه با برش راحت و پارچه‌ی مقاوم، مناسب استفاده روزمره و استایل کژوال.`,
    category: "زنانه",
    tags: ["شلوار", "جین", "لباس زنانه"],
  },
  {
    id: 2,
    name: "شلوار جین زنانه",
    price: "۴۰۰,۰۰۰ تومان",
    oldPrice: "۵۵۰,۰۰۰ تومان",
    rating: 4.6,
    reviews: 25,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#1E40AF", "#64748B"],
    images: ["/products/women-1.jpg"],
    description: `شلوار جین زنانه با برش راحت و پارچه‌ی مقاوم، مناسب استفاده روزمره و استایل کژوال.`,
    category: "زنانه",
    tags: ["شلوار", "جین", "لباس زنانه"],
    tag: "۲۵٪",
  },
  {
    id: 3,
    name: "کت اسپرت مردانه",
    price: "۹۰۰,۰۰۰ تومان",
    oldPrice: "۱,۲۰۰,۰۰۰ تومان",
    rating: 4.7,
    reviews: 31,
    sizes: ["M", "L", "XL"],
    colors: ["#000000", "#6B7280"],
    images: ["/products/man-2.jpg"],
    description: `کت اسپرت مردانه با طراحی شیک و دوخت تمیز، مناسب مهمانی‌ها و قرارهای رسمی.`,
    category: "مردانه",
    tags: ["کت", "لباس رسمی", "مردانه"],
    tag: "۲۰٪",
  },
  {
    id: 4,
    name: "مانتو تابستانی",
    price: "۷۰۰,۰۰۰ تومان",
    rating: 4.8,
    reviews: 40,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#F5E1C0", "#D4A017"],
    images: ["/products/women-2.jpg"],
    description: `مانتو تابستانی خنک و سبک، مناسب فصل گرم و استایل روزمره.`,
    category: "زنانه",
    tags: ["مانتو", "لباس زنانه", "تابستانی"],
    tag: "جدید",
  },
  {
    id: 5,
    name: "هودی بچگانه",
    price: "۳۵۰,۰۰۰ تومان",
    oldPrice: "۴۵۰,۰۰۰ تومان",
    rating: 4.4,
    reviews: 14,
    sizes: ["XS", "S", "M"],
    colors: ["#EF4444", "#3B82F6"],
    images: ["/products/kid-1.jpg"],
    description: `هودی بچگانه گرم و نرم با طراحی فانتزی، مناسب فصول سرد سال.`,
    category: "بچگانه",
    tags: ["هودی", "لباس بچگانه", "زمستانی"],
    tag: "۲۲٪",
  },
  {
    id: 6,
    name: "پیراهن تابستانی بچگانه",
    price: "۲۸۰,۰۰۰ تومان",
    rating: 4.5,
    reviews: 20,
    sizes: ["XS", "S", "M"],
    colors: ["#F9A8D4", "#FCD34D"],
    images: ["/products/kid-2.jpg"],
    description: `پیراهن تابستانی بچگانه با پارچه‌ی خنک و لطیف، مناسب بازی و فعالیت روزانه.`,
    category: "بچگانه",
    tags: ["پیراهن", "تابستانی", "بچگانه"],
    tag: "جدید",
  },
  {
    id: 7,
    name: "کاپشن زنانه",
    price: "۸۹۰,۰۰۰ تومان",
    oldPrice: "۱,۱۰۰,۰۰۰ تومان",
    rating: 4.6,
    reviews: 27,
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#9CA3AF", "#BE123C"],
    images: ["/products/women-4.jpg"],
    description: `کاپشن زنانه گرم و راحت با طراحی مدرن و پارچه ضدباد، مناسب فصل زمستان.`,
    category: "زنانه",
    tags: ["کاپشن", "لباس زنانه", "زمستانی"],
    tag: "۱۹٪",
  },
  {
    id: 8,
    name: "پیراهن مردانه کلاسیک",
    price: "۶۰۰,۰۰۰ تومان",
    oldPrice: "۷۵۰,۰۰۰ تومان",
    rating: 4.2,
    reviews: 19,
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["#FFFFFF", "#1E3A8A"],
    images: ["/products/man-3.jpg"],
    description: `پیراهن مردانه کلاسیک با پارچه‌ی لطیف و دوخت تمیز، مناسب محل کار و موقعیت‌های رسمی.`,
    category: "مردانه",
    tags: ["پیراهن", "لباس مردانه", "کلاسیک"],
    tag: "۲۰٪",
  },
];

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return notFound();

  return (
    <section className="px-4 md:px-20 py-10 grid md:grid-cols-2 gap-10">
      <ProductImages images={product.images} name={product.name} />
      <ProductInfo product={product} />
      <div className="md:col-span-2 border-t pt-8">
        <ProductDescription product={product} />
      </div>
    </section>
  );
}
