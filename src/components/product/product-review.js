"use client";

export default function ProductReview({ reviewText }) {
    return (
        <section>
            <h2 className="text-xl font-bold mb-5">نقد و بررسی</h2>
            {reviewText.split("\n").map((line, idx) => (
                <p key={idx} className="mb-4">{line}</p>
            ))}
        </section>
    );
}
