import React, { useState, useEffect } from "react";
import { FaStar, FaShoppingCart, FaTruck, FaBoxOpen, FaTags } from "react-icons/fa";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";



const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const getproducts = () => {
        axios.get("https://dummyjson.com/products/" + productId).then(
            (response) => {
                console.log(response)
                setProduct(response.data)
            }

        ).catch(
            (error) => {
                console.log(error)
            }

        )
    }

    useEffect(
        () => {
            getproducts()
        },
        []
    )

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Product Image */}
                <div className="flex justify-center items-center bg-gray-100 p-4 rounded">
                    <img src={product?.thumbnail} className="w-80 h-auto rounded" />
                </div>

                {/* Product Info */}
                <div>
                    {/* <h1 className="text-2xl font-bold text-gray-800 mb-2">{product?.title}</h1> */}
                    <p className="text-sm text-gray-500 mb-4">Brand: {product?.brand}</p>




                    {/* Price */}
                    <div className="text-3xl font-semibold text-blue-600 mb-2">${product?.price}</div>
                    <p className="text-sm text-gray-500 mb-2">
                        Discount: {product?.discountPercentage}% | Stock: {product?.stock}
                    </p>
                    <p className="text-sm text-green-600 mb-4">{product.availabilityStatus}</p>

                    {/* Add to Cart */}
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
                        <FaShoppingCart />
                        Add to Cart
                    </button>

                    {/* Meta Info */}
                    <div className="mt-6 space-y-2 text-sm text-gray-700">
                        <p><FaTags className="inline mr-2 text-gray-500" /> SKU: {product.sku}</p>
                        <p><FaBoxOpen className="inline mr-2 text-gray-500" /> Min Order: {product.minimumOrderQuantity}</p>
                        <p><FaTruck className="inline mr-2 text-gray-500" /> {product.shippingInformation}</p>
                        <p><MdOutlineAssignmentReturn className="inline mr-2 text-gray-500" /> {product.returnPolicy}</p>
                        <p><FaBoxOpen className="inline mr-2 text-gray-500" /> Warranty: {product.warrantyInformation}</p>
                    </div>
                </div>
            </div>


            <div className="mt-12">
                <h2 className="text-xl font-semibold mb-4">Product Description</h2>
                <p className="text-gray-700 leading-relaxed">{product?.description}</p>

                <h2 className="text-xl font-semibold mt-10 mb-4">Customer Reviews</h2>
                <div className="space-y-4">
                    {product?.reviews?.map((review, idx) => (
                        <div key={idx} className="border-b pb-3">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`mr-1 ${i < review.rating ? "text-yellow-400" : "text-gray-300"
                                            }`}
                                        size={14}
                                    />
                                ))}
                                <span className="ml-2 text-sm text-gray-600">{review?.reviewerName}</span>
                            </div>
                            <p className="text-sm text-gray-700 mt-1">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
