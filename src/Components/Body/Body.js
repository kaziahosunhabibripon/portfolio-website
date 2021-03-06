import React from 'react';
import './Body.css';
import Typewriter from "typewriter-effect";
import coding from '../../Images/coding.png';

const Body = () => {
    
    return (
        <div className="row m-0 p-0">
            <div className="col-md-6">
                <div className="p-4">
                    <h1 style={{ paddingBottom: 15 }} className="heading text-left text-warning">
                        Hi <span className="text-danger">Visitor!</span> <span className="wave">👋🏻</span>
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
            </div>
            <div className="col-md-6 right-part">
                <img src={coding} alt="coding" className="right-image"/>
            </div>        
        </div>
    );
};

export default Body;