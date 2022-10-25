import logo from '../../../images/logo.png';
import React from 'react';
import { FaAlignLeft, FaMoon, FaSun } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

    const [toggleTheme, setToggleTheme] = useState(false);

    return (
        <div className='bg-[#d6e6ee]'>
            <div className="px-[30px] navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden text-lg">
                            <FaAlignLeft className='mr-2'></FaAlignLeft>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/' className='uppercase text-[#2e5c83] font-bold'>Courses</Link></li>
                            <li><Link className='uppercase text-[#2e5c83] font-bold'>FAQ</Link></li>
                            <li><Link className='uppercase text-[#2e5c83] font-bold'>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className='w-[30px] mr-2' src={logo} alt="" />
                        <Link to='/' className="font-bold text-xl uppercase text-[#2e5c83]">Technology <span className='font-normal'>World</span></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/' className='uppercase text-[#2e5c83] font-bold'>Courses</Link></li>
                        <li><Link className='uppercase text-[#2e5c83] font-bold'>FAQ</Link></li>
                        <li><Link className='uppercase text-[#2e5c83] font-bold'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn bg-[#2e5c83] hover:bg-[#2e5c83] border-0">Login</Link>
                    <div onClick={() => setToggleTheme(!toggleTheme)} className='pl-2'>
                        {
                            toggleTheme ? <button className="btn bg-[#2e5c83] hover:bg-[#2e5c83] border-0 capitalize"><FaMoon className='mr-2' /> Dark</button> :
                                <button className="btn bg-white hover:bg-white text-[#2e5c83] border-0 capitalize"><FaSun className='mr-2' /> Light</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;