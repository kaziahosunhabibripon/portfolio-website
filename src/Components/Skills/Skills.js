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
import Skill from './Skill';

const Skills = () => {
    const skills = [
        {
            id: 1,
            name: html

        },
        {
            id: 2,
            name: css
        },
        {
            id: 3,
            name: bootstrap
        },
        {
            id: 4,
            name: js
        },
        {
            id: 5,
            name: react
        },
        {
            id: 6,
            name: node
        },
        {
            id: 7,
            name: express
        },
        {
            id: 8,
            name: mongo
        },

        {
            id: 9,
            name: rest
        }

    ];
    return (
        <div className="row m-0 p-0">
            <div className="col-md-12 mt-2 p-1">
                <h1 className="text-center text-white text-uppercase pt-3">My Skills</h1>
            </div>
            {
                skills.map(skill => <Skill  key={skill.id} skill={skill}></Skill>
                )
            }
        </div>
    );
};

export default Skills;