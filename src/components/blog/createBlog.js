import React, { Component } from 'react'

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
    console.log(this.state);
  }
  render() {
    return (
      <div id = "newblog" className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h4 className="grey-text text-darken-3" id="form-heading">Create a New Blog</h4>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Blog Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Blog Content</label>
          </div>
          <div className="input-field">
            <button className="btn red lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateBlog