import React, { useEffect, useState } from "react";

const BlogCard = () => {
    const [recipes, setRecipes] = useState([])
    async function getData() {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json()
        setRecipes(data.recipes)
    }
    useEffect(
        () => {
            getData()
        },
        []
    )


    return (
        <div className="container-xl my-5 ">
            <div className="row">
                {
                    recipes.map((data, index) => {
                        return (
                            <div className="card h-100 col-4 shadow-sm border-0 rounded-4 overflow-hidden">
                                <img
                                    src={data.image}
                                    className="card-img-top"
                                    alt={data.name}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{data.name}</h5>

                                </div>
                                <div className="card-footer bg-white d-flex justify-content-between align-items-center border-0">
                                    <small className="text-muted">
                                        <i className="bi bi-person-circle me-1"></i> cookTimeMinutes  {data.cookTimeMinutes}
                                    </small>
                                    <a href="#" className="btn btn-sm btn-primary rounded-pill">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        )

                    })
                }

            </div>


        </div>

    );
};

export default BlogCard;
