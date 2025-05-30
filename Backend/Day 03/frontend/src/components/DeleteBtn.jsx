'use client'

import axios from 'axios'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default function DeleteBtn({ id }) {
    const notify = (msg) => toast(msg);
    function deleteHandler() {
        axios.delete("http://localhost:5000/user/delete/" + id).then(
            (response) => {
                notify(response.data.msg)
                if (response.data.flag === 1) {
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000);
                }
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    return (
        <>
            <ToastContainer position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <span
                onClick={deleteHandler}
                className={`px-3 py-1  cursor-pointer text-green-700 border bg-yellow-50 rounded-full text-xs font-semibold text-red-700"
                        }`}
            >
                Delete
            </span>
        </>

    )
}
