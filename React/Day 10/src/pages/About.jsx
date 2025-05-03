import React from "react";


const About = () => {
    return (
        
    
            <div className="container py-5">
                {/* Hero Section */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold">About <span className="text-primary">BlogSphere</span></h1>
                    <p className="lead text-muted mt-3">
                        Discover the story behind our blog and the people who make it happen.
                    </p>
                </div>

                {/* About Content Section */}
                <div className="row align-items-center mb-5">
                    <div className="col-md-6">
                        <img
                            src="https://source.unsplash.com/600x400/?writing,blog"
                            className="img-fluid rounded-4 shadow-sm"
                            alt="About us"
                        />
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <h3 className="fw-semibold mb-3">Our Mission</h3>
                        <p className="text-muted">
                            BlogSphere was created with a simple mission: to share knowledge, ideas, and experiences
                            in an open, creative space. Whether you're into tech, lifestyle, or personal growth,
                            we bring you curated content from passionate writers around the globe.
                        </p>
                        <p className="text-muted">
                            We're more than just a blog — we're a community of thinkers and creators. Every post you read
                            is written with intention and heart, to inform, inspire, or ignite curiosity.
                        </p>
                    </div>
                </div>

                {/* Highlight / Values Section */}
                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <i className="bi bi-lightbulb fs-2 text-primary mb-2"></i>
                        <h5 className="fw-bold">Inspiration</h5>
                        <p className="text-muted small">Fresh ideas and stories that spark creativity and motivation.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <i className="bi bi-globe fs-2 text-primary mb-2"></i>
                        <h5 className="fw-bold">Global Voices</h5>
                        <p className="text-muted small">Writers from around the world sharing unique perspectives.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <i className="bi bi-people fs-2 text-primary mb-2"></i>
                        <h5 className="fw-bold">Community</h5>
                        <p className="text-muted small">Engaging and connecting with readers who value depth and dialogue.</p>
                    </div>
                </div>
            </div>
         

    );
};

export default About;
