import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './styles/global.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Categories />
            <About />
            <Testimonials />
            <FAQ />
            <Footer />
        </div>
    );
};

export default App;
