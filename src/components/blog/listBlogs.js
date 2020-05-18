import React from 'react'
import BlogSummary from './blogSummary'

const ListBlogs = () => {
    return (
        <div className = 'blog-list'>
            <BlogSummary />
            <BlogSummary />
        </div>
    )
}
export default ListBlogs