"use client";

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div className="w-64 bg-yellow-700 shadow p-4 text-white" dir="rtl">
      <h2 className="text-2xl font-bold mb-6">داشبورد</h2>
      <ul className="space-y-3" >
        <li>
          <button
            className={`w-full text-right px-3 py-2 rounded ${
              activeTab === "productList" ? "bg-yellow-800" : "hover:bg-yellow-600"
            }`}
            onClick={() => setActiveTab("productList")}
          >
            لیست محصولات
          </button>
        </li>
        <li>
          <button
            className={`w-full text-right px-3 py-2 rounded ${
              activeTab === "addProduct" ? "bg-yellow-800" : "hover:bg-yellow-600"
            }`}
            onClick={() => setActiveTab("addProduct")}
          >
            اضافه کردن محصول
          </button>
        </li>
        <li>
          <button
            className={`w-full text-right px-3 py-2 rounded ${
              activeTab === "transactions" ? "bg-yellow-800" : "hover:bg-yellow-600"
            }`}
            onClick={() => setActiveTab("transactions")}
          >
            تراکنش‌ها
          </button>
        </li>
      </ul>
    </div>
  );
}
