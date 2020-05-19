import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

    return(
        <div className="navbar-fixed">
        <nav className = "nav nav-wrapper blue darken-5">
            <div className = "container">
                <Link to='/' className = "brand-logo left">BlogSite !</Link>
            </div>
            {links}
        </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }
  
  export default connect(mapStateToProps)(Navbar)
