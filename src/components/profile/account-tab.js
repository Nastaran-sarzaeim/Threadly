"use client";
import React, { useState } from "react";
import { useUser } from "../login/context/user-context";
import { Eye, EyeSlash } from "iconsax-react";

export default function AccountTab() {
  const { user, updateUser } = useUser();
  const [username, setUsername] = useState(user?.username || "");
  const [password, setPassword] = useState(user?.password || "");
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [showPass, setShowPass] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const handleSave = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim() || !firstName.trim() || !lastName.trim()) {
      setMessage("لطفاً همه فیلدها را پر کنید!");
      setMessageType("error");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    updateUser({ username, password, firstName, lastName });

    setMessage("اطلاعات کاربری با موفقیت ذخیره شد!");
    setMessageType("success");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="p-6 max-w-md">
      <h3 className="text-xl font-bold mb-4">اطلاعات حساب</h3>
      <form onSubmit={handleSave} className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="نام"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          className="w-full border border-gray-300 focus:border-yellow-500 transition-all duration-300 rounded-lg px-3 py-2 mb-3 shadow-sm placeholder-gray-400 outline-0"
        />
        <input
          type="text"
          placeholder="نام خانوادگی"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          className="w-full border border-gray-300 focus:border-yellow-500 transition-all duration-300 rounded-lg px-3 py-2 mb-3 shadow-sm placeholder-gray-400 outline-0"
        />
        <input
          type="text"
          placeholder="نام کاربری"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full border border-gray-300 focus:border-yellow-500 transition-all duration-300 rounded-lg px-3 py-2 mb-3 shadow-sm placeholder-gray-400 outline-0"
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
        <button
          type="submit"
          className="bg-yellow-700 text-white py-2 rounded hover:bg-yellow-800 transition-colors"
        >
          ذخیره تغییرات
        </button>
      </form>

      {message && (
        <p className={`mt-2 font-medium ${messageType === "success" ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
