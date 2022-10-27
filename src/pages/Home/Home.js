import React from 'react';
import { Link } from 'react-router-dom';
import sideBanner from '../../images/side-banner.png';
import support from '../../images/suport.png';
import join from '../../images/join.png';
import video from '../../images/video.png';

const Home = () => {
    return (
        <div className='py-12'>
            <div className="banner pb-8">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={sideBanner} className="max-w-sm" />
                        <div>
                            <h1 className="text-5xl font-bold text-[#2e5c83]">Build a beautiful future</h1>
                            <p className="py-6">With experienced mentors and updated curriculum, Technology World is ready to advance your career.</p>
                            <Link to='/courses' className="btn bg-[#2e5c83] hover:bg-[#2e5c83] border-0">Courses</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-8">
                <div className="text-center pb-6">
                    <h2 className='text-2xl font-bold text-[#2e5c83] capitalize pb-3'>special service</h2>
                    <p className='w-10/12 md:w-10/12 lg:w-6/12 mx-auto'>Not just classes, Technology world is always ready for any need of students, anytime. So along with premium courses you get some bonus benefits, which only we provide.</p>
                </div>
                <div className="pt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="card card-compact shadow-xl border-2 border-[#d6e6ee]">
                        <figure><img src={support} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Lifetime support</h2>
                            <p>When a student gets admission, our relationship with him becomes Lifetime, that is, we ensure Lifetime Support to the trainees after the course. Students can chat live with the online team at any time, or come directly to the institution for support.</p>
                        </div>
                    </div>
                    <div className="card card-compact shadow-xl border-2 border-[#d6e6ee]">
                        <figure><img src={join} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Career placement support</h2>
                            <p>The Career Placement Department works to get the CV to the right place according to the students' qualifications. From here you will get various seminars on post-course grooming and career guidelines. Which will put you far ahead of anyone else in the career race.</p>
                        </div>
                    </div>
                    <div className="card card-compact shadow-xl border-2 border-[#d6e6ee] md:col-span-2 lg:col-span-1">
                        <figure><img src={video} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Class video</h2>
                            <p>Many times students do not understand some topics in the class, for them there is the advantage of class videos. So now the students can take the class safely. You can solve any problem yourself by watching the video in any difficulty.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;