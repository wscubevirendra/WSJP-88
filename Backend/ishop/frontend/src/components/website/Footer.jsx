import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h2 className="text-xl font-bold">ishop</h2>
                    <p className="text-sm mt-2">© {new Date().getFullYear()} ishop. All rights reserved.</p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-white transition-colors">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <FaTwitter size={20} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <FaLinkedinIn size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;