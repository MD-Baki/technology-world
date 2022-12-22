import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/sharePages/Footer/Footer";
import Header from "../pages/sharePages/Header/Header";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="max-w-[1440px] mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
