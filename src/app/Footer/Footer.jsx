import React from 'react'
import './style.css'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <>
            <section id="footer">
                <div className="footer-img">
                    <img src={Logo} alt="" />
                </div>
                <span>&copy;2025 | All rights reserved</span>
            </section>
        </>
    )
}

export default Footer
