import React, { Component } from 'react'
import ListBlog from '../blog/listBlogs'

class DashBoard extends Component {
    render() {
        return (
            <div className = "container">
               <ListBlog />
            </div>
        )
    }
}

export default DashBoard
