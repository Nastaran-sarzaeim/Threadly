"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AddProductForm from "@/components/dashboard/add-product";
import Sidebar from "@/components/dashboard/sidebar";
import ProductAdminList from "@/components/dashboard/product-admin-list";
import TransactionsTable from "@/components/dashboard/transactions-table";
import { products } from "@/data/products";
import { useUser } from "@/components/login/context/user-context";

export default function AdminPage() {
    const router = useRouter();
    const { user } = useUser();
    const [transactions, setTransactions] = useState([]);
    const [activeTab, setActiveTab] = useState("productList");

    useEffect(() => {
        if (!user) return; 
        if (user.role !== "admin") router.push("/");

        if (user.role === "admin") {
            setTransactions([
                { id: 1, user: "علی", product: "تی‌شرت مردانه", amount: 250000 },
                { id: 2, user: "سارا", product: "هودی بچگانه", amount: 350000 },
            ]);
        }
    }, [user, router]);

    if (!user) return <div>در حال بررسی دسترسی...</div>; 

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="flex-1 p-6">
                {activeTab === "productList" && (
                    <ProductAdminList products={products} handleDeleteProduct={() => {}} />
                )}

                {activeTab === "addProduct" && <AddProductForm />}

                {activeTab === "transactions" && (
                    <TransactionsTable transactions={transactions} />
                )}
            </div>
        </div>
    );
}