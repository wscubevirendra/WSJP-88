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
        const data = {
            name: nameRef.current.value,
            slug: slugRef.current.value,
            hexcode: event.target.hexcode.value
        }
   
        //http://localhost:5000/category/create
        AxiosApiInstance.post('color/create', data).then(
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
                Create Color
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
                <div>
                    <label className="block mb-1 text-gray-600 font-medium">
                        <div className="flex items-center gap-2">
                            HexCode
                        </div>
                    </label>
                    <input
                        type="color"
                        name="hexcode"
                        placeholder="Enter color code"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>



                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CategoryAddPage;
