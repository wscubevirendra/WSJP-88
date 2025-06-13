'use client'
import React from 'react';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

const ProductAdd = () => {
    return (
        <>

            <section className="mt-4 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-8">Add a New Product</h2>
                    <form className="space-y-6">

                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                                    placeholder="Enter product name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Slug
                                </label>
                                <input
                                    type="text"
                                    className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                                    placeholder="Enter product slug"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Original Price
                                </label>
                                <input
                                    type="number"
                                    className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                                    placeholder="Enter original price"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Discount Price
                                </label>
                                <input
                                    type="number"
                                    className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                                    placeholder="Enter discount percentage"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Final Price
                                </label>
                                <input
                                    type="number"
                                    readOnly
                                    className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 bg-gray-100 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                                    placeholder="Final price"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Category
                                </label>
                                {/* <Select placeholder="Select category" /> */}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Color
                                </label>
                                {/* <Select isMulti placeholder="Select colors" /> */}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Long Description
                            </label>
                            {/* <ReactQuill theme="snow" value="" readOnly /> */}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Short Description
                            </label>
                            <textarea
                                rows="4"
                                className="block w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter product short description"
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Image
                            </label>
                            <input
                                type="file"
                                className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
                            >
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ProductAdd;
