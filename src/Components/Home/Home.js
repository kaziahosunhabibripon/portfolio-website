import React from 'react';
import Body from '../Body/Body';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
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
                <Footer></Footer>
            </section>
        </main>
    );
};

export default Home;