"use client";

import { useState } from "react";
import { Eye, EyeSlash } from "iconsax-react";
// import { useUser } from "@/context/user-context"; // مسیر کانتکست یوزر
import { useSnackbar } from "notistack";
import CustomAlert from "@/components/alert/custom-alert";
import { useUser } from "./context/user-context";

export default function LoginForm() {
    const { login } = useUser();
    const { enqueueSnackbar } = useSnackbar();

    const [mode, setMode] = useState("login"); // login یا register

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [showPass, setShowPass] = useState(false);
    const [showRepeatPass, setShowRepeatPass] = useState(false);

    const handleSubmit = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (mode === "register") {
            if (!firstName || !lastName || !username || !password || !repeatPassword) {
                enqueueSnackbar(
                    <CustomAlert message="همه فیلدها را پر کنید" type="error" />,
                    { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
                );
                return;
            }

            if (password !== repeatPassword) {
                enqueueSnackbar(
                    <CustomAlert message="رمزها یکسان نیستند!" type="error" />,
                    { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
                );
                return;
            }

            const exists = users.find(u => u.username === username);
            if (exists) {
                enqueueSnackbar(
                    <CustomAlert message="این نام کاربری قبلا ثبت شده" type="error" />,
                    { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
                );
                return;
            }

            const newUser = {
                firstName,
                lastName,
                username,
                password,
                role: username === "nastaran" && password === "123456#" ? "admin" : "user",
                cart: []
            };

            localStorage.setItem("users", JSON.stringify([...users, newUser]));
            login(newUser);

            enqueueSnackbar(
                <CustomAlert message="ثبت‌نام موفق! خوش آمدی" type="success" />,
                { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
            );
            setTimeout(() => {
                window.location.href = newUser.role === "admin" ? "/dashboard-admin" : "/";
            }, 1000);
            
            return;
        }

        // login
        const foundUser = users.find(u => u.username === username && u.password === password);
        if (!foundUser) {
            enqueueSnackbar(
                <CustomAlert message="نام کاربری یا رمز اشتباه است" type="error" />,
                { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
            );
            return;
        }

        login(foundUser);

        enqueueSnackbar(
            <CustomAlert message="ورود موفق! خوش آمدی" type="success" />,
            { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
        );
        setTimeout(() => {
            window.location.href = foundUser.role === "admin" ? "/dashboard-admin" : "/";
        }, 1000);
    };

    return (
        <div className=" min-h-[calc(100vh-160px)] flex items-center justify-center bg-gray-50">
            <div className="max-w-lg w-full mx-auto p-6 bg-white rounded-xl shadow">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    {mode === "login" ? "ورود" : "ثبت‌نام"}
                </h2>

                {mode === "register" && (
                    <>
                        <input
                            className="w-full border border-gray-300 focus:border-yellow-500 transition-all duration-300 rounded-lg px-3 py-2 mb-3 shadow-sm placeholder-gray-400 outline-0"
                            placeholder="نام"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            className="w-full border border-gray-300 focus:border-yellow-500 transition-all duration-300 rounded-lg px-3 py-2 mb-3 shadow-sm placeholder-gray-400 outline-0"
                            placeholder="نام خانوادگی"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </>
                )}

                <input
                    className="w-full border border-gray-300 focus:border-yellow-500 transition-all duration-300 rounded-lg px-3 py-2 mb-3 shadow-sm placeholder-gray-400 outline-0"
                    placeholder="نام کاربری"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <div className="relative">
                    <input
                        type={showPass ? "text" : "password"}
                        className="w-full border border-gray-300 focus:border-yellow-500 transition-all duration-300 rounded-lg px-3 py-2 mb-3 shadow-sm placeholder-gray-400 outline-0"
                        placeholder="رمز عبور"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                        className="absolute left-3 top-2.5 cursor-pointer"
                        onClick={() => setShowPass(!showPass)}
                    >
                        {showPass ? <EyeSlash size={20} color="#000" /> : <Eye size={20} color="#000" />}
                    </span>
                </div>

                {mode === "register" && (
                    <div className="relative mb-3">
                        <input
                            type={showRepeatPass ? "text" : "password"}
                            className="w-full border border-gray-300 focus:border-yellow-500 transition-all duration-300 rounded-lg px-3 py-2 mb-3 shadow-sm placeholder-gray-400 outline-0"
                            placeholder="تکرار رمز عبور"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                        <span
                            className="absolute left-3 top-2.5 cursor-pointer"
                            onClick={() => setShowRepeatPass(!showRepeatPass)}
                        >
                            {showRepeatPass ? <EyeSlash size={20} color="#000" /> : <Eye size={20} color="#000" />}
                        </span>
                    </div>
                )}

                <button
                    onClick={handleSubmit}
                    className="w-full bg-yellow-700 text-white p-2 rounded mt-2"
                >
                    ادامه
                </button>

                <p
                    className="text-center mt-4 text-sm cursor-pointer text-yellow-700"
                    onClick={() => {
                        setMode(mode === "login" ? "register" : "login");
                        setFirstName("");
                        setLastName("");
                        setUsername("");
                        setPassword("");
                        setRepeatPassword("");
                    }}
                >
                    {mode === "login"
                        ? "ثبت‌نام نداری؟ اینجا کلیک کن"
                        : "اکانت داری؟ ورود"}
                </p>
            </div>
        </div>
    );
}
