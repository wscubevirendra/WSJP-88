import React from 'react';
import { FaUserCircle, FaSignOutAlt, FaBars } from 'react-icons/fa';

const AdminHeader = () => {
    return (
        <header className="bg-gray-800 text-white shadow-md">
            <div className="container mx-auto flex items-center justify-between py-3 px-4">
                {/* Logo / Title */}
                <div className="flex items-center space-x-3">
                    <FaBars className="text-2xl md:hidden" />
                    <span className="text-xl font-bold tracking-wide">Admin Dashboard</span>
                </div>
                {/* Right Side */}
                <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 hover:text-gray-300">
                        <FaUserCircle className="text-2xl" />
                        <span className="hidden md:inline">Admin</span>
                    </button>
                    <button className="flex items-center space-x-2 hover:text-red-400">
                        <FaSignOutAlt className="text-xl" />
                        <span className="hidden md:inline">Logout</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;