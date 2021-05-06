import React from 'react';
import './Skills.css';
import bootstrap from '../../Images/bootstrap.png';
import html from '../../Images/html.jpg';
import css from '../../Images/css.jpg';
import js from '../../Images/js.jpg';
import node from '../../Images/nodejs.png';
import react from '../../Images/React-JS.png';
import express from '../../Images/express-js.png';
import mongo from '../../Images/MongoDB-logo.png';
import rest from '../../Images/rest.jpg';

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
            name:rest
        }
       
    ];
    return (
        <div className="row container-fluid m-0 p-0">
            <div className="col-md-4">
                <div className="mt-5">
                    <h1>Skill</h1>
                </div>
            </div>
            <div className="col-md-8">
                <h1 className="text-center text-dark text-uppercase pt-3">My Skills</h1>
               <div className="row d-flex">
               {
                    skills.map(skill=>
                        <div className="col-md-4 text-center myAnimationRight Skills" key={skill.id} skill={skill}>
                            <img src={skill.name} alt="skill" />
                        </div>
                     )
                }
               </div>
            </div>
        </div>
    );
};

export default Skills;