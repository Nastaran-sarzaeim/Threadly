"use client";

import ProductCard from "@/components/home/product-card";
import ProductDescription from "@/components/product/product-description";
import ProductImages from "@/components/product/product-image";
import ProductInfo from "@/components/product/product-info";
import { products } from "@/data/products";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return notFound();

  const relatedProducts = products
    .filter(
      (p) => p.category === product.category && p.id !== product.id
    )
    .slice(0, 4);

  return (
    <>
      <section className="px-4 md:px-20 py-10 grid md:grid-cols-2 gap-10">
        <ProductImages images={product.images} name={product.name} />
        <ProductInfo product={product} />
        <div className="md:col-span-2 border-t pt-8">
          <ProductDescription product={product} />
        </div>
      </section>
      {relatedProducts.length > 0 && (
        <div className="mt-16 px-4 md:px-20 py-10">
          <h2 className="text-xl font-bold mb-5">محصولات مشابه</h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
