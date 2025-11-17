"use client";

import { useEffect, useRef, useState } from "react";
import { SearchNormal, CloseCircle } from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearch } from "../home/context/search-context";

export default function SearchBox() {
    const { results, searchProducts, query } = useSearch();
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const modalRef = useRef(null);

    const closeModal = () => {
        setOpen(false);
        searchProducts("");
    };

    const goToShop = () => {
        router.push(`/shop?search=${encodeURIComponent(query)}`);
        closeModal();
    };

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };

    return (
        <>
            <SearchNormal
                size={22}
                color="#171717"
                onClick={() => setOpen(true)}
                className="cursor-pointer hover:text-yellow-700 hover:scale-110 transition-transform duration-300"
            />

            {open && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center p-6" onClick={handleBackdropClick}>
                    <div className="bg-white w-full max-w-xl mt-20 rounded-xl p-6 shadow-lg relative" ref={modalRef}>

                        <button
                            onClick={closeModal}
                            className="absolute top-3 left-3 text-gray-600 hover:text-red-500 cursor-pointer"
                        >
                            <CloseCircle size={24} color="red" />
                        </button>

                        <div className="flex items-center bg-gray-100 px-4 py-3 mt-5 rounded-lg">
                            <SearchNormal size={22} color="#171717" />

                            <input
                                autoFocus
                                className="bg-transparent outline-none w-full mr-3"
                                placeholder="جستجو محصولات..."
                                onChange={(e) => searchProducts(e.target.value)}
                            />
                        </div>
                        {query && results.length === 0 && (
                            <p className="text-center text-gray-600 mt-4">
                                هیچ محصولی وجود ندارد
                            </p>
                        )}

                        {results.length > 0 && (
                            <div className="flex flex-col mt-4 max-h-132 overflow-y-auto">
                                {results.slice(0, 8).map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/shop/${item.id}`}
                                        onClick={closeModal}
                                        className="flex items-center gap-3 p-1 hover:bg-gray-100 transition border-b last:border-b-0 border-gray-200"
                                    >
                                        <img
                                            src={item.image || item.images?.[0]}
                                            alt={item.name}
                                            className="w-12 h-12 object-cover rounded-md"
                                        />

                                        <span className="text-sm text-gray-800">
                                            {item.name}
                                        </span>
                                    </Link>
                                ))}

                                {results.length > 8 && (
                                    <button
                                        className="text-center text-black mt-3 cursor-pointer border rounded-lg border-gray-300 py-2 px-8 mx-auto"
                                        onClick={goToShop}
                                    >
                                        مشاهده همه نتایج
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
