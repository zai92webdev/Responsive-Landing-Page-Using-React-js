import React from 'react'
import './stylesheet/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <h1>TRAVELx</h1>
            <div className='footer__container' >

                <div className='footer__cards'>
                    <p>Contact Us</p>
                    <ul className='footer__ul'>
                        <li>Contact</li>
                        <li>Support</li>
                        <li>Destinations</li>
                        <li>Sponsorship</li>
                    </ul>
                </div>

                <div className='footer__cards'>
                    <p>Videos</p>
                    <ul className='footer__ul'>
                        <li>Agency</li>
                        <li>Artist</li>
                        <li>Ambassadors</li>
                        <li>Content Creator</li>
                    </ul>
                </div>

                <div className='footer__cards'>
                    <p>Social Media</p>
                    <ul className='footer__ul'>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                        <li>Instagram</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer
