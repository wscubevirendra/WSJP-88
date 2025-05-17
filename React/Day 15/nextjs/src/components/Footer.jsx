import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and Description */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">MyLogo</h2>
                    <p className="text-sm">
                        Building modern web experiences with React and Tailwind CSS.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition">Home</a></li>
                        <li><a href="#" className="hover:text-white transition">About</a></li>
                        <li><a href="#" className="hover:text-white transition">Services</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white transition">Facebook</a>
                        <a href="#" className="hover:text-white transition">Twitter</a>
                        <a href="#" className="hover:text-white transition">LinkedIn</a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
                © {new Date().getFullYear()} MyCompany. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
