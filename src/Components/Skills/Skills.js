import React from 'react';
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
import rest from '../../Images/firebase.png';
import { Link } from 'react-router-dom';
const Skills = () => {
    const skills = [
        { 
            id:1,
            name:html

        },
        { 
            id:2,
            name:css
        },
        { 
            id:3,
            name:bootstrap
        },
        { 
            id:4,
            name:js
        },
        { 
            id:5,
            name:react
        },
        { 
            id:6,
            name:node
        },
        { 
            id:7,
            name:express
        },
        { 
            id:8,
            name:mongo
        },
        { 
            id:9,
            name:firebase
        },
        { 
            id:10,
            name:rest
        }
       
    ];
    return (
        <section className="row m-0 p-0">
            <div className="col-md-4 myAnimationLeft">
                <div className="card card-content">
                    <div className="card-body">
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
            <div className="col-md-8">
                <h1 className="text-center text-dark text-uppercase pt-3">My Skills</h1>
               <div className="row m-0 p-0 d-flex">
               {
                    skills.map(skill=>
                        <div className="col-md-4 text-center myAnimationRight Skills " key={skill.id} skill={skill}>
                            <img src={skill.name} alt="skill" />
                        </div>
                     )
                }
               </div>
            </div>
        </section>
    );
};

export default Skills;