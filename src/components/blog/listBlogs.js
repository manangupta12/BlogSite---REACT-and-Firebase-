import React from 'react'
import BlogSummary from './blogSummary'
import {Link} from 'react-router-dom'

const ListBlogs = ({blogs}) => {
    return (
        <div className = 'blog-list'>
            { blogs && blogs.map(blog => {
                return (
                    <Link to = {"/blog/"+blog.id} key = {blog.id}>
                        <BlogSummary blog = {blog} />
                    </Link>
                )
            })
            }
        </div>
    )
}
export default ListBlogs

