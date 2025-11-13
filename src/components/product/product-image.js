"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProductImages({ images, name }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      <div className="border rounded-2xl overflow-hidden">
        <Image
          src={mainImage}
          alt={name}
          width={600}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex gap-3 mt-4">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt=""
            width={100}
            height={100}
            className={`cursor-pointer rounded-xl border ${
              img === mainImage ? "border-gray-800" : "border-transparent"
            }`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
