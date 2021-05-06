import React from 'react';
import Project from '../Project/Project';
import './Projects.css';

const Projects = () => {
    const Projects = [
        {
            id: 1,
            title: "Library Service",
            image: "https://i.ibb.co/KVKJ82X/librarypng.png",
            details: "Library Management service user can booking oder by clicking after login can get right products that he clicked",
            code: "https://github.com/kaziahosunhabibripon/library-management",
            live: "https://libray-shop.web.app/"

        },
        {
            id: 2,
            title: "Soccer Team Selector",
            image: "https://i.ibb.co/T2hkqNh/socer.png",
            details: "Soccer Team Selector Management service user can select team by clicking after that can get right team that he clicked",
            code: "https://github.com/kaziahosunhabibripon/Soccer-Team",
            live: "https://soccer-team-build.netlify.app/"

        },
        {
            id: 3,
            title: "Loan Service",
            image: "https://i.ibb.co/P5sc0SK/loan.png",
            details: "Loan Service Management user can booking loan by clicking after login can get selected loan that he clicked before applying loan he needs to pay loan fees. Admin can approved loan section status update user can show it on his dashboard after he login. user and admin dashboard is different",
            code: "https://github.com/kaziahosunhabibripon/loanservices-app",
            live: "https://loan-services-6cd72.web.app/"
        },
        {
            id: 4,
            title: "Travel Service",
            image: "https://i.ibb.co/K6y7gJv/travelguru.png",
            details: "Travel Service Management traveler can select vehicle by clicking after login can get right type of vehicles that he clicked. also can search placed to destination to arrival path ",
            code: "https://github.com/kaziahosunhabibripon/Travele-Guide",
            live: "https://traveler-guide-4bdba.web.app/"
        }
    ]
    return (
        <div className="row m-0 p-0">
            <h1 className="text-center text-uppercase text-info p-1" id="project">Projects</h1>
            {
                Projects.map(project => <Project key={project.id} project={project}>
                </Project>)
            }
        </div>
    );
};

export default Projects;