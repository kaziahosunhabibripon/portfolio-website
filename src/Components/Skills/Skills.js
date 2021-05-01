import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Resume from '../../Images/Resume.pdf';
import './Skills.css';
const Skills = () => {
    return (
        <section className="row m-0 p-0">
            <div className="col-md-1">

            </div>
            <div className="col-md-4">
                <Card style={{ width: '30rem' }} className="card-content shadow-lg rounded">
                    <Card.Body>
                        <Card.Title className="text-center"> <h1 className="text-info">About Me</h1></Card.Title>
                        <Card.Text className="text-white">
                            Hi I am <span className="text-warning"> Kazi Ahosun Habib Ripon</span>. I am a web developer can do responsive web design and development.
                            I have a vast experience in HTML, CSS, Bootstrap,Javascript and React.
                            Also well experites in MERN stack developer.
                        </Card.Text>
                    </Card.Body>
                    <div className="row d-flex pl-3">
                        <ul className="col-md-6 list-unstyled text-success">
                            <li className="p-1">Email : habibkazi92@gmail.com </li>
                            <li className="p-1">Education: BSc in CSE </li>
                        </ul>
                        <ul className="col-md-6 list-unstyled text-success">
                            <li className="p-1">Phone: +8801744455715 </li>
                            <li className="p-1">Hobby: Swimming, Playing, Coding </li>
                        </ul>
                    </div>
                    <Card.Body className="text-center">
                        <Card.Link href={Resume} downloaded="true"><button className="btn btn-info text-white text-uppercase">Download Resume</button></Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-7 d-flex m-0 p-0">
                <div className="col-md-4" style={{ border: "1px solid red" }}>
                    <h1>This is</h1>
                </div>
                <div className="col-md-4" style={{ border: "1px solid red" }}>
                    <h1>This is</h1>
                    <h1>This is</h1>
                </div>
                <div className="col-md-4" >
                    <div className="row">
                        <div className="col-md-12">

                        </div>
                    </div>
                    <h1>This is</h1>
                    <h1>This is</h1>
                </div>
            </div>
        </section>
    );
};

export default Skills;