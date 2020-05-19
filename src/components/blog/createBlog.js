import React, { Component } from 'react'
import {createBlog} from '../../store/actions/blogActions'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

class CreateBlog extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createBlog(this.state)
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div id = "newblog" className="container">
      <h4 className="center" id="form-heading">Write a new blog !</h4>
        <form className="white" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Blog Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Blog Content</label>
          </div>
          <div className="input-field">
            <button className="btn red lighten-1">POST</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createBlog : (blog) => dispatch(createBlog(blog)) 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateBlog)

