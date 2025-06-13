import { getBrand, getCategory } from "@/app/utility/api-call";
import DeleteBtn from "@/components/admin/DeleteBtn";
import StatusBtn from "@/components/admin/StatusBtn";
import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Link from "next/link";



export default async function CategoryTable() {
    const brandsJSON = await getBrand();
    const brands = brandsJSON.data
    // console.log(categories, "category......")

    return (
        <div className="p-6">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold mb-6">brands Management</h1>
                <Link className=" h-8 px-5 rounded-lg text-center text-white bg-blue-500" href="/admin/brand/add">Add+</Link>
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
                        {brands && brands.map((brand) => (
                            <tr key={brand._id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {brand.name}
                                </td>
                                <td className="px-6 py-4 text-gray-700">{brand.slug}</td>
                                <td className="px-6 py-4">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/brand/${brand.logo}`}
                                        alt={brand.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                </td>
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <Link href={`/admin/brand/edit/${brand._id}`}>
                                        <button className="text-blue-500 hover:text-blue-700">
                                            <FiEdit size={18} />
                                        </button>
                                    </Link>

                                    <DeleteBtn id={brand._id} />
                                    <StatusBtn id={brand._id} status={brand.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}



