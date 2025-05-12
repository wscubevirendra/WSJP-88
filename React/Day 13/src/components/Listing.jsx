import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { context } from "../Store";


// Sample product data (you can replace this with dynamic props or API data)

const Listing = () => {
    const { addtoCart } = useContext(context)
    const { categorySlug } = useParams();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPage, setTotalPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const limit = 20;


    const getCategory = () => {
        axios.get("https://dummyjson.com/products/categories").then(
            (response) => {
                setCategory(response.data)
            }
        ).catch(
            (error) => {
                setCategory([])
            }
        )

    }

    useEffect(
        () => {
            getCategory()
        },
        []
    )


    useEffect(
        () => {
            let API = null;
            if (categorySlug == null) {
                API = "https://dummyjson.com/products";
            } else {
                API = "https://dummyjson.com/products/category/" + categorySlug;
            }
            setLoading(true)
            axios.get(API).then(
                (response) => {
                    setProducts(response.data.products)
                    setTotalPage(Math.ceil(response.data.total / limit))
                }

            ).catch(
                (error) => {
                    setProducts([])
                }

            ).finally(
                () => {
                    setLoading(false)
                }
            )

        },
        [categorySlug]
    )

    const pagination = [];
    for (let i = 0; i < totalPage; i++) {
        pagination.push(
            <button onClick={() => setCurrentPage(i)} class="px-4 py-2 text-sm font-medium text-gray-700 bg-teal-500 border border-gray-300 hover:bg-gray-100">
                {i + 1}
            </button>
        )


    }

    useEffect(
        () => {
            axios.get(`https://dummyjson.com/products?skip=${currentPage * limit}`).then(
                (response) => {
                    setProducts(response.data.products)
                }

            ).catch(
                (error) => {
                    setProducts([])
                }

            ).finally(
                () => {
                    setLoading(false)
                }
            )


        }, [currentPage]
    )

    // console.log(pagination)

    return (
        <section className="py-10 px-4 bg-gray-100">
            <div className="w-full mx-auto">
                <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
                <div className="grid grid-cols-5 gap-6">


                    <ul className=" col-span-1">
                        <Link to="/">
                            <li className="w-full p-2 mb-2 shadow cursor-pointer">All</li>
                        </Link>
                        {
                            category?.map((cat, index) => {
                                return (
                                    <Link to={`/${cat.slug}`} key={index}>
                                        <li className="w-full p-2 mb-2 shadow cursor-pointer">{cat.name}</li>
                                    </Link>
                                )

                            })
                        }
                    </ul>

                    <div className="grid gap-6  content-start col-span-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div class="flex col-span-full  items-center space-x-2">
                            {
                                pagination
                            }
                        </div>
                        {
                            loading ?
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,].map(() => {
                                    return (
                                        <div className="bg-white rounded-xl shadow-md p-4 animate-pulse">
                                            <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>

                                            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                                            <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>

                                            <div className="h-10 bg-gray-300 rounded w-full"></div>
                                        </div>
                                    )
                                })
                                :
                                products?.map((product, index) => (
                                    <div
                                        key={product.id}
                                        className="bg-white rounded-xl  shadow hover:shadow-lg transition-all p-4"
                                    >
                                        <Link to={`/details/${product.id}`} className="block mb-4">
                                            <img
                                                src={product.thumbnail}
                                                alt={product.title}
                                                className="w-full h-48 object-cover rounded-lg mb-4"
                                            />
                                        </Link>

                                        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>

                                        <p className="text-blue-600 font-bold mt-2">${product.price}</p>
                                        <button onClick={() => addtoCart(product.id)} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                                            Add to Cart
                                        </button>
                                    </div>
                                ))

                        }



                    </div>

                </div>

            </div>
        </section>
    );
};

export default Listing;
