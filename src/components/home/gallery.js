"use client";
import Image from "next/image";

const gallery = [
  { image: "/products/cloth-22.jpg" },
  { image: "/products/cloth-19.jpg" },
  { image: "/products/cloth-24.jpg" },
  { image: "/products/cloth-16.jpg" },
  { image: "/products/cloth-26.jpg" },
  { image: "/products/cloth-17.jpg" },
  { image: "/products/cloth-28.jpg" },
  { image: "/products/cloth-29.jpg" },
];

export default function GallerySection() {
  return (
    <section className="py-16 px-6 md:px-20 text-center">
      <h2 className="text-2xl font-semibold mb-2">Share your setup with</h2>
      <p className="text-3xl font-bold mb-8 text-gray-800">#FuniroFurniture</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {gallery.map((item, i) => (
          <Image
            key={i}
            src={item.image}
            alt={`Gallery ${i + 1}`}
            width={400}
            height={400}
            className="w-full h-60 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
}
