"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AccountTab from "@/components/profile/account-tab";
import CartTab from "@/components/profile/cart-tab";
import OrdersTab from "@/components/profile/orders-tab";
import UserProfileSidebar from "@/components/profile/user-profile-sidebar";

export default function ProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [selectedTab, setSelectedTab] = useState("account");

  useEffect(() => {
    const data = localStorage.getItem("loggedInUser");
    if (!data) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(data));
  }, [router]);

  // اگر کاربر لود نشده، چیزی رندر نکن
  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <UserProfileSidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <div className="flex-1 p-6">
        <div className={selectedTab === "account" ? "block" : "hidden"}>
          <AccountTab user={user} setUser={setUser} />
        </div>

        <div className={selectedTab === "cart" ? "block" : "hidden"}>
          <CartTab user={user} />
        </div>

        <div className={selectedTab === "orders" ? "block" : "hidden"}>
          <OrdersTab user={user} />
        </div>
      </div>
    </div>
  );
}
