import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlogger, faConnectdevelop} from '@fortawesome/free-brands-svg-icons';
import {  faHome } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf, faIdCard } from '@fortawesome/free-regular-svg-icons';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" height="50px"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0 list-color">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/"><FontAwesomeIcon icon={faHome}  className="text-success"/> <span>Home</span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project"><FontAwesomeIcon icon={faConnectdevelop}  className="text-primary"/> <span>Projects</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  href="#blogs" ><FontAwesomeIcon icon={faBlogger}  className="text-danger"/> <span > Blogs</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact"> <FontAwesomeIcon icon={faIdCard}  className="text-warning"/> <span >Contact</span> </a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="#resume"><FontAwesomeIcon icon={faFilePdf}  className="text-danger"/> <span>Resume</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;