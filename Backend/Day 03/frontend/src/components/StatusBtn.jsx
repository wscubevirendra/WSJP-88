'use client'

import axios from 'axios'
import React from 'react'

export default function StatusBtn({ status, id }) {
    function statusHandler() {
        axios.patch("http://localhost:5000/user/status-update/" + id).then(
            (response) => {
                if (response.data.flag == 1) {
                    window.location.reload()
                }
            }
        ).catch(
            (erro) => {
                console.log(erro)
            }
        )
    }
    return (
        <span
            onClick={statusHandler}
            className={`px-3 py-1 rounded-full cursor-pointer text-xs font-semibold ${status ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
        >
            {status ? "Active" : "Inactive"}
        </span>
    )
}
