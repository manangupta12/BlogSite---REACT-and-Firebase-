import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

const BlogDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Blog title - { id }</span>
          <p></p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}
const mapStatetoProps=(state,ownProps)=>{
  console.log(state);
  //const id = ownProps.match.params.id;
  return{

  }
}

export default compose(
  connect(mapStatetoProps),
  firestoreConnect([
    {collection : 'blogs'}
  ])
)(BlogDetails)