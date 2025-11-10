"use client";
import Image from "next/image";

const inspirations = [
  { id: 1, title: "Inner Peace", category: "Bed Room", image: "/products/cloth-10.jpg" },
  { id: 2, title: "Light Serenity", category: "Living Room", image: "/products/cloth-11.jpg" },
  { id: 3, title: "Minimal Comfort", category: "Dining Room", image: "/products/cloth-12.jpg" },
];

export default function InspirationSection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#FAF8F5]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">50+ Beautiful rooms inspiration</h2>
        <button className="bg-yellow-700 text-white px-6 py-2 rounded-sm hover:bg-yellow-800 transition">
          Explore More
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto">
        {inspirations.map((item) => (
          <div
            key={item.id}
            className="min-w-[250px] md:min-w-[320px] bg-white rounded-lg overflow-hidden shadow-sm"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={500}
              className="object-cover w-full h-80"
            />
            <div className="p-4">
              <p className="text-sm text-gray-400">{item.category}</p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
