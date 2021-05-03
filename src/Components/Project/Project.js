import React from 'react';
import { Card } from 'react-bootstrap';
import './Project.css';
const Project = ({ project }) => {    
    const { title, image, code, live } = project;
    return (
        // <Card  className="m-2 card-content shadow-lg rounded">
        //             <Card.Title className="text-center m-2 p-2"> <h3 className="text-info">Medium Article</h3></Card.Title>
        //             <img src='https://i.ibb.co/5WsK49K/Blogs.png' alt="Blogs" className="p-4" />
        //             <Card.Body className="text-center">
        //                 <Card.Link href="https://habibkazi92.medium.com/4-kinds-of-javascript-bindings-with-this-keyword-327738876c39">
        //                     <button className="btn btn-info text-white">
        //                         Details </button></Card.Link>
        //             </Card.Body>
        // </Card>
        <Card  className="card-content shadow-lg rounded m-2 p-2">
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