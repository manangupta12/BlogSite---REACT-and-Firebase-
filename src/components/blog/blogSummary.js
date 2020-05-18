import React from 'react'

const BlogSummary = ({blog}) => {
  return (
        <div className = 'blog-summary'>
          <div className="col s12 m6">
            <div className="card grey darken-2 card">
              <div className="card-content white-text">
                <span className="card-title">{blog.title}</span>
                <p>{blog.content}</p>
              </div>
              <div className="card-action">
                {/* <a href= "/blog/key">...more</a> */}
              </div>
            </div>
          </div>
        </div>
    );
}

export default BlogSummary
