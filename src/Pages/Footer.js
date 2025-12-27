import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import './Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'></div>
        <FaInstagramSquare />   <FaFacebookSquare /> <  FaWhatsappSquare />
        <p> &copy;2025 heisenbreg.com</p>      
    </div>
  )
}

export default Footer