import React from 'react';
import Body from '../Body/Body';
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
            </section>
            <section>
               <Body></Body>
            </section>
            <section>
                <Skills></Skills>
            </section>
            <section>
                <Projects></Projects>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </main>
    );
};

export default Home;