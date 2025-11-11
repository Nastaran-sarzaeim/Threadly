"use client";
import Image from "next/image";

const inspirations = [
  { id: 1, category: "ست ها", image: "/products/cloth-30.jpg" },
  { id: 2, category: "تاپ ها", image: "/products/cloth-19.jpg" },
  { id: 3, category: "شلوارک ها", image: "/products/cloth-17.jpg" },
  // { id: 4, category: "شومیز ها", image: "/products/cloth-4.jpg" },
];

export default function InspirationSection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#FAF8F5]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">۵۰+ ایده لباس زیبا</h2>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {inspirations.map((item) => (
          <div
            key={item.id}
            className="min-w-[250px] md:min-w-[300px] bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300"
          >
            <Image
              src={item.image}
              alt={`عکس لباس: ${item.title}`}
              width={400}
              height={500}
              className="object-cover w-full h-80"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{item.category}</p>
              {/* <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
