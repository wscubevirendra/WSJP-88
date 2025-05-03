import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-3 mt-5">
            <div className="container">
                <div className="row g-4">
                    {/* About */}
                    <div className="col-md-4">
                        <h5 className="mb-3">BlogSphere</h5>
                        <p className="text-muted">
                            BlogSphere is your go-to platform for insightful articles on technology,
                            lifestyle, and creativity. Join our community of curious minds!
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled text-muted">
                            <li><a href="/" className="text-decoration-none text-muted">Home</a></li>
                            <li><a href="/categories" className="text-decoration-none text-muted">Categories</a></li>
                            <li><a href="/about" className="text-decoration-none text-muted">About</a></li>
                            <li><a href="/contact" className="text-decoration-none text-muted">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-4">
                        <h5 className="mb-3">Follow Us</h5>
                        <div className="d-flex gap-3">
                            <a href="https://facebook.com" className="text-light fs-5">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://twitter.com" className="text-light fs-5">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="https://instagram.com" className="text-light fs-5">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://linkedin.com" className="text-light fs-5">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="text-secondary mt-4" />
                <p className="text-center text-muted mb-0">
                    &copy; {new Date().getFullYear()} BlogSphere. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
