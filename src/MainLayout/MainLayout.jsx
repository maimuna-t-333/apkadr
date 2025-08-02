import React from 'react';
import Header from '../Pages/Header';

import Footer from '../Pages/Footer';
import { Outlet } from 'react-router';


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;