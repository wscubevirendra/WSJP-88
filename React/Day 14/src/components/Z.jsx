import React, { useContext } from 'react'
import { Context } from '../Store'

export default function Z() {
    const { count } = useContext(Context)
    return (
        <div>Z:{count}</div>
    )
}
