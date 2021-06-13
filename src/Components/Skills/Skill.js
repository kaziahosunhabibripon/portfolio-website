import React from 'react';
import './Skills.css';
const Skill = ({skill}) => {
    return (
        <div className="col-md-4 skill ">
            <img src={skill.name} alt="skill" />
        </div>
    );
};


export default Skill;