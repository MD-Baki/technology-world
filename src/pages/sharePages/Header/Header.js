import logo from '../../../images/logo.png';
import React from 'react';
import { FaAlignLeft, FaMoon, FaSun, FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useContext } from 'react';

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const [toggleTheme, setToggleTheme] = useState(false);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error));
    }

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
                    <div onClick={() => setToggleTheme(!toggleTheme)} className='pr-2'>
                        {
                            toggleTheme ? <button className="btn bg-[#2e5c83] hover:bg-[#2e5c83] border-0 capitalize"><FaMoon /> <span className='hidden md:inline-block pl-2'>Dark</span></button> :
                                <button className="btn bg-white hover:bg-white text-[#2e5c83] border-0 capitalize"><FaSun /><span className='hidden md:inline-block pl-2'>Light</span></button>
                        }
                    </div>
                    {
                        user?.uid ?
                            <>
                                <Link
                                    onClick={handleLogout}
                                    className="btn btn bg-[#2e5c83] hover:bg-[#2e5c83] border-0 mx-3">Log Out</Link>
                                {user?.photoURL ?
                                    <Link>
                                        <img title={user?.displayName} src={user?.photoURL} alt="" className='rounded-full h-10' />
                                    </Link> : <FaUserAlt></FaUserAlt>
                                }
                            </>
                            : <>
                                <Link to='/login' className="btn bg-[#2e5c83] hover:bg-[#2e5c83] border-0">
                                    Login
                                </Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;