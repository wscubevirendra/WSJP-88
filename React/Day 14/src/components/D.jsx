import React, { useContext } from 'react'
import { Context } from '../Store'

export default function D() {
    const { count } = useContext(Context)
    return (
        <div>D:{count}</div>
    )
}
