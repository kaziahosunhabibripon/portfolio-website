import React from 'react';
import { Card } from 'react-bootstrap';
import Project from '../Project/Project';
import './Projects.css';

const Projects = () => {
    const Projects = [
        {
            id: 1,
            title: "Library Service",
            image: "https://i.ibb.co/tLXpMBG/libraryhome.png",
            details: "Library Management service user can booking oder by clicking after login can get right products that he clicked",
            code: "https://github.com/kaziahosunhabibripon/library-management",
            live: "https://libray-shop.web.app/"

        },
        {
            id: 2,
            title: "Soccer Team Selector",
            image: "https://i.ibb.co/WgFXsVS/socerhome.png",
            details: "Soccer Team Selector Management service user can select team by clicking after that can get right team that he clicked",
            code: "https://github.com/kaziahosunhabibripon/Soccer-Team",
            live: "https://soccer-team-build.netlify.app/"

        },
        {
            id: 3,
            title: "Loan Service",
            image: "https://i.ibb.co/fHSR3dd/loan.png",
            details: "Loan Service Management user can booking loan by clicking after login can get selected loan that he clicked before applying loan he needs to pay loan fees. Admin can approved loan section status update user can show it on his dashboard after he login. user and admin dashboard is different",
            code: "https://github.com/kaziahosunhabibripon/loanservices-app",
            live: "https://loan-services-6cd72.web.app/"
        },
        {
            id: 4,
            title: "Travel Service",
            image: "https://i.ibb.co/Tr5ky3h/travelguru.png",
            details: "Travel Service Management traveler can select vehicle by clicking after login can get right type of vehicles that he clicked. also can search placed to destination to arrival path ",
            code: "https://github.com/kaziahosunhabibripon/Travele-Guide",
            live: "https://traveler-guide-4bdba.web.app/"
        }
    ]
    return (
        <section className="row m-0 p-0">
            <div className="col-md-8 d-flex mt-1 pt-2">
                <div className="row  mt-2 p-1">
                    {
                        Projects.map(project => <Project key={project.id} project={project}>
                        </Project>)
                    }
                </div>
            </div>
            <div className="col-md-4 col mt-2 pt-2">
                <Card  className="m-2 card-content shadow-lg rounded">
                    <Card.Title className="text-center m-2 p-2"> <h3 className="text-info">Medium Article</h3></Card.Title>
                    <img src='https://i.ibb.co/5WsK49K/Blogs.png' alt="Blogs" className="p-4" />
                    <Card.Body className="text-center">
                        <Card.Link href="https://habibkazi92.medium.com/4-kinds-of-javascript-bindings-with-this-keyword-327738876c39">
                            <button className="btn btn-info text-white">
                                Details </button></Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </section>
    );
};

export default Projects;