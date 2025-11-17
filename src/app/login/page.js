"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeSlash } from "iconsax-react";
import { useSnackbar } from "notistack";
import CustomAlert from "@/components/alert/custom-alert";

export default function LoginPage() {
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();

    const [mode, setMode] = useState("login");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [showPass, setShowPass] = useState(false);
    const [showRepeatPass, setShowRepeatPass] = useState(false);

    const [error, setError] = useState("");

    const handleSubmit = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (mode === "register") {
            if (!username || !password) {
                enqueueSnackbar(
                    <CustomAlert message="همه فیلدها رو پر کنید" type="error" />,
                    { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
                );
                return;
            }

            if (password !== repeatPassword) {
                enqueueSnackbar(
                    <CustomAlert message="رمزها یکی نیست!" type="error" />,
                    { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
                );
                return;
            }

            const exists = users.find(u => u.username === username);
            if (exists) {
                enqueueSnackbar(
                    <CustomAlert message="این نام کاربری قبلاً ثبت شده" type="error" />,
                    { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
                );
                return;
            }

            const newUser = {
                username,
                password,
                role: username === "nastaran" && password === "123456#" ? "admin" : "user",
            };

            localStorage.setItem("users", JSON.stringify([...users, newUser]));
            localStorage.setItem("loggedInUser", JSON.stringify(newUser));

            enqueueSnackbar(
                <CustomAlert message="ثبت‌نام موفق بود! خوش اومدی" type="success" />,
                { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
            );

            setTimeout(() => {
                window.location.href = foundUser.role === "admin" ? "/dashboard-admin" : "/";
              }, 1000);

            return;
        }

        const foundUser = users.find(u => u.username === username && u.password === password);
        if (!foundUser) {
            enqueueSnackbar(
                <CustomAlert message="نام کاربری یا رمز اشتباهه" type="error" />,
                { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
            );
            return;
        }

        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

        enqueueSnackbar(
            <CustomAlert message="ورود موفق! خوش آمدی" type="success" />,
            { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
        );

        setTimeout(() => {
            window.location.href = foundUser.role === "admin" ? "/dashboard-admin" : "/";
        }, 1000);
    };

    return (
        <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4 text-center">
                {mode === "login" ? "ورود" : "ثبت‌نام"}
            </h2>

            <input
                className="w-full border p-2 rounded mb-3"
                placeholder="نام کاربری"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <div className="relative mb-3">
                <input
                    type={showPass ? "text" : "password"}
                    className="w-full border p-2 rounded"
                    placeholder="رمز عبور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span
                    className="absolute right-3 top-2.5 cursor-pointer"
                    onClick={() => setShowPass(!showPass)}
                >
                    {showPass ? <EyeSlash size={20} /> : <Eye size={20} />}
                </span>
            </div>

            {mode === "register" && (
                <div className="relative mb-3">
                    <input
                        type={showRepeatPass ? "text" : "password"}
                        className="w-full border p-2 rounded"
                        placeholder="تکرار رمز"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    <span
                        className="absolute right-3 top-2.5 cursor-pointer"
                        onClick={() => setShowRepeatPass(!showRepeatPass)}
                    >
                        {showRepeatPass ? <EyeSlash size={20} /> : <Eye size={20} />}
                    </span>
                </div>
            )}

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <button
                onClick={handleSubmit}
                className="w-full bg-yellow-700 text-white p-2 rounded"
            >
                ادامه
            </button>

            <p className="text-center mt-4 text-sm cursor-pointer text-yellow-700"
                onClick={() => { setMode(mode === "login" ? "register" : "login"); setError("") }}
            >
                {mode === "login"
                    ? "ثبت‌نام نداری؟ اینجا کلیک کن"
                    : "اکانت داری؟ ورود"}
            </p>
        </div>
    );
}
