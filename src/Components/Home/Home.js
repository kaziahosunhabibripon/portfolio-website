import React from 'react';
import AboutMe from '../Aboutme/AboutMe';
import Blogs from '../Blogs/Blogs';
import Body from '../Body/Body';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Footer from '../Shared/Footer/Footer';
import Skills from '../Skills/Skills';
import './Home.css';

const Home = () => {
    return (
        <main className="main-container">
            <section>
                <Body></Body>
            </section>
            <section className="container-part">
                <AboutMe></AboutMe>
                <Skills></Skills>
                <Projects></Projects>
                <Blogs></Blogs>
                <Contact></Contact>
                <Footer>
                </Footer>
            </section>
        </main>
    );
};

export default Home;