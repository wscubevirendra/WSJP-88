import React, { useContext, useState } from 'react'
import Z from './Z'
import { Context } from '../Store'

export default function Y() {
    const { incHandler } = useContext(Context)
    return (
        <div>Y <button onClick={incHandler}>+</button> <Z /></div>
    )
}
