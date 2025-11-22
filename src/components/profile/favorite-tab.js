"use client";
import React from "react";
import { useUser } from "../login/context/user-context";

export default function FavoritesTab() {
  const { user, updateUser } = useUser();

  const removeFavorite = (id) => {
    if (!user || !user.favorites) return;
    const updated = user.favorites.filter(item => item.id !== id);
    updateUser({ ...user, favorites: updated });
  };

  const favorites = user?.favorites || [];

  if (favorites.length === 0) {
    return <p className="text-gray-500">شما هنوز هیچ محصولی ذخیره نکرده‌اید.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {favorites.map(item => (
        <div key={item.id} className="flex items-center justify-between border p-3 rounded">
          <span>{item.name}</span>
          <button
            onClick={() => removeFavorite(item.id)}
            className="text-red-600 hover:underline"
          >
            حذف
          </button>
        </div>
      ))}
    </div>
  );
}
