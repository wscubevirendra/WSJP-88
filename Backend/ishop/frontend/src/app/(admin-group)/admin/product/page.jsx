import { getCategory } from "@/app/utility/api-call";
import DeleteBtn from "@/components/admin/DeleteBtn";
import StatusBtn from "@/components/admin/StatusBtn";
import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Link from "next/link";



export default async function CategoryTable() {
    const categoryJSON = await getCategory();
    const categories = categoryJSON.data
    // console.log(categories, "category......")

    return (
        <div className="p-6">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold mb-6">Category Management</h1>
                <Link className=" h-8 px-5 rounded-lg text-center text-white bg-blue-500" href="/admin/category/add">Add+</Link>
            </div>
            <div className="overflow-x-auto shadow rounded-lg">
                <table className="min-w-full bg-white text-sm">
                    <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3 text-left">Name</th>
                            <th className="px-6 py-3 text-left">Slug</th>
                            <th className="px-6 py-3 text-left">Image</th>
                            <th className="px-6 py-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories && categories.map((cat) => (
                            <tr key={cat._id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {cat.name}
                                </td>
                                <td className="px-6 py-4 text-gray-700">{cat.slug}</td>
                                <td className="px-6 py-4">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/categories/${cat.image}`}
                                        alt={cat.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                </td>
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <Link href={`/admin/category/edit/${cat._id}`}>
                                        <button className="text-blue-500 hover:text-blue-700">
                                            <FiEdit size={18} />
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



