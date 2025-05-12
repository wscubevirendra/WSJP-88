import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">ShopKart</h2>
          <p>Your one-stop shop for all your fashion and lifestyle needs.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#"><FaFacebook size={20} className="hover:text-white" /></a>
            <a href="#"><FaInstagram size={20} className="hover:text-white" /></a>
            <a href="#"><FaTwitter size={20} className="hover:text-white" /></a>
            <a href="#"><FaLinkedin size={20} className="hover:text-white" /></a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Men</a></li>
            <li><a href="#" className="hover:text-white">Women</a></li>
            <li><a href="#" className="hover:text-white">Kids</a></li>
            <li><a href="#" className="hover:text-white">New Arrivals</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Order Status</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Subscribe</h3>
          <p>Get updates on promotions and offers.</p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} ShopKart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
