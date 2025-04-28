import React, { useState } from 'react'
import data from "./data"

import Card from './Card';


export default function Listing() {

    return (
        <div className='row gy-4'>
            {
                data.map(
                    (item, index) => {
                        return (
                            <Card key={item.id} item={item} />
                        )
                    }
                )
            }
        </div>
    )
}



