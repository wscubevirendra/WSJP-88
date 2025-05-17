import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                <span className="text-xl font-bold text-green-400">TastyRecipes</span>
                <p className="text-sm mt-1">© {new Date().getFullYear()} TastyRecipes. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
                <a href="/about" className="hover:text-green-400 transition">About</a>
                <a href="/contact" className="hover:text-green-400 transition">Contact</a>
                <a href="/privacy" className="hover:text-green-400 transition">Privacy Policy</a>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" aria-label="Instagram" className="hover:text-green-400 transition">
                    <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-green-400 transition">
                    <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Facebook" className="hover:text-green-400 transition">
                    <FaFacebookF className="w-5 h-5" />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;