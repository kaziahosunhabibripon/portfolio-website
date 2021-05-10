import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
const Footer = () => {
    
    return (
        <footer className="footer container-fluid">
            <section className="row mt-5 p-0">
                <div className="col-md-4 d-flex">
                    <ul className="list-unstyled p-2">
                        <li><span className="text-info">Designed By </span> <span className="text-warning">Ripon</span> </li>
                    </ul>
                </div>
                <div className="col-md-4 d-flex p-2">
                    <ul className="list-unstyled">
                        <li><span className="text-warning"> All rights {(new Date()).getFullYear()}  &copy;</span> <span className="text-info">  KAHaR &reg;</span> </li>
                    </ul>
                </div>
                <div className="col-md-4 p-2">
                    <ul className="list-unstyled d-flex">
                        <li className="m-1 p-1"> <a href="https://www.facebook.com/KaziAhosunhabibRipon"><FontAwesomeIcon icon={faFacebookF}  /> <span className="text-white">Facebook </span> </a> </li>
                        <li className="m-1 p-1"><a href="https://twitter.com/KaziAhosunhabib"> <FontAwesomeIcon icon={faTwitter}  />  <span className="text-white"> Twitter </span></a></li>
                        <li className="m-1 p-1"> <a href="https://www.linkedin.com/in/kazi-ahosun-habib-ripon"><FontAwesomeIcon icon={faLinkedinIn}/><span className="text-white"> LinkedIn  </span></a></li>
                        <li className="m-1 p-1"><a href="https://github.com/kaziahosunhabibripon"> <FontAwesomeIcon icon={faGithub} className="text-dark"/><span className="text-white"> Github  </span> </a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;