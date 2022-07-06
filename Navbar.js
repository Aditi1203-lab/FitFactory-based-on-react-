import React from 'react'
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className='nav'>
            <ul className='list'>
                <li className='home'>Home</li>
                <li className='abtus'>About Us</li>
                <li className='conus'>Contact Us</li>
                <li className='signin'>Sign In</li>
            </ul>
            <div className="line" id='line_1'></div>
       
    </div>
  )
}
