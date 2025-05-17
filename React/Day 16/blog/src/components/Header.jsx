import React from "react";
import Link from "next/link";
const Header = () => {
    return (
        <header className="bg-green-600 text-white shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <h1 className="text-2xl font-bold tracking-tight">
                    Recipe<span className="text-yellow-300">Book</span>
                </h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="hover:text-yellow-300 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/recipes" className="hover:text-yellow-300 transition-colors">
                                Recipes
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-yellow-300 transition-colors">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-yellow-300 transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;