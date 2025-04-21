import React, { useState } from "react";
import { initialCustomers } from '../data/customers';
import Header from "./Header";


function CustomerList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [customers, setCustomers] = useState(initialCustomers);

  // 検索処理
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // 検索クエリが空の場合、顧客リストをリセット
    if (query === "") {
      setCustomers(initialCustomers);
    } else {
      // 検索クエリに一致する顧客をフィルタリング
      const filteredCustomers = initialCustomers.filter(
        (customer) =>
          customer.name.toLowerCase().includes(query.toLowerCase()) ||
          customer.email.toLowerCase().includes(query.toLowerCase()) ||
          customer.phone.includes(query)
      );
      setCustomers(filteredCustomers);
    }
  };

  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">顧客一覧</h1>

        {/* 検索フォーム */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="顧客名やメールアドレスで検索"
          className="p-2 border rounded mb-4 w-full"
        />

        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700 border-b">
                  顧客名
                </th>
                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700 border-b">
                  メールアドレス
                </th>
                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700 border-b">
                  電話番号
                </th>
                <th className="px-4 py-2 text-left text-sm font-bold text-gray-700 border-b">
                  登録日
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b hover:bg-blue-50 hover:cursor-pointer"
                >
                  <td className="px-4 py-2 text-sm text-gray-900">
                    {customer.name}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {customer.email}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {customer.phone}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {customer.registeredAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomerList;
