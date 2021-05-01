import React from 'react';
import './Body.css';
import coding from '../../Images/coding.png';
import Typewriter from "typewriter-effect";

const Body = () => {
    return (
        <section className="row m-0 p-0">
            <div className="col-md-1">

            </div>
            <div className="col-md-6">
                <h1 style={{ paddingBottom: 15 }} className="heading text-left p-2 text-warning">
                    Hi <span className="text-danger">There!</span> <span className="wave">👋🏻</span>
                </h1>
                <h1 className="heading-name text-info">
                    I'M
                <strong className="text-uppercase"> <span className="text-white"> Kazi </span>
                <span className="text-success">  Ahosun </span> <span className="text-primary">Habib</span> </strong>
                </h1>
                <span className="typescript-font">
                    <Typewriter 
                        options={{
                            strings: [
                                "Web Developer",
                                "MERN Stack Developer",
                                "Machine Learning Researcher",
                                "Freelance software designer"
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                </span>
            </div>
            <div className="col-md-4 myAnimation">
                <img src={coding} alt="right" className="right-image" />
            </div>
            <div className="col-md-1">

            </div>
        </section>
    );
};

export default Body;