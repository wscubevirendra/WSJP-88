import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-3">
                <Link className="navbar-brand fw-bold fs-4" to="/">
                    Blog<span className="text-primary">Sphere</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                        <li className="nav-item myclass">
                            <Link className="nav-link  active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2 rounded-pill"
                            type="search"
                            placeholder="Search articles..."
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-primary rounded-pill px-3" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </header>
    );
};

export default Header;
