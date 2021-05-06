import React from 'react';
import { Card } from 'react-bootstrap';
import './Project.css';
const Project = ({ project }) => {
    const { title, image, code, live,details } = project;
    return (
        <div className="col-md-4">
            <Card className="card-content shadow-lg rounded m-2 p-2">
                <Card.Title className="text-center pt-3"> <h3 className="text-warning">{title}</h3></Card.Title>
                <Card.Body className="p-3 projects-image projects">
                    <img src={image} className="card-img-top rounded" alt={title} height="350" />
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