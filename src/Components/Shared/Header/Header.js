import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../Images/logo.png';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" height="50px"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resume">Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;