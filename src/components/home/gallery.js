"use client";
import Image from "next/image";

const gallery = [
  { image: "/products/cloth-22.jpg", alt: "white summer dress", className: "col-span-2 row-span-2" },
  { image: "/products/cloth-19.jpg", alt: "vintage denim jacket", className: "col-span-1 row-span-1" },
  { image: "/products/cloth-24.jpg", alt: "cozy knitted sweater", className: "col-span-1 row-span-2" },
  { image: "/products/cloth-16.jpg", alt: "bright formal shirt", className: "col-span-1 row-span-1" },
  { image: "/products/cloth-17.jpg", alt: "classic wooden brown leather shoes", className: "col-span-1 row-span-1" },
  { image: "/products/cloth-26.jpg", alt: "minimalist casual t-shirt", className: "col-span-1 row-span-1" },
  { image: "/products/cloth-28.jpg", alt: "modern fashion handbag", className: "col-span-2 row-span-1" },
];

export default function GallerySection() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-gray-600 text-sm mb-2">خرید خود را به اشتراک بگذارید با</h2>
      <h1 className="text-3xl font-bold text-gray-900 mb-10">FashionThreadly#</h1>

      <div
        className="
              grid 
              grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 
              auto-rows-[150px]
              gap-4 px-4 md:px-16 lg:px-32
            "
      >
        {gallery.map((img, index) => (
          <div
            key={index}
            className={`relative overflow-hidden  ${img.className}
              ${index > 3 ? "hidden sm:block" : ""} 
              ${index > 5 ? "hidden md:block" : ""} 
              ${index > 7 ? "hidden lg:block" : ""}
            `}
          >
            <Image
              src={img.image}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}