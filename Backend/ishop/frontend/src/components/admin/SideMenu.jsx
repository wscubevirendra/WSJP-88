'use client';

import React, { useState } from 'react';
import {
    FiGrid,
    FiCalendar,
    FiMessageCircle,
    FiFolder,
    FiShoppingCart,
    FiMail,
    FiFileText,
    FiBriefcase,
    FiUser,
    FiChevronDown,
    FiChevronUp,
    FiMenu,
} from 'react-icons/fi';


import { FaProductHunt } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { SiBrandfolder } from "react-icons/si";
import { IoIosColorPalette } from "react-icons/io";




const menuItems = [
    {
        title: 'Dashboards',
        icon: FiGrid,
        badge: '3',
    },

];

const applications = [

    {
        title: 'User Management',
        icon: FiUser,

    },
    {
        title: 'Products',
        icon: FiShoppingCart,
        dropdown: ['Add', 'View', 'Edit', "new category"],
    },
    {
        title: 'Category',
        icon: BiSolidCategory ,
        dropdown: ['Add', 'View', 'Drafts'],
    },
    {
        title: 'Brands',
        icon: SiBrandfolder ,
        dropdown: ['Add', 'View'],
    },
    {
        title: 'Color',
        icon: IoIosColorPalette ,
        dropdown: ['Add', 'view'],
    },
    {
        title: 'Contacts',
        icon: FiUser,
        dropdown: ['All Contacts', 'Favorites'],
    },
];

const SideMenu = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (title) => {
        setOpenDropdown(openDropdown === title ? null : title);
    };

    return (
        <aside className="w-full h-screen bg-[#0f1125] text-white p-4 space-y-4 overflow-y-auto">
            {/* Logo and Toggle */}
            <div className="flex items-center justify-between mb-6">
                <div className="text-2xl font-bold flex items-center gap-2">
                    <div className="w-4 h-4 bg-white rounded-full" />
                    <span>BOREX</span>
                </div>
                <FiMenu className="text-xl" />
            </div>

            {/* Menu Section */}
            <div className="text-xs text-gray-400 uppercase">Menu</div>
            {menuItems.map((item, idx) => (
                <button
                    key={idx}
                    className="flex justify-between items-center w-full text-left px-2 py-2 text-gray-300 hover:bg-[#1a1d3b] rounded"
                >
                    <div className="flex items-center gap-3 text-sm">
                        <item.icon />
                        {item.title}
                    </div>
                    {item.badge && (
                        <span className="bg-blue-600 text-xs px-2 rounded-full font-semibold">
                            {item.badge}
                        </span>
                    )}
                </button>
            ))}

            {/* Applications Section */}
            <div className="text-xs text-gray-400 uppercase pt-4">Applications</div>
            {applications.map((app, idx) => {
                const isOpen = openDropdown === app.title;
                return (
                    <div key={idx} className="w-full">
                        <button
                            onClick={() =>
                                app.dropdown ? toggleDropdown(app.title) : null
                            }
                            className="flex justify-between items-center w-full text-left px-2 py-2 text-gray-300 hover:bg-[#1a1d3b] rounded"
                        >
                            <div className="flex items-center gap-3 text-sm">
                                <app.icon />
                                {app.title}
                            </div>
                            <div className="flex items-center gap-1">
                                {app.badge && (
                                    <span className="bg-red-200 text-red-600 text-xs px-2 rounded-full font-semibold">
                                        {app.badge}
                                    </span>
                                )}
                                {app.dropdown &&
                                    (isOpen ? (
                                        <FiChevronUp className="text-xs" />
                                    ) : (
                                        <FiChevronDown className="text-xs" />
                                    ))}
                            </div>
                        </button>

                        {/* Dropdown Items */}
                        {isOpen && app.dropdown && (
                            <div className="pl-8 text-sm text-gray-400 space-y-1">
                                {app.dropdown.map((subItem, subIdx) => (
                                    <div
                                        key={subIdx}
                                        className="cursor-pointer hover:text-white"
                                    >
                                        {subItem}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </aside>
    );
};

export default SideMenu;
