import React from 'react';

const products = [
    {
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        price: "59.99",
        image: "1.jpeg"
    },
    {
        name: "Smart Watch",
        description: "Track your fitness and notifications on the go.",
        price: "129.99",
        image: "2.jpeg"
    },
    {
        name: "Bluetooth Speaker",
        description: "Portable speaker with deep bass and long battery life.",
        price: "39.99",
        image: "3.jpeg"
    }, {
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        price: "59.99",
        image: "1.jpeg"
    },
    {
        name: "Smart Watch",
        description: "Track your fitness and notifications on the go.",
        price: "129.99",
        image: "2.jpeg"
    },
    {
        name: "Bluetooth Speaker",
        description: "Portable speaker with deep bass and long battery life.",
        price: "39.99",
        image: "3.jpeg"
    },
    {
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation.",
        price: "59.99",
        image: "1.jpeg"
    },
    {
        name: "Smart Watch",
        description: "Track your fitness and notifications on the go.",
        price: "129.99",
        image: "2.jpeg"
    },
    {
        name: "Bluetooth Speaker",
        description: "Portable speaker with deep bass and long battery life.",
        price: "39.99",
        image: "3.jpeg"
    }
];

function ProductCard({ product }) {
    return (
        <div className="max-w-xxl bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
                className="w-full h-48 object-cover"
                src={product.image}
                alt={product.name}
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-indigo-600">${product.price}</span>
                    <button className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-gray-100 py-10">
            <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
            <div className="grid grid-cols-4  gap-8">
                {products.map((product, idx) => (
                    <ProductCard key={idx} product={product} />
                ))}
            </div>
        </main>
    );
}
