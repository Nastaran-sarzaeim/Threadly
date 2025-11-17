"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "../login/context/user-context";

export default function UserPanel() {
    const { user, logout } = useUser();
    const [open, setOpen] = useState(false);
    const panelRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (panelRef.current && !panelRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!user) return null;

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    return (
        <div className="relative inline-block text-right select-none" ref={panelRef}>
            <div onClick={() => setOpen(!open)} className="cursor-pointer flex flex-row items-center">
                <img
                    src="/avatar/avatar_1.png"
                    className="w-10 h-10 rounded-full border-2 border-blue-300"
                />
                <p className="text-gray-500 text-sm mr-1">پنل کاربری</p>
            </div>

            {open && (
                <div className="absolute top-15 left-[-16] w-60 bg-white rounded-2xl shadow-xl p-5 animate-fadeIn z-50 border border-amber-200">
                    <div className="absolute -top-2 left-22 w-4 h-4 bg-white rotate-45 border-t border-l border-amber-200"></div>
                    <div>
                        <h4 className="text-lg font-semibold text-blue-900">{user.username}</h4>
                        <span className="text-sm text-gray-500">
                            {user.role === "admin" ? "مدیر" : "کاربر"}
                        </span>
                    </div>

                    <div className="my-2 h-px bg-gray-200"></div>
                    <div className="text-blue-900 text-base cursor-pointer mb-3 hover:bg-gray-100 py-2 rounded-lg px-2">
                        <Link
                            href={user.role === "admin" ? "/dashboard-admin" : "/profile"}
                            onClick={() => setOpen(false)}
                        >
                            پنل کاربری
                        </Link>
                    </div>

                    <button
                        className="text-red-500 text-lg font-semibold hover:text-red-600 cursor-pointer"
                        onClick={handleLogout}
                    >
                        خروج
                    </button>
                </div>
            )}
        </div>
    );
}
