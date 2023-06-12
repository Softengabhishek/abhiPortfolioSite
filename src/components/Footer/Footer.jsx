import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Abhishek</h1>
                <ul className="footer_list">
                    <li><a href="#about" className="footer_link">About</a></li>
                    <li><a href="#portfolio" className="footer_link">Projects</a></li>
                    <li><a href="#testimonial" className="footer_link">Testimonial</a></li>
                </ul>
                <div className="footer_social">
                    <a href="https://www.facebook.com/softengabhishek" className="footer_social_link" target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/softengabhishek" className="footer_social_link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.twitter.com/softengabhishek" className="footer_social_link" target="_blank">
                        <i class="bx bxl-twitter"></i>
                    </a>
                </div>
                <span className="footer_copy">
                    &#169; softengabhishek.com All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer