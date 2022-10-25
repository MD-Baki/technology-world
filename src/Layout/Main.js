import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/sharePages/Footer/Footer';
import Header from '../pages/sharePages/Header/Header';
import LeftSideNav from '../pages/sharePages/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="grid md:grid-cols-5 lg:grid-cols-4 gap-4">
                <div className='md:col-span-2 lg:col-span-1'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-3 px-4  md:pr-[30px]'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;