import React from "react";
import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-blue-600">Ecommerce</span>
            </div>

            {/* Search Bar */}
            <div className="flex items-center w-1/2 max-w-md">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
                    <FaSearch />
                </button>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
                <button className="text-gray-600 hover:text-blue-600 text-xl">
                    <FaUserCircle />
                </button>
                <button className="relative text-gray-600 hover:text-blue-600 text-xl">
                    <FaShoppingCart />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                        2
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header;