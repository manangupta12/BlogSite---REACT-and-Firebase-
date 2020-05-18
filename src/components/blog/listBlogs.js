import React from 'react'
import BlogSummary from './blogSummary'

const ListBlogs = ({blogs}) => {
    return (
        <div className = 'blog-list'>
            { blogs && blogs.map(blog => {
                return (
                    <BlogSummary blog = {blog} key = {blog.id}/>
                )
            })
            }
        </div>
    )
}
export default ListBlogs