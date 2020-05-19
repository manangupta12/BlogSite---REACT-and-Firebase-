import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const BlogDetails = (props) => {
  const {blog,auth} = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if(blog){
    return (
      <div className="container section blog-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{blog.title}</span>
            <p>{blog.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {blog.authorFirstName} {blog.authorLastName}</div>
            <div>{moment(blog.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>)
  }
  else {
    return (
      <div className="container center">
        <p>Loading blogs...</p>
      </div>
    )
  }
}
const mapStatetoProps=(state,ownProps)=>{
  const id = ownProps.match.params.id;
  const blogs = state.firestore.data.blogs;
  const blog = blogs ? blogs[id] : null
  return{
    blog : blog,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStatetoProps),
  firestoreConnect([
    {collection : 'blogs'}
  ])
)(BlogDetails)