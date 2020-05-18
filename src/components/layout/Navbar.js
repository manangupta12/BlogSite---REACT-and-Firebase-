import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
const Navbar = () => {
    return(
        <div className="navbar-fixed">
        <nav className = "nav nav-wrapper blue darken-5">
            <div className = "container">
                <Link to='/' className = "brand-logo left">BlogSite !</Link>
            </div>
            <SignedInLinks />
            <SignedOutLinks />

        </nav>
        </div>
    )
}

export default Navbar
