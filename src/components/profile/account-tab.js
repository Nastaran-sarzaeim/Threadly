"use client";
import React, { useState, useEffect } from "react";

export default function AccountTab() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userIndex, setUserIndex] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      const index = users.findIndex(u => u.username === loggedInUser.username);
      if (index !== -1) {
        setUsername(users[index].username);
        setPassword(users[index].password);
        setUserIndex(index);
      }
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (userIndex !== null) {
      users[userIndex] = { username, password };
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedInUser", JSON.stringify({ username, password }));
      setMessage("اطلاعات کاربری با موفقیت ذخیره شد!");
      setUsername("");
      setPassword("");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4">اطلاعات حساب</h3>
      <form onSubmit={handleSave} className="flex flex-col gap-3 max-w-md">
        <input
          type="text"
          placeholder="نام کاربری"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-yellow-700 text-white py-2 rounded hover:bg-yellow-800">
          ذخیره تغییرات
        </button>
      </form>
      {message && <p className="text-green-600 mt-2">{message}</p>}
    </div>
  );
}
