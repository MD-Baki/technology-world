import logo from '../../../images/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#d6e6ee]'>
            <div className='w-11/12 mx-auto py-10 text-[#2e5c83] flex flex-wrap justify-between gap-4'>
                <div className="logo-sec">
                    <div className="flex items-center mb-4">
                        <img className='w-[30px] mr-2' src={logo} alt="" />
                        <Link to='/' className="font-bold text-xl uppercase">TECHNOLOGY <span className='font-normal'>World</span></Link>
                    </div>
                    <p className='pb-3'>We are ready to build your bright fyture.</p>
                    <div>
                        <Link className='btn rounded-full bg-[#2e5c83] hover:bg-[#2e5c83] border-0 mr-3'><FaFacebookF /></Link>
                        <Link className='btn rounded-full bg-[#2e5c83] hover:bg-[#2e5c83] border-0 mr-3'><FaInstagram /></Link>
                        <Link className='btn rounded-full bg-[#2e5c83] hover:bg-[#2e5c83] border-0 mr-3'><FaTwitter /></Link>
                        <Link className='btn rounded-full bg-[#2e5c83] hover:bg-[#2e5c83] border-0'><FaLinkedinIn /></Link>
                    </div>
                </div>
                <div className="contact font-bold">
                    <h4 className='text-xl pb-3'>CONTACT US</h4>
                    <div className='flex items-center pb-2'>
                        <FaPhoneAlt className='mr-2' />
                        <p>01788-621836</p>
                    </div>
                    <div className='flex items-center pb-2'>
                        <FaEnvelope className='mr-2' />
                        <p>bakimd77@gmail.com</p>
                    </div>
                    <div className='flex items-center pb-2'>
                        <FaMapMarkerAlt className='mr-2' />
                        <p>Agrabad, Chittagong, Bangladesh</p>
                    </div>
                    <div className='flex items-center'>
                        <FaCalendarAlt className='mr-2' />
                        <p>Saturday to Thursday</p>
                    </div>
                </div>
                <div className="font-bold">
                    <h4 className='text-xl pb-3'>Important Links</h4>
                    <div>
                        <p className='mb-2'><Link to='/'>Home</Link></p>
                        <p className='mb-2'><Link to='/courses'>Courses</Link></p>
                        <p className='mb-2'><Link to='/faq'>FAQ</Link></p>
                        <p><Link to='/blog'>Blog</Link></p>
                    </div>
                </div>
            </div>
            <footer className='bg-[#2e5c83] text-white text-center py-3'>
                Copyright © 2022 Technology World
            </footer>
        </div>
    );
};

export default Footer;