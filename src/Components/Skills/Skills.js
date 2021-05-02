import React from 'react';
import { Card } from 'react-bootstrap';
import Resume from '../../Images/Resume.pdf';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import bootstrap from '../../Images/bootstrap.png';
import html from '../../Images/html.jpg';
import css from '../../Images/css.jpg';
import js from '../../Images/js.jpg';
import node from '../../Images/nodejs.png';
import react from '../../Images/React-JS.png';
import express from '../../Images/express-js.png';
import mongo from '../../Images/MongoDB-logo.png';
import firebase from '../../Images/firebase.png';
const Skills = () => {
    return (
        <section className="row m-0 p-0">
            <div className="col-md-1">
            </div>
            <div className="col-md-4 myAnimationLeft">
                <Card style={{width:"25rem"}} className="card-content shadow-lg rounded">
                    <Card.Body>
                        <Card.Title className="text-center"> <h1 className="text-info">About Me</h1></Card.Title>
                        <Card.Text className="text-white">
                            Hi I am <span className="text-warning"> Kazi Ahosun Habib Ripon</span>. I am a MERN stack web developer. I have vast experience to make all type of responsive web page design.
                            I have a well expertise in experience in HTML, CSS, Bootstrap,Javascript and React.
                        </Card.Text>
                    </Card.Body>
                    <div className="row d-flex pl-3">
                        <ul className="col-md-6 list-unstyled text-warning">
                            <li className="p-1">Email : habibkazi92@gmail.com </li>
                            <li className="p-1">Education: BSc in CSE </li>
                        </ul>
                        <ul className="col-md-6 list-unstyled text-info">
                            <li className="p-1">Phone: +8801744455715 </li>
                            <li className="p-1">Hobby: Swimming, Playing, Coding </li>
                        </ul>
                    </div>
                    <Card.Body className="text-center">
                        <Card.Link href={Resume} download="true" target="_blank"><button className="btn btn-info text-white"><FontAwesomeIcon icon={faDownload} className="text-white" /> Download Resume </button></Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-6 shadow-lg rounded myAnimationRight">
                <h1 className="text-center">My Skills</h1>
                <div className="row m-0 p-0 text-center">
                    <div className="col-md-4 Skills">
                        <img src={html} alt="HTML" />
                        <img src={js} alt="js" />
                        <img src={express} alt="express" />                  
                    </div>
                    <div className="col-md-4 Skills">
                        <img src={css} alt="css" />
                        <img src={node} alt="node" />
                        <img src={mongo} alt="mongo" />
                    </div>
                    <div className="col-md-4 Skills">
                        <img src={bootstrap} alt="bootstrap" />
                        <img src={react} alt="react" />
                        <img src={firebase} alt="firebase" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;