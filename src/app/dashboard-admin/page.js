"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AddProductForm from "@/components/dashboard/add-product";
import Sidebar from "@/components/dashboard/sidebar";
import ProductAdminList from "@/components/dashboard/product-admin-list";
import TransactionsTable from "@/components/dashboard/transactions-table";

export default function AdminPage() {
    const router = useRouter();
    const [products, setProducts] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [activeTab, setActiveTab] = useState("productList");

    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role !== "admin") router.push("/login");

        const fetchAllProducts = async () => {
            let allProducts = [];
            let skip = 0;
            const limit = 200;
            let total = 0;

            do {
                const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
                const data = await res.json();
                allProducts = [...allProducts, ...data.products];
                total = data.total;
                skip += limit;
            } while (skip < total);

            setProducts(allProducts);
        };

        setTransactions([
            { id: 1, user: "Ali", product: "Laptop", amount: 1200 },
            { id: 2, user: "Sara", product: "Phone", amount: 800 },
        ]);

        fetchAllProducts().catch(console.error);
    }, []);

    const handleDeleteProduct = (id) => {
        setProducts(products.filter(p => p.id !== id));
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
