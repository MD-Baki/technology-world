import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/sharePages/Footer/Footer';
import Header from '../pages/sharePages/Header/Header';
import LeftSideNav from '../pages/sharePages/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto grid md:grid-cols-4 gap-4">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-3'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;