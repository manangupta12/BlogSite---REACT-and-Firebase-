import React, { Component } from 'react'
import ListBlog from '../blog/listBlogs'
import {connect} from 'react-redux'

class DashBoard extends Component {
    render() {
        const { blogs } = this.props
        return (
            <div className = "container">
               <ListBlog blogs = {blogs} />
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return {
        blogs : state.blog.blogs,
    }
}

export default connect(mapStatetoProps)(DashBoard)
