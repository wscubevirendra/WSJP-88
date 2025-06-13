import { getCategory, getColor } from "@/app/utility/api-call";
import DeleteBtn from "@/components/admin/DeleteBtn";
import StatusBtn from "@/components/admin/StatusBtn";
import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Link from "next/link";



export default async function ColorTable() {
    const colorJSON = await getColor();
    const colors = colorJSON.data
    // console.log(categories, "category......")

    return (
        <div className="p-6">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold mb-6">Color Management</h1>
                <Link className=" h-8 px-5 rounded-lg text-center text-white bg-blue-500" href="/admin/color/add">Add+</Link>
            </div>
            <div className="overflow-x-auto shadow rounded-lg">
                <table className="min-w-full bg-white text-sm">
                    <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3 text-left">Name</th>
                            <th className="px-6 py-3 text-left">Slug</th>
                            <th className="px-6 py-3 text-left">hexcode</th>
                            <th className="px-6 py-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {colors && colors.map((color) => (
                            <tr key={color._id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {color.name}
                                </td>
                                <td className="px-6 py-4 text-gray-700">{color.slug}</td>
                                <td className="px-6 py-4 text-gray-700">{color.hexcode}</td>
                               
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <Link href={`/admin/category/edit/${color._id}`}>
                                        <button className="text-blue-500 hover:text-blue-700">
                                            <FiEdit size={18} />
                                        </button>
                                    </Link>

                                    <DeleteBtn id={color._id} />
                                    <StatusBtn id={color._id} status={color.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}



