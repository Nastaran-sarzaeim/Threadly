"use client";

import { useRef, useState, useEffect } from "react";
import ProductCard from "@/components/home/product-card";
import ProductDescription from "@/components/product/product-description";
import ProductImages from "@/components/product/product-image";
import ProductInfo from "@/components/product/product-info";
import { products } from "@/data/products";
import { useParams } from "next/navigation";
import ProductReview from "@/components/product/product-review";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  if (!product) return notFound();

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const descRef = useRef(null);
  const reviewRef = useRef(null);
  const relatedRef = useRef(null);

  const [activeTab, setActiveTab] = useState("desc");

  const tabs = [
    { id: "desc", label: "توضیحات", ref: descRef },
    { id: "review", label: "نقد و بررسی", ref: reviewRef },
    { id: "related", label: "محصولات مشابه", ref: relatedRef },
  ];
  const scrollTo = (ref, tab) => {
    const yOffset = -120;
    const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveTab(tab);
  };

  useEffect(() => {
    const handleScroll = () => {
      const descTop = descRef.current?.getBoundingClientRect().top || 100;
      const reviewTop = reviewRef.current?.getBoundingClientRect().top || 100;
      const relatedTop = relatedRef.current?.getBoundingClientRect().top || 100;

      if (relatedTop <= 100) setActiveTab("related");
      else if (reviewTop <= 100) setActiveTab("review");
      else setActiveTab("desc");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="px-4 md:px-20 py-10 grid md:grid-cols-2 gap-10">
        <ProductImages images={product.images} name={product.name} />
        <ProductInfo product={product} />
      </section>

      <div className="sticky top-16 bg-[#ededed] z-50 px-4 md:px-20 pt-4 border-b border-gray-400 flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollTo(tab.ref, tab.id)}
            className={`font-medium transition py-4 ${activeTab === tab.id
              ? "text-yellow-700 border-b-2 border-yellow-700"
              : "text-gray-700 hover:text-yellow-700"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <section ref={descRef} className="px-4 md:px-20 py-10 border-b border-gray-400">
        <ProductDescription product={product} />
      </section>

      <section ref={reviewRef} className="px-4 md:px-20 py-10 border-b border-gray-400">
        <ProductReview reviewText={product.reviewText} />
      </section>

      <section ref={relatedRef} className="px-4 md:px-20 py-10">
        <h2 className="text-xl font-bold mb-5">محصولات مشابه</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  );
}
