import {
  User,
  Heart,
  Location,
  Lock,
  ShoppingBag,
  ShoppingCart
} from "iconsax-react";

export default function UserProfileSidebar({ selectedTab, setSelectedTab, isSidebarOpen }) {
  const tabs = [
    { id: "account", title: "اطلاعات حساب", icon: <User size={22} color="#000" /> },
    { id: "favorites", title: "محصولات ذخیره‌شده", icon: <Heart size={22} color="#000" /> },
    { id: "addresses", title: "آدرس‌ها", icon: <Location size={22} color="#000" /> },
    { id: "orders", title: "سفارش‌ها", icon: <ShoppingBag size={22} color="#000" /> },
    { id: "cart", title: "سبد خرید", icon: <ShoppingCart size={22} color="#000" /> },
  ];

  return (
    <aside
      className={`
        bg-gray-50 shadow-lg p-4
        ${isSidebarOpen ? "w-64" : "w-20"}
        min-h-[calc(100vh-281px)]
        transition-all duration-300
        flex flex-col
      `}
    >
      {isSidebarOpen && (
        <h3 className="text-xl font-bold mb-6">پروفایل کاربر</h3>
      )}

      <ul className="flex flex-col gap-2">
        {tabs.map((t) => (
          <TabButton
            key={t.id}
            id={t.id}
            title={t.title}
            icon={t.icon}
          />
        ))}
      </ul>
    </aside>
  );

  function TabButton({ id, title, icon }) {
    const active = selectedTab === id;

    return (
      <button
        onClick={() => setSelectedTab(id)}
        className={`
          w-full flex items-center gap-3 px-3 py-2 rounded
          transition text-right
          ${active ? "bg-yellow-700 text-white" : "hover:bg-gray-200"}
          ${isSidebarOpen ? "justify-start" : "justify-center"}
        `}
      >
        {icon}
        {isSidebarOpen && <span>{title}</span>}
      </button>
    );
  }
}
