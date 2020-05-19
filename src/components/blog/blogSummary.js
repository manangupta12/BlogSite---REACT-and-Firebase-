import React from 'react'
import moment from 'moment'


const BlogSummary = ({blog}) => {

  return (
        <div className = 'blog-summary'>
          <div className="row lg6">
            <div className="card grey darken-2 card">
              <div className="card-content white-text">
                <span className="card-title">{blog.title}</span>
              </div>
              <div className="card-action">
                <p > Posted by {(blog.authorFirstName)} {blog.authorLastName}</p>
                <p className="author grey-text">{moment(blog.createdAt.toDate()).calendar()}</p>
              </div>
            </div>
          </div>
        </div>
    );
}


export default BlogSummary
