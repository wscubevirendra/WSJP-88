import { getCategory } from "@/app/utility/api-call";
import DeleteBtn from "@/components/admin/DeleteBtn";
import StatusBtn from "@/components/admin/StatusBtn";
import React from "react";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";

export default async function CategoryTable() {
    const categoryJSON = await getCategory();
    const categories = categoryJSON.data;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">📂 Category Management</h1>
                <Link
                    href="/admin/category/add"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium rounded-lg shadow-lg transition-all duration-300"
                >
                    ➕ Add Category
                </Link>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl shadow-2xl border border-gray-200">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 uppercase text-xs tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Slug</th>
                            <th className="px-6 py-4">Image</th>
                            <th className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories && categories.map((cat, index) => (
                            <tr
                                key={cat._id}
                                className={`${index !== categories.length - 1 ? 'border-b' : ''
                                    } ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition`}
                            >
                                <td className="px-6 py-4 font-medium text-gray-800">{cat.name}</td>
                                <td className="px-6 py-4 text-gray-600">{cat.slug}</td>
                                <td className="px-6 py-4">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-300 shadow-sm">
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/categories/${cat.image}`}
                                            alt={cat.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </td>
                                <td className="px-6 py-4 flex items-center gap-2">
                                    <Link href={`/admin/category/edit/${cat._id}`}>
                                        <button className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition">
                                            <FiEdit size={16} />
                                        </button>
                                    </Link>
                                    <DeleteBtn id={cat._id} />
                                    <StatusBtn id={cat._id} status={cat.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
