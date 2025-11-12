import Features from "@/components/shop/features";
import FilterBar from "@/components/shop/filter-bar";
import Hero from "@/components/shop/hero";
import ProductList from "@/components/shop/products-list";

const products = [
    {
        id: 1,
        name: "تی‌شرت نخی مردانه",
        price: "۲۵۰۰۰۰",
        oldPrice: "۳۵۰۰۰۰",
        image: "/products/man-1.jpg",
        tag: "۳۰٪",
    },
    {
        id: 2,
        name: "شلوار جین زنانه",
        price: "۴۰۰۰۰۰",
        oldPrice: "۵۵۰۰۰۰",
        image: "/products/women-1.jpg",
        tag: "۲۵٪",
    },
    {
        id: 3,
        name: "کت اسپرت مردانه",
        price: "۹۰۰۰۰۰",
        oldPrice: "۱۲۰۰۰۰۰",
        image: "/products/man-2.jpg",
        tag: "۲۰٪",
    },
    {
        id: 4,
        name: "مانتو تابستانی",
        price: "۷۰۰۰۰۰",
        image: "/products/women-2.jpg",
        tag: "جدید",
    },
    {
        id: 5,
        name: "هودی بچگانه",
        price: "۳۵۰۰۰۰",
        oldPrice: "۴۵۰۰۰۰",
        image: "/products/kid-1.jpg",
        tag: "۲۲٪",
    },
    {
        id: 6,
        name: "پیراهن تابستانی بچگانه",
        price: "۲۸۰۰۰۰",
        image: "/products/kid-2.jpg",
        tag: "جدید",
    },
    {
        id: 7,
        name: "کاپشن زنانه",
        price: "۸۹۰۰۰۰",
        oldPrice: "۱۱۰۰۰۰۰",
        image: "/products/women-4.jpg",
        tag: "۱۹٪",
    },
    {
        id: 8,
        name: "پیراهن مردانه کلاسیک",
        price: "۶۰۰۰۰۰",
        oldPrice: "۷۵۰۰۰۰",
        image: "/products/man-3.jpg",
        tag: "۲۰٪",
    },
];

export default function ShopPage() {
    return (
        <section>
            <Hero />
            <FilterBar />
            <ProductList products={products} />
            <Features />
        </section>
    );
}
