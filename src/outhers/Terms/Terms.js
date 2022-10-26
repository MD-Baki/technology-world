import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='py-12'>

            <h2 className='text-[#2e5c83] font-bold text-center text-xl'>TERMS AND CONDITIONS</h2>


            <div className='grid gap-4 my-6 text-[#6a7885]'>
                <p>Welcome to <span className='font-bold text-[#2e5c83]'>Technology world</span> (“Company”, “we”, “our”, “us”)!</p>
                <p>These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at <span className='font-bold text-[#2e5c83]'>https://technology-world-f2d99.web.app/</span> (together or individually “Service”) operated by <span className='font-bold text-[#2e5c83]'>Technology world</span>.</p>
                <p>Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.</p>
                <p>Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound of them.</p>
                If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at <span className='font-bold text-[#2e5c83]'>bakimd77@gmail.com</span> so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
            </div>
            <p className='text-sm text-[#2e5c83] text-center'>These Terms of Service were created for <span className='font-bold'>https://technology-world-f2d99.web.app/</span> on 2022-10-26.</p>
            <p className='text-[#2e5c83] text-center pt-4'>Go Back To <Link to='/register' className='font-bold'>Register Page</Link></p>
        </div>
    );
};

export default Terms;