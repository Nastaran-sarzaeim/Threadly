"use client";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useEffect, useState } from "react";

export default function MultiSlideshow() {
    const [slideIndex, setSlideIndex] = useState(1);

    const images = [
        { src: '/slider/slider.jpg', alt: 'Slider' },
        { src: '/slider/slider-2.jpg', alt: 'Slider' },
        { src: '/slider/slider-3.jpg', alt: 'Slider' },
    ];

    const plusSlides = (n) => {
        let newIndex = slideIndex + n;
        if (newIndex > images.length) newIndex = 1;
        if (newIndex < 1) newIndex = images.length;
        setSlideIndex(newIndex);
    };
    const goToSlide = (n) => {
        setSlideIndex(n);
    };


    useEffect(() => {
        const timer = setInterval(() => {
            plusSlides(1);
        }, 3000);

        return () => clearInterval(timer);
    }, [slideIndex]);

    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-full max-w-4xl relative">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        className={`w-full h-[200px] md:h-[500] object-cover transition-opacity duration-1000 ${slideIndex === i + 1 ? "block" : "hidden"}`}
                    />
                ))}
                <button
                    className="absolute top-1/2 left-2 -translate-y-1/2 px-3 py-3 border-gray-700  hover:border-gray-500 border hover:text-black text-white rounded-full cursor-pointer"
                    onClick={() => plusSlides(1)}
                >
                    <ArrowLeft2 size={24} color="white" />
                </button>
                <button
                    className="absolute top-1/2 right-2 -translate-y-1/2 px-3 py-3 border-gray-700  hover:border-gray-500 border hover:text-black text-white rounded-full cursor-pointer"
                    onClick={() => plusSlides(-1)}
                >
                    <ArrowRight2 size={24} color="white" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            onClick={() => goToSlide(i + 1)}
                            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${slideIndex === i + 1 ? 'bg-white scale-125' : 'bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
