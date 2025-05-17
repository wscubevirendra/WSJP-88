import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">MyLogo</div>

                {/* Navigation */}
                <nav className="space-x-8 hidden md:flex">
                    <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                    <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                    <Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
                    <Link href="contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                </nav>

                {/* Call to Action Button */}
                <div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Get Started</button>
                </div>

                {/* Mobile Menu (Optional for later) */}
            </div>
        </header>
    );
};

export default Header;
