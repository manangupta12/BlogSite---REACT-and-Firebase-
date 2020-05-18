import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import DashBoard from './components/dashboard/DashBoard'
import NewBlog from './components/blog/createBlog'
import BlogDetails from './components/blog/blogDetails'
import Login from './components/auth/login'
import Signup from './components/auth/signup'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path = "/" component = {DashBoard}/>
        <Route exact path = "/blog/new" component = {NewBlog}/>
        <Route exact path = "/blog/:id" component = {BlogDetails}/>
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/signup" component = {Signup}/>
      </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
