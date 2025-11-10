const products = [
    {
      id: 1,
      name: "Summer Linen Shirt",
      price: "$49.00",
      oldPrice: "$69.00",
      image:'/products/cloth-2.jpg',
      tag: "-30%",
    },
    {
      id: 2,
      name: "Casual Denim Jacket",
      price: "$89.00",
      image:'/products/cloth-3.jpg',
      tag: "New",
    },
    {
      id: 3,
      name: "Classic Black Dress",
      price: "$120.00",
      oldPrice: "$140.00",
      image:'/products/cloth-5.jpg',
      tag: "-15%",
    },
    {
      id: 4,
      name: "Cotton Hoodie",
      price: "$59.00",
      image:'/products/cloth-20.jpg',
      tag: "New",
    },
    {
      id: 5,
      name: "Summer Linen Shirt",
      price: "$49.00",
      oldPrice: "$69.00",
      image:'/products/cloth-26.jpg',
      tag: "-30%",
    },
    {
      id: 6,
      name: "Casual Denim Jacket",
      price: "$89.00",
      image:'/products/cloth-31.jpg',
      tag: "New",
    },
    {
      id: 7,
      name: "Classic Black Dress",
      price: "$120.00",
      oldPrice: "$140.00",
      image:'/products/cloth-32.jpg',
      tag: "-15%",
    },
    {
      id: 8,
      name: "Cotton Hoodie",
      price: "$59.00",
      image:'/products/cloth-24.jpg',
      tag: "New",
    },
  ];
  
  export default function Products() {
    return (
      <section className="py-16 px-6 md:px-16 text-center">
        <h2 className="text-2xl font-semibold mb-10">Our Products</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="relative group bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-72 object-cover group-hover:opacity-75 transition-all duration-300"
              />
              {p.tag && (
                <span className="absolute top-3 left-3 bg-yellow-800 text-white text-xs px-2 py-1 rounded">
                  {p.tag}
                </span>
              )}
              <div className="p-4 text-left">
                <h3 className="font-semibold text-gray-700">{p.name}</h3>
                <p className="text-yellow-800 font-bold">{p.price}</p>
                {p.oldPrice && (
                  <p className="text-gray-400 line-through text-sm">{p.oldPrice}</p>
                )}
              </div>
              <button className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-all">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  