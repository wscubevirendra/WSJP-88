import React from 'react'

export default function Contact() {
    return (
      
            <div className="container py-5">
             
                <div className="text-center mb-5">
                    <h1 className="fw-bold">Get in <span className="text-primary">Touch</span></h1>
                    <p className="text-muted lead">
                        We'd love to hear from you! Fill out the form or reach us directly.
                    </p>
                </div>

                <div className="row g-5">
                    {/* Contact Form */}
                    <div className="col-md-7">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
                                <input type="text" className="form-control rounded-3" id="name" placeholder="John Doe" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-semibold">Email address</label>
                                <input type="email" className="form-control rounded-3" id="email" placeholder="you@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                                <textarea className="form-control rounded-3" id="message" rows="5" placeholder="Your message..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary px-4 rounded-pill">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-5">
                        <div className="bg-light p-4 rounded-4 shadow-sm h-100">
                            <h5 className="fw-bold mb-4">Contact Information</h5>
                            <p className="text-muted mb-3">
                                <i className="bi bi-envelope-fill text-primary me-2"></i>
                                support@blogsphere.com
                            </p>
                            <p className="text-muted mb-3">
                                <i className="bi bi-telephone-fill text-primary me-2"></i>
                                +1 234 567 890
                            </p>
                            <p className="text-muted mb-3">
                                <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                                123 Blog Street, Creativity City, Earth
                            </p>
                            <p className="text-muted">
                                <i className="bi bi-clock-fill text-primary me-2"></i>
                                Mon - Fri: 9:00 AM – 6:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
