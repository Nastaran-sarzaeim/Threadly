import Features from "@/components/shop/features";
import FilterBar from "@/components/shop/filter-bar";
import Hero from "@/components/shop/hero";
import ProductList from "@/components/shop/products-list";
import { products } from "@/data/products";

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
