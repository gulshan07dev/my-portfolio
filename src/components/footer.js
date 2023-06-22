import React from 'react';
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex">
            <div className="footer-parts flex">
                {/* adding social icons   */}
                <div className="flex social-icons-container">
                    <p>gulshan07dev</p>
                    <div className="social-icons flex">
                        <a href="https://www.github.com/gulshan07dev"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/gulshan-kumar-8293b9260/"><i
                            className="fa-brands fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/gulshan07dev"><i className="fa-brands fa-instagram"></i></a>
                        <a href="mailto: gulshanku9135@gmail.com"><i className="fa-regular fa-envelope"></i></a>
                    </div>
                </div>
                  {/* adding links   */}
                <div className="link-container">
                    <ul className="flex links">
                        <li>Link</li>
                        <NavLink to="/skills">my skills</NavLink>
                        <NavLink to="/projects">my projects</NavLink>
                        <NavLink to="/services">my services</NavLink>
                        <NavLink to="/contact">contact Us</NavLink>
                    </ul>
                </div>
            </div>

             {/* adding arrow top   */}
            <div>
                <a href="#"><i className="arrow-top fa-sharp fa-solid fa-arrow-up fa-bounce"></i></a>
            </div>
        </footer>
    )
}

export default Footer
