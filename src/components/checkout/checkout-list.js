
export default function CheckoutList() {
    const cartProducts = [
        {
            id: 1,
            name: "تی‌شرت نخی مردانه",
            price: 250000,
            images: ["/products/man-1.jpg"],
            qty: 1
        },
        {
            id: 2,
            name: "هودی مردانه",
            price: 480000,
            images: ["/products/man-2.jpg"],
            qty: 2
        }
    ];

    const total = cartProducts.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );
    return (
        <div className="w-full min-h-screen bg-white py-12 px-6 md:px-20 flex flex-col gap-12">

            <div className="w-full grid grid-cols-4 bg-[#F9F1E8] py-4 rounded-lg text-gray-700 font-medium px-6">
                <span>محصول</span>
                <span>قیمت</span>
                <span>تعداد</span>
                <span>جمع</span>
            </div>

            {cartProducts.map((item) => (
                <div key={item.id} className="w-full grid grid-cols-4 items-center px-6">

                    <div className="flex gap-4 items-center">
                        <img
                            src={item.images[0]}
                            className="w-28 h-28 rounded-xl bg-[#F4E9D6] p-2 object-cover"
                            alt={item.name}
                        />
                        <span className="text-gray-700 text-lg">{item.name}</span>
                    </div>

                    <div className="text-gray-500 text-lg">
                        {item.price.toLocaleString("fa-IR")} تومان
                    </div>

                    <div>
                        <input
                            type="number"
                            defaultValue={item.qty}
                            className="w-14 border rounded-md text-center py-1"
                        />
                    </div>

                    <div className="flex items-center gap-4 text-gray-700 text-lg">
                        {(item.price * item.qty).toLocaleString("fa-IR")} تومان
                        <button className="text-yellow-700 text-xl hover:text-red-500">
                            🗑️
                        </button>
                    </div>

                </div>
            ))}

            <div className="ml-auto w-full md:w-[380px] bg-[#F9F1E8] p-8 rounded-xl flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-center">مجموع سبد خرید</h2>

                <div className="flex justify-between text-gray-700">
                    <span>جمع جزء:</span>
                    <span className="text-gray-500">
                        {total.toLocaleString("fa-IR")} تومان
                    </span>
                </div>

                <div className="flex justify-between font-semibold">
                    <span>جمع کل:</span>
                    <span className="text-yellow-700 text-xl">
                        {total.toLocaleString("fa-IR")} تومان
                    </span>
                </div>

                <button className="border border-black px-6 py-3 rounded-xl text-lg font-medium mx-auto hover:bg-black hover:text-white transition">
                    تسویه حساب
                </button>
            </div>

        </div>
    );
}

