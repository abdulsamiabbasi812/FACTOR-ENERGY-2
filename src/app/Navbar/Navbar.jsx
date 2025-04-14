import React from 'react'
import logo from '../../assets/logo.png'
import './style.css'

const Navbar = () => {
    return (
        <nav id="navbar">
            <div className="nav-left">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </div>

            <div className="nav-right">
                <ul className="ul-lines">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Services</a></li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar
