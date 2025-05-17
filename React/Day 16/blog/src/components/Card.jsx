import React from 'react'
import Image from 'next/image';

export default function Card({ items }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((item) => (
                <div key={item.id} className=" rounded p-4 bg-white shadow">
                    <Image src={item.image || 'https://dummyjson.com/image/200x200'} width={200} height={200} alt={item.title} className="w-full h-40 object-cover mb-2" />
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                </div>
            ))}
        </div>
    )
}
