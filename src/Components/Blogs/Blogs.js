import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className="container pt-2  m-0 p-0">
            <h1 className="text-center text-uppercase text-info p-1"  id="blogs">Blogs</h1>
            <div className="col-md-4 col mt-2 pt-2 myAnimationLeft">    
                <Card className="m-2 card-content shadow-lg rounded" style={{width:"20rem"}}>
                    <Card.Title className="text-center m-2 p-2"> <h3 className="text-warning">Medium Article</h3></Card.Title>
                    <img src='https://i.ibb.co/5WsK49K/Blogs.png' alt="Blogs" className="p-4 blogs" />
                    <Card.Body className="text-center">
                        <Card.Link href="https://habibkazi92.medium.com/4-kinds-of-javascript-bindings-with-this-keyword-327738876c39">
                            <button className="btn btn-info text-white">
                                Details </button></Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Blogs;