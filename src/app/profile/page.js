"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AccountTab from "@/components/profile/account-tab";
import CartTab from "@/components/profile/cart-tab";
import OrdersTab from "@/components/profile/orders-tab";
import UserProfileSidebar from "@/components/profile/user-profile-sidebar";
import FavoritesTab from "@/components/profile/favorite-tab";
import AddressesTab from "@/components/profile/addresses-tab";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [selectedTab, setSelectedTab] = useState("account");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem("loggedInUser");
    if (!data) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(data));

    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true)
    }
  }, [router]);

  if (!user) return null;

  return (
    <div className="grid grid-cols-[auto_1fr] min-h-screen bg-gray-100">
      <UserProfileSidebar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        isSidebarOpen={isSidebarOpen}
      />

      <main className="p-6">

        <div className={selectedTab === "account" ? "block" : "hidden"}>
          <AccountTab user={user} setUser={setUser} />
        </div>

        <div className={selectedTab === "favorites" ? "block" : "hidden"}>
          <FavoritesTab user={user} setUser={setUser} />
        </div>

        <div className={selectedTab === "addresses" ? "block" : "hidden"}>
          <AddressesTab user={user} setUser={setUser} />
        </div>

        <div className={selectedTab === "cart" ? "block" : "hidden"}>
          <CartTab user={user} />
        </div>

        <div className={selectedTab === "orders" ? "block" : "hidden"}>
          <OrdersTab user={user} />
        </div>
      </main>
    </div>
  );
}
