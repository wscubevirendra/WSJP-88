'use client'

import { AxiosApiInstance, notify } from '@/app/utility/helper';
import React from 'react'
import { FiTrash2 } from "react-icons/fi";
import { useRouter } from 'next/navigation';



export default function DeleteBtn({ id }) {
    const router = useRouter()
    //http://localhost:5000/category/delete/:id
    function deleteHandler() {
        AxiosApiInstance.delete("category/delete/" + id).then(
            (response) => {
                notify(response.data.message, response.data.success);
                if (response.data.success) {
                    router.refresh()
                }
            }

        ).catch(
            (error) => {
                notify(error.response.data.message, false);

            }
        )

    }
    return (
        <button onClick={deleteHandler} className="text-red-500 hover:text-red-700">
            <FiTrash2 size={18} />
        </button>
    )
}
