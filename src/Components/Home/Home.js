import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Home.css';
const Home = () => {
    return (
        <main className="container">
            <section>
                <Header></Header>
            </section>
            <section>
                <div className="container-fluid">
                    <h1 className="text-center">Main</h1>
                </div>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </main>
    );
};

export default Home;