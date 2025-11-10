const categories = [
    { name: "Women", image: "/category/women.jpg" },
    { name: "Men", image: "/category/men.jpg" },
    { name: "Kids", image: "/category/kid.jpg" },
  ];
  
  export default function Categories() {
    return (
      <section className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-2">Browse The Range</h2>
        <p className="text-gray-500 mb-8">Discover outfits for every style and season.</p>
  
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 md:px-16">
          {categories.map((cat, i) => (
            <div key={i} className="space-y-2">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-72 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
              <h3 className="text-gray-700 mt-6 font-bold">{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  