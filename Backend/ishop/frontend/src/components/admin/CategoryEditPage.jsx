'use client';

import React, { useEffect, useRef, useState } from "react";
import { generateSlug, AxiosApiInstance, notify } from "@/app/utility/helper";
import { getCategory } from "@/app/utility/api-call";

export default function CategoryEditPage({ category_id }) {
    const [category, setCategory] = useState(null);
    const nameRef = useRef();
    const slugRef = useRef();

    useEffect(() => {
        async function fetchCategory() {
            try {
                const categoryJSON = await getCategory(category_id);
                setCategory(categoryJSON.data);
            } catch (error) {
                notify("Failed to load category", false);
            }
        }

        fetchCategory();
    }, [category_id]);

    function createSlug() {
        const slug = generateSlug(nameRef.current.value);
        slugRef.current.value = slug;
    }

    function submitHandler(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("slug", slugRef.current.value);
        formData.append("image", event.target.image.files[0]);

        AxiosApiInstance.put('category/update/'+category_id, formData)
            .then((response) => {
                notify(response.data.message, response.data.success);
                if (response.data.success) {
                    nameRef.current.value = "";
                    slugRef.current.value = "";
                }
            })
            .catch((error) => {
                console.log(error)
                notify(error?.response?.data?.message || "Something went wrong", false);
            });
    }

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-xl mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
                Edit Category
            </h2>
            <form onSubmit={submitHandler} className="space-y-5">
                {/* Name */}
                <div>
                    <label className="block mb-1 text-gray-600 font-medium">Name</label>
                    <input
                        type="text"
                        defaultValue={category?.name}
                        ref={nameRef}
                        onChange={createSlug}
                        placeholder="Enter category name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Slug */}
                <div>
                    <label className="block mb-1 text-gray-600 font-medium">Slug</label>
                    <input
                        type="text"
                        defaultValue={category?.slug}
                        ref={slugRef}
                        placeholder="Enter slug (e.g., category-name)"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block mb-1 text-gray-600 font-medium">Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        name="image"
                        className="w-full px-3 py-2 text-sm file:mr-4 file:py-2 file:px-4
                            file:rounded-xl file:border-0 file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    {category?.image && (
                        <img
                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/categories/${category.image}`}
                            alt={category?.name}
                            className="w-10 h-10 rounded-full object-cover mt-2"
                        />
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all"
                >
                    Submit Category
                </button>
            </form>
        </div>
    );
}
