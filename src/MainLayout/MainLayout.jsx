import React from 'react';
import Navbar from '../page/Comman/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../page/Comman/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;