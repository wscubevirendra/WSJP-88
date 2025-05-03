import React from "react";


const Blog = () => {
  const blogPosts = [
    {
      title: "Mastering React Hooks in 2025",
      image: "https://source.unsplash.com/600x400/?react,code",
      summary: "A modern look at using hooks effectively to build dynamic, performant React apps.",
      author: "Virendra Rathore",
      date: "April 30, 2025",
    },
    {
      title: "The Rise of AI-Powered Blogging",
      image: "https://source.unsplash.com/600x400/?ai,writing",
      summary: "How artificial intelligence is reshaping the way we write and consume blogs.",
      author: "Aarti Mehta",
      date: "April 25, 2025",
    },
    {
      title: "Top 10 JavaScript Tricks for Developers",
      image: "https://source.unsplash.com/600x400/?javascript,developer",
      summary: "Speed up your development with these lesser-known but powerful JS tips.",
      author: "Sahil Khan",
      date: "April 20, 2025",
    },
    // Add more blog objects as needed
  ];

  return (
    <div className="container py-5">
      {/* Page Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Latest <span className="text-primary">Blogs</span></h1>
        <p className="text-muted lead">Insights, tutorials, and stories from our writers</p>
      </div>

      {/* Blog Grid */}
      <div className="row g-4">
        {blogPosts.map((post, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <BlogCard
              title={post.title}
              image={post.image}
              summary={post.summary}
              author={post.author}
              date={post.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;


const BlogCard = ({ title, image, summary, author, date }) => {
    return (
      <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
        <img src={image} className="card-img-top" alt={title} style={{ height: "200px", objectFit: "cover" }} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">{summary}</p>
        </div>
        <div className="card-footer bg-white d-flex justify-content-between align-items-center border-0">
          <small className="text-muted">
            <i className="bi bi-person-circle me-1"></i> {author} | {date}
          </small>
          <a href="#" className="btn btn-sm btn-primary rounded-pill">Read More</a>
        </div>
      </div>
    );
  };
  
 
  
  
  
  
  
  
  
