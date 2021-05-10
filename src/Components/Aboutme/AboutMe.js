import React from 'react';
import Resume from '../../Images/Resume.pdf';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import myPic from '../../Images/mypict.png';
import './AboutMe.css';
const AboutMe = () => {
    return (
        <div className="row  m-0 p-0 d-flex">
            <div className="col-md-1">

            </div>
           
            <div className="col-md-4 myAnimationLeft mt-3">
                <div className="card card-content ">
                    <div className="card-body" id="resume">
                        <h1 className="text-info text-center">About Me</h1>
                        <p className="text-white">
                            Hi I am <span className="text-warning"> Kazi Ahosun Habib Ripon</span>. I am a MERN stack web developer. I have vast experience to make all type of responsive web page design.
                            I have a well expertise in experience in HTML, CSS, Bootstrap,Javascript and React.
                        </p>
                        <ul className="list-unstyled">
                            <li className="p-1 text-info">Email : habibkazi92@gmail.com </li>
                            <li className="p-1 text-primary">Education: BSc in CSE </li>
                            <li className="p-1 text-warning">Phone: +8801744455715 </li>
                            <li className="p-1 text-success">Hobby: Swimming, Playing, Coding </li>
                        </ul>
                        <div className="text-center">
                            <Link to={Resume} download target="_blank">
                                <button className="btn btn-info text-white text-center">
                                    <FontAwesomeIcon icon={faDownload} className="text-white" />
                                     &nbsp; Download Resume
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-md-6 mt-3"> 
                <div className="card card-content myAnimationRightImage" style={{width:"20rem"}}>
                    <img src={myPic} alt="mypic" />
                </div>
            </div>
            
        </div>
    );
};

export default AboutMe;