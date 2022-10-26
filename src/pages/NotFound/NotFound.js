import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404-page.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='page text-center rounded-lg shadow-xl border-4 border-[#d6e6ee]'>
                <img className='w-full rounded-lg' src={notFound} alt="" />
                <div className='bg-[#d6e6ee] py-4'>
                    <p className='font-bold text-red-600 mb-1'>The requested page does not exist.</p>
                    <Link to='/' className='md:text-lg font-bold text-[#2e5c83]'>Back To Home Page</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;