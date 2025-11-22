"use client";
import React, { useState } from "react";
import { useUser } from "../login/context/user-context";

export default function AddressesTab() {
  const { user, updateUser } = useUser();
  const [label, setLabel] = useState("");
  const [detail, setDetail] = useState("");
  const [message, setMessage] = useState("");

  const addresses = user?.addresses || [];

  const addAddress = (e) => {
    e.preventDefault();
    if (!label.trim() || !detail.trim()) {
      setMessage("لطفاً همه فیلدها را پر کنید!");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    const newAddress = {
      id: Date.now(),
      label,
      detail
    };

    const updatedAddresses = [...addresses, newAddress];
    updateUser({ ...user, addresses: updatedAddresses });

    setLabel("");
    setDetail("");
    setMessage("آدرس با موفقیت اضافه شد!");
    setTimeout(() => setMessage(""), 3000);
  };

  const removeAddress = (id) => {
    const updated = addresses.filter(addr => addr.id !== id);
    updateUser({ ...user, addresses: updated });
  };

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <h3 className="text-xl font-bold mb-2">آدرس‌ها</h3>

      {/* فرم اضافه کردن آدرس */}
      <form onSubmit={addAddress} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="عنوان آدرس (مثلاً خانه، محل کار)"
          value={label}
          onChange={e => setLabel(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="text"
          placeholder="جزئیات آدرس"
          value={detail}
          onChange={e => setDetail(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="bg-yellow-700 text-white py-2 rounded hover:bg-yellow-800 transition-colors"
        >
          اضافه کردن آدرس
        </button>
      </form>

      {message && <p className="text-green-600">{message}</p>}

      {/* لیست آدرس‌ها */}
      {addresses.length === 0 ? (
        <p className="text-gray-500">شما هنوز آدرسی اضافه نکرده‌اید.</p>
      ) : (
        <div className="flex flex-col gap-2 mt-2">
          {addresses.map(addr => (
            <div key={addr.id} className="flex items-center justify-between border p-3 rounded">
              <span>{addr.label} - {addr.detail}</span>
              <button
                onClick={() => removeAddress(addr.id)}
                className="text-red-600 hover:underline"
              >
                حذف
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
