import React, { useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0);
    function incHandler() {
        setCount(count + 1)  //setcount(21)
    }

    function decHandler() {
        setCount(count - 1)
    }
    return (
        <div className='card'>
            <button onClick={incHandler}>+</button>
            <h1>{count}</h1>
            <button onClick={decHandler}>-</button>
        </div>
    )
}
