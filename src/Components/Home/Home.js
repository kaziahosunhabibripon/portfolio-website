import React from 'react';
import Body from '../Body/Body';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Skills from '../Skills/Skills';

import './Home.css';

const Home = () => {
    return (
        <main className="main-container">
            <section>
                <Header></Header>
                <Body></Body>
                <Skills></Skills>  
                <Projects></Projects>
                <Contact></Contact>
                <Footer>
                </Footer>
            </section>
        </main>
    );
};

export default Home;