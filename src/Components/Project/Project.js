import React from 'react';
import { Card } from 'react-bootstrap';
import './Project.css';
const Project = ({ project }) => {
    const { title, image, code, live,details } = project;
    return (
        <div className="col-md-4 mt-1 mb-2">
            <Card className="card-content rounded p-3 myAnimationprojects">
                <Card.Title className="text-center"> <h3 className="text-warning">{title}</h3></Card.Title>
                <Card.Body className="projects-image projects">
                    <img src={image} className="card-img-top rounded" alt={title} height="400" />
                    <div className="projects-title">
                        {title}
                        <p className="projects-details">{details}</p>
                    </div>
                </Card.Body>
                <Card.Body className="button-part">
                    <Card.Link href={live}><button className="btn btn-danger text-white">
                    Live Preview  </button></Card.Link>
                    <Card.Link href={code}><button className="btn btn-danger text-white">
                        Code </button></Card.Link>
                </Card.Body>
            </Card>   
        </div>
    );
};

export default Project;