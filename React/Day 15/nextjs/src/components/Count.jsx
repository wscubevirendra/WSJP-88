'use client'
import React, { useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0);
    function handler() {
        setCount(count + 1)
    }
    return (
        <div className='w-[300px] h-[100px] flex gap-10  shadow my-20 bg-blue-300'>
            <button
                onClick={handler}

            >+</button>
            <h1>{count} count</h1>
            <button>-</button>
        </div>

    )
}
