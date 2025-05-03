import React from 'react'

export default function Card({ movies }) {


    return (
        <div className="row">
            {movies.map((movie) => (
                <div className="col-md-3 mb-4" key={movie.id}>
                    <div className="card movie-card h-100 shadow-sm">
                        <img
                            src={`https://image.tmdb.org/t/p/w1280/${movie.
                                poster_path}`}
                            className="card-img-top"
                            alt={movie.title}
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title">{movie.title}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
