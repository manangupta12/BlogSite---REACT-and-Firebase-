import React from 'react'
import BlogSummary from './blogSummary'
import {Link} from 'react-router-dom'

const ListBlogs = ({blogs}) => {
    return (
        <div className = 'blog-list'>
            { blogs && blogs.map(blog => {
                return (
                    <Link to = {"/blog/"+blog.id}>
                        <BlogSummary blog = {blog} key={blog.id}/>
                    </Link>
                )
            })
            }
        </div>
    )
}
export default ListBlogs

