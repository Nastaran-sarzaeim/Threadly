"use client";

export default function TransactionsTable({ transactions }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">تراکنش‌ها</h3>
      <table className="min-w-full bg-white shadow rounded overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4">شناسه</th>
            <th className="py-2 px-4">کاربر</th>
            <th className="py-2 px-4">محصول</th>
            <th className="py-2 px-4">مبلغ (تومان)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <tr key={tx.id} className="border-b">
              <td className="py-2 px-4">{tx.id}</td>
              <td className="py-2 px-4">{tx.user}</td>
              <td className="py-2 px-4">{tx.product}</td>
              <td className="py-2 px-4">{tx.amount.toLocaleString("fa-IR")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
