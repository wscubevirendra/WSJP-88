'use client'
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Select from 'react-select'
import { FaHome } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { getBrand, getCategory, getColor } from '@/app/utility/api-call';
import { generateSlug, AxiosApiInstance, notify } from '@/app/utility/helper';

const ProductAdd = () => {
    const [brand, setbrand] = useState([]);
    const [category, setCategory] = useState([]);
    const [color, setColor] = useState([]);
    const [AllColors, setAllColors] = useState([]);
    const nameRef = useRef();
    const slugRef = useRef();

    const opRef = useRef();
    const dpRef = useRef();
    const fpRef = useRef();

    function createSlug() {
        const slug = generateSlug(nameRef.current.value);
        slugRef.current.value = slug
    }

    function finalprice() {

        let op = opRef.current.value;
        let dp = dpRef.current.value;
        const d = op * (dp / 100)
        const finalPrice = op - d
        fpRef.current.value = finalPrice;


    }



    const fetchData = async () => {
        const brandsJSON = await getBrand();
        const brands = await brandsJSON.data;
        setbrand(brands)


        const categoryJSON = await getCategory();
        const categories = await categoryJSON.data;
        setCategory(categories)

        const colorJSON = await getColor();
        const colors = await colorJSON.data
        setColor(colors)
    }

    useEffect(
        () => {
            fetchData()
        },
        []
    )


    function submitHandler(event) {
         event.preventDefault();
        const formdata = new FormData();
        formdata.append("name", nameRef.current.value)
        formdata.append("slug", slugRef.current.value)
        formdata.append("shortDescription", event.target.shortDescription.value)
        formdata.append("longDescription", event.target.longDescription.value)
        formdata.append("originalPrice", opRef.current.value)
        formdata.append("discountPercentage", dpRef.current.value)
        formdata.append("finalPrice", fpRef.current.value)
        formdata.append("categoryId", event.target.category.value)
        formdata.append("brandId", event.target.brand.value)
        formdata.append("colors", AllColors)
        formdata.append("thumbnail", event.target.image.files[0])

        AxiosApiInstance.post('product/create', formdata).then(
            (response) => {
                console.log(response.data)
                notify(response.data.message, response.data.success);
                if (response.data.success) {
                    event.reset()
                }
            }

        ).catch(
            (error) => {
                console.log(error)
                notify(error.response.data.message, false);

            }
        )

    }


return (
    <>

        <section className="mt-4 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8">Add a New Product</h2>
                <form onSubmit={submitHandler} className="space-y-6">

                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Product Name
                            </label>
                            <input
                                type="text"
                                ref={nameRef}
                                onChange={createSlug}
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
                                ref={slugRef}
                                readOnly
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
                                ref={opRef}
                                onChange={finalprice}
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
                                ref={dpRef}
                                onChange={finalprice}
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
                                ref={fpRef}
                                readOnly
                                className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 bg-gray-100 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                                placeholder="Final price"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Brand
                            </label>
                            <Select name="brand" options={
                                brand.map((data, i) => {
                                    return { value: data._id, label: data.name }
                                })
                            } />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Category
                            </label>
                            <Select name="category" options={
                                category.map((data, i) => {
                                    return { value: data._id, label: data.name }
                                })
                            } />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Color
                            </label>
                            <Select onChange={
                                (data) => {
                                    const allcolor = data.map(o => o.value);
                                    setAllColors(allcolor)
                                }
                            } isMulti closeMenuOnSelect={false} options={
                                color.map((data, i) => {
                                    return { value: data._id, label: data.name }
                                })
                            } />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Short Description
                        </label>
                        <input
                            type="text"
                            name="shortDescription"
                            className="block w-full border outline-none border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:shadow-md focus:border-blue-500"
                            placeholder="Enter product slug"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Long Description
                        </label>
                        <textarea
                            rows="4"
                            name="longDescription"
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
                            name="image"
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
