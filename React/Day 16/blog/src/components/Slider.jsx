'use client'
import React, { useState ,useEffect} from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Slider({ data }) {
    const [current, setCurrent] = useState(0)

    useEffect(
        () => {
            const clear = setInterval(() => {
                console.log("Hii")
                setCurrent(
                    (current) => {
                        return current === data.length - 1 ? 0 : current + 1
                    }
                )

            }, 3000);

            return () => {
                clearInterval(clear) // CleanUp function
            }

        },
        []
    )

    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
            <div className="relative h-[400px]">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-500 ease-in-out ${current === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
                            }`}
                    >
                        <img
                            src={item.image}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                ))}
            </div>

            {/* Optional: Navigation Buttons */}
            <div className="absolute inset-y-0 left-4 flex items-center z-20">
                <button
                    onClick={() => setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1))}
                    className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition"
                >
                    <FaChevronLeft />
                </button>
            </div>

            <div className="absolute inset-y-0 right-4 flex items-center z-20">
                <button
                    onClick={() => setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1))}
                    className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition"
                >
                    <FaChevronRight />
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {data.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full ${current === index ? 'bg-gray-800' : 'bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
