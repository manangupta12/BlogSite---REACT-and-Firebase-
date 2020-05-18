import React, { Component } from 'react'
import ListBlog from '../blog/listBlogs'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

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
        blogs : state.firestore.ordered.blogs,
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        {collection : 'blogs'}
    ])
)(DashBoard)

