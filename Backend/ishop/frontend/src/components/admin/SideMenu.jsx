'use client';

import React from 'react';
import Link from 'next/link';

import {
    FiGrid,
    FiUser,
    FiShoppingCart,
    FiMenu,
} from 'react-icons/fi';

import { BiSolidCategory } from 'react-icons/bi';
import { SiBrandfolder } from 'react-icons/si';
import { IoIosColorPalette } from 'react-icons/io';

const menuItems = [
    {
        title: 'Dashboards',
        icon: FiGrid,
        badge: '3',
        link: '/dashboard',
    },
];

const applications = [
    {
        title: 'Users',
        icon: FiUser,
        path: '/admin/users',
    },
    {
        title: 'Products',
        icon: FiShoppingCart,
        path: '/admin/product',
    },
    {
        title: 'Category',
        icon: BiSolidCategory,
        path: '/admin/category',
    },
    {
        title: 'Brands',
        icon: SiBrandfolder,
        path: '/admin/brand',
    },
    {
        title: 'Color',
        icon: IoIosColorPalette,
        path: '/admin/color',
    },
    {
        title: 'Contacts',
        icon: FiUser,
        path: '/admin/contacts',
    },
];

const SideMenu = () => {
    return (
        <aside className="w-full h-[100%] bg-[#0f1125] text-white p-4 space-y-4 overflow-y-auto">
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
                <Link
                    href={item.link}
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
                </Link>
            ))}

            {/* Applications Section */}
            <div className="text-xs text-gray-400 uppercase pt-4">Applications</div>
            {applications.map((app, idx) => (
                <Link
                    href={app.path}
                    key={idx}
                    className="flex items-center gap-3 px-2 py-2 text-sm text-gray-300 hover:bg-[#1a1d3b] rounded"
                >
                    <app.icon />
                    {app.title}
                </Link>
            ))}
        </aside>
    );
};

export default SideMenu;
