'use client'

import React from 'react'
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { notify, AxiosApiInstance } from '@/app/utility/helper';

export default function StatusBtn({ id, status }) {
    const router = useRouter()
    //http://localhost:5000/category/delete/:id
    function statusHandler() {
        AxiosApiInstance.patch("category/status-update/" + id).then(
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
        <button onClick={statusHandler} >
            {status ? (
                <MdToggleOn size={24} className="text-green-500 hover:text-green-700" />
            ) : (
                <MdToggleOff size={24} className="text-red-500 hover:text-red-700" />
            )}
        </button>
    )
}
