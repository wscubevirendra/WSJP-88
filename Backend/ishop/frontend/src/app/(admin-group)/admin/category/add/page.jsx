'use client'
import React, { useRef } from "react";
import { generateSlug, AxiosApiInstance, notify } from "@/app/utility/helper";




const CategoryAddPage = () => {
    const nameRef = useRef();
    const slugRef = useRef();
    function createSlug() {
        const slug = generateSlug(nameRef.current.value);
        slugRef.current.value = slug
    }

    function submitHandler(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("slug", slugRef.current.value);
        formData.append("image", event.target.image.files[0]);
     
        //http://localhost:5000/category/create
        AxiosApiInstance.post('category/create', formData).then(
            (response) => {
                notify(response.data.message, response.data.success);
                if (response.data.success) {

                    nameRef.current.value = "";
                    slugRef.current.value = "";
                }
            }

        ).catch(
            (error) => {
                notify(error.response.data.message, false);

            }
        )

    }



    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-xl mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
                Create Category
            </h2>
            <form onSubmit={submitHandler} className="space-y-5">
                {/* Name */}
                <div>
                    <label className="block mb-1 text-gray-600 font-medium">
                        <div className="flex items-center gap-2">

                            Name
                        </div>
                    </label>
                    <input
                        type="text"
                        ref={nameRef}
                        onChange={createSlug}
                        placeholder="Enter category name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Slug */}
                <div>
                    <label className="block mb-1 text-gray-600 font-medium">
                        <div className="flex items-center gap-2">

                            Slug
                        </div>
                    </label>
                    <input
                        type="text"
                        ref={slugRef}
                        placeholder="Enter slug (e.g., category-name)"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block mb-1 text-gray-600 font-medium">
                        <div className="flex items-center gap-2">

                            Image
                        </div>
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        name="image"
                        className="w-full px-3 py-2 text-sm file:mr-4 file:py-2 file:px-4
              file:rounded-xl file:border-0 file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
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
};

export default CategoryAddPage;
