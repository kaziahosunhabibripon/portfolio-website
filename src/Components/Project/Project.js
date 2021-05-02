import React from 'react';
import { Card } from 'react-bootstrap';
import './Project.css';
const Project = ({ project }) => {
    console.log(project);
    
    const { title, details, image, code, live } = project;
    return (
        <Card style={{ width: "30rem" }} className="card-content shadow-lg rounded m-2 p-2">
            <Card.Title className="text-center pt-3"> <h3 className="text-info">{title}</h3></Card.Title>
            <Card.Body>
                <img src={image} className="card-img-top rounded" alt={title} height="350" />
            </Card.Body>
            <Card.Body className = "button-part">
                <Card.Link href={live}><button className="btn btn-info text-white">
                    Preview Live </button></Card.Link>
                <Card.Link href={code}><button className="btn btn-info text-white">
                   Code Details </button></Card.Link>
            </Card.Body>
        </Card>
    );
};

export default Project;