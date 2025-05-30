'use client'
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";

const ContactForm = () => {

    const notify = (msg) => toast(msg);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            contact: e.target.contact.value
        }

        axios.post("http://localhost:5000/user/create", data).then(
            (response) => {
                notify(response.data.msg)
                if (response.data.flag === 1) {
                    console.log(response.data.msg);

                }
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )

    }
    return (
        <div className="max-w-lg  mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg">
            <Link href="/">
                <button className="bg-amber-400 px-5 py-2 my-4">Back </button></Link>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Contact Form
            </h2>
            <ToastContainer position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Contact Field */}
                <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                        Contact Number
                    </label>
                    <input
                        type="tel"
                        id="contact"
                        name="contact"
                        placeholder="Enter your contact number"
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
