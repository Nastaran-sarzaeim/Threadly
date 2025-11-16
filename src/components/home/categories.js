import Link from "next/link";

const categories = [
  { name: "زنانه", image: "/category/women.jpg", alt: "محصولات زنانه", href: "/category/women" },
  { name: "مردانه", image: "/category/men.jpg", alt: "محصولات مردانه", href: "/category/man" },
  { name: "بچگانه", image: "/category/kid.jpg", alt: "محصولات بچگانه", href: "/category/kids" },
];

export default function Categories() {
  return (
    <section className="text-center py-12">
      <h2 className="text-2xl font-semibold mb-8">برای هر سبک و هر سن</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 md:px-16">
        {categories.map((cat, i) => (
          <Link
            key={i}
            href={`/category/${cat.slug}`}
          >
            <div className="space-y-2">
              <img
                src={cat.image}
                alt={cat.alt}
                className="w-full h-72 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
              <h3 className="text-gray-700 mt-6 font-bold">{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
