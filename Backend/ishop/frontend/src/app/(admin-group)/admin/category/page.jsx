import React from "react";

const categories = [
    { id: 1, name: "Electronics", description: "Devices and gadgets" },
    { id: 2, name: "Clothing", description: "Apparel and accessories" },
    { id: 3, name: "Books", description: "Printed and digital books" },
];

export default function CategoryTable() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Categories</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b text-left">ID</th>
                            <th className="px-4 py-2 border-b text-left">Name</th>
                            <th className="px-4 py-2 border-b text-left">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((cat) => (
                            <tr key={cat.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border-b">{cat.id}</td>
                                <td className="px-4 py-2 border-b">{cat.name}</td>
                                <td className="px-4 py-2 border-b">{cat.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}