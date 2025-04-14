import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import './style.css'

const Contact = () => {
    return (
        <>
            <div id="contact">
                <h1 className="contact-h1">Lorem ipsum dolor sit amet.
                    Habitasse ac pellentesque. </h1>
                <div className="btns">

                    <button className="contact-btn">Contáctanos</button>
                    <button className="contact-btn arrow-btn"><BsArrowUpRight /></button>
                </div>
            </div>

        </>
    )
}

export default Contact
