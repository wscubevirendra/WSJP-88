import React from 'react'

export default function Input({ setSearch }) {
    return (
        <div className="col-md-6 offset-md-3">
            <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="form-control form-control-lg"
                placeholder="Search for a movie..."

            />
        </div>
    )
}
