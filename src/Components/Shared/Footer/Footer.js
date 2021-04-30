import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    
    return (
        <footer className="footer container-fluid">
            <section className="row m-0 p-0">
                <div className="col-md-4 d-flex">
                    <ul className="list-unstyled">
                        <li><span className="text-secondary">Designed By </span> <span className="text-warning">Ripon</span> </li>
                       
                        
                    </ul>
                </div>
                <div className="col-md-4 d-flex">
                    <ul className="list-unstyled">
                        <li><span className="text-muted"> All rights {(new Date()).getFullYear()}  &copy;</span> <span className="text-success">  KAHaR &reg;</span> </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="list-unstyled">
                        <li> <a href="https://www.facebook.com/KaziAhosunhabibRipon"><FontAwesomeIcon icon={faFacebookF}  className="text-primary"/>  Facebook </a> </li>
                        <li><a href="https://twitter.com/KaziAhosunhabib"> <FontAwesomeIcon icon={faTwitter}  className="text-primary"/>  Twitter</a></li>
                        <li> <a href="https://www.linkedin.com/in/kazi-ahosun-habib-ripon"><FontAwesomeIcon icon={faLinkedinIn} className="text-primary"/> LinkedIn</a></li>
                        <li><a href="https://github.com/kaziahosunhabibripon"> <FontAwesomeIcon icon={faGithub} className="text-secondary"/> Github</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;