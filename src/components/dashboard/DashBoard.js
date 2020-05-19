import React, { Component } from 'react'
import ListBlogs from '../blog/listBlogs'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { Redirect } from 'react-router-dom'
import Notifications from './Notifications'

class Dashboard extends Component {
    render() {
      const { blogs, auth, notifications } = this.props;
      if (!auth.uid) return <Redirect to='/login' /> 
      return (
        <div className="dashboard">
          <div className="row">
            <div className="container">
              <ListBlogs blogs={blogs} />
            </div>
            {/* <div className="col s12 m5 offset-m1">
              <Notifications notifications={notifications} />
            </div> */}
          </div>
        </div>
      )
    }
  }


const mapStateToProps = (state) => {
    
    return {
        blogs : state.firestore.ordered.blogs,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
  }


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'blogs'},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Dashboard)