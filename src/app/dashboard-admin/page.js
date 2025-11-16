"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AddProductForm from "@/components/dashboard/add-product";
import Sidebar from "@/components/dashboard/sidebar";
import ProductAdminList from "@/components/dashboard/product-admin-list";
import TransactionsTable from "@/components/dashboard/transactions-table";
import { products } from "@/data/products";

export default function AdminPage() {
    const router = useRouter();
    const [transactions, setTransactions] = useState([]);
    const [activeTab, setActiveTab] = useState("productList");

    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role !== "admin") router.push("/login");

        setTransactions([
            { id: 1, user: "علی", product: "تی‌شرت مردانه", amount: 250000 },
            { id: 2, user: "سارا", product: "هودی بچگانه", amount: 350000 },
          ]);

    }, []);

    const handleDeleteProduct = (id) => {
        // setProducts(products.filter(p => p.id !== id));
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="flex-1 p-6">
                {activeTab === "productList" && (
                    <ProductAdminList products={products} handleDeleteProduct={handleDeleteProduct} />
                )}

                {activeTab === "addProduct" && <AddProductForm />}

                {activeTab === "transactions" && (
                    <TransactionsTable transactions={transactions} />
                )}
            </div>
        </div>
    )
}
