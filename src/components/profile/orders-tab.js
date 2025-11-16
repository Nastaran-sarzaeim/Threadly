"use client";
import React, { useEffect, useState } from "react";
import { formatPrice } from "@/utils/utils";

export default function OrdersTab() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4">سفارش‌ها</h3>
      {orders.length === 0 ? (
        <p>سفارشی وجود ندارد.</p>
      ) : (
        <div className="flex flex-col gap-3 max-w-lg">
          {orders.map(order => (
            <div key={order.id} className="border p-3 rounded">
              <p><strong>کد سفارش:</strong> {order.id}</p>
              <p><strong>محصولات:</strong></p>
              <ul className="list-disc pr-6">
                {order.items.map(item => (
                  <li key={item.id}>{item.name} × {item.quantity} ({formatPrice(item.price * item.quantity)} تومان)</li>
                ))}
              </ul>
              <p className="font-bold">جمع کل: {formatPrice(order.total)} تومان</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
