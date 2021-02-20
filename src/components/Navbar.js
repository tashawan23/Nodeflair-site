import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="navbar-container">
        <img className="navbar-logo" src={'/nodeflair-logo.jpeg'}></img>
            <div className="navbar-name">NODEFLAIR</div>
        <ul className="nav-menu">     
            <li className='nav-item'>
            <Link className='nav-links'>
                Consult
            </Link>
            </li>
            <li className='nav-item'>
            <Link className='nav-links'>
                Jobs
            </Link>
            </li>
            <li className='nav-item'>
            <Link className='nav-links'>
                Blog
            </Link>
            </li>
        </ul>
        </div>
    </nav>
    )
}
