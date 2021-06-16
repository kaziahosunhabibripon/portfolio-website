import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    const articles = [
        {
            id: 1,
            title: "Some Common Difference in Javascript that we must know",
            image: "https://i.ibb.co/tC7J02D/1.png",
            link: "https://habibkazi92.medium.com/some-common-difference-in-javascript-that-we-must-know-de526bc375ac"
        },
        {
            id: 2,
            title: "Some Important Facts of React",
            image: "https://i.ibb.co/7bdgTjZ/2.png",
            link: "https://habibkazi92.medium.com/some-important-facts-of-react-5757153ce7c2"
        },
        {
            id: 3,
            title: "Some important Facts of JavaScript ES6",
            image: "https://i.ibb.co/rHzcdMC/3.png",
            link: "https://habibkazi92.medium.com/some-important-facts-of-javascript-es6-3813520e159"
        },
        {
            id: 4,
            title: "4 kinds of Javascript Bindings with this keyword !!!",
            image: "https://i.ibb.co/GTzpj9T/4.png",
            link: "https://habibkazi92.medium.com/4-kinds-of-javascript-bindings-with-this-keyword-327738876c39"
        }
    ]
    return (
        <div className="row pt-2  m-0 p-0">
            <div className="col-md-12 mt-1">
                <h1 className="text-center text-uppercase text-info p-1" id="blogs">Blogs</h1>
            </div>
            {
                articles.map(article => 
                    <div className="col-md-4 mt-2 pt-2" key={article.id} article={article}>
                        <Card className="card-content shadow-lg rounded">
                            <Card.Title className="text-center m-2 p-2"> <h3 className="text-warning">{ article.title}</h3></Card.Title>
                            <img src={article.image} alt="Blogs" className="p-4 blogs" />
                            <Card.Body className="text-center">
                                <Card.Link href={article.link}>
                                    <button className="btn btn-info text-white">
                                        Details </button></Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                )}
        </div>
    );
};

export default Blogs;