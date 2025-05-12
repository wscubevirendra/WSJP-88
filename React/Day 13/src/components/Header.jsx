import React, { useContext } from "react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { context } from "../Store";

const Header = () => {
    const { cart } = useContext(context)

    return (
        <header className="bg-white shadow-md p-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">ShopKart</div>

                {/* Navigation */}
                <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <a href="#" className="hover:text-blue-600">Shop</a>
                    <a href="#" className="hover:text-blue-600">About</a>
                    <a href="#" className="hover:text-blue-600">Contact</a>
                </nav>

                {/* Search + Icons */}
                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="hidden sm:flex items-center border rounded-md px-2 py-1">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none px-2"
                        />
                        <FaSearch className="text-gray-500" />
                    </div>

                    {/* Icons */}
                    <Link to="/cart">
                        <button className="relative">
                            <FaShoppingCart size={22} className="text-gray-700 cursor-pointer hover:text-blue-600" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cart.length}</span>
                        </button></Link>


                    <button>
                        <FaUser size={22} className="text-gray-700 hover:text-blue-600" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
