import React from 'react';
import Header from '../Pages/Header';
import Hero from '../Pages/Hero';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Footer from '../Pages/Footer';


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <About></About>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;