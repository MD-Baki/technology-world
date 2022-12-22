import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sideBanner from "../../images/side-banner.png";
import support from "../../images/suport.png";
import join from "../../images/join.png";
import video from "../../images/video.png";
import seminar from "../../images/seminar.jpg";
import EnrollRuning from "./EnrollRuning/EnrollRuning";
import Testimonial from "./Testimonial/Testimonial";
import Loading from "../../Components/Loading";

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    if (loading) return <Loading />;

    return (
        <div className="py-12">
            <div
                data-aos="zoom-in-down"
                data-aos-duration="1500"
                className="banner pb-16 pt-5"
            >
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl text-[#2e5c83]">
                            {" "}
                            Build a <span>beautiful</span> future
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">
                            With experienced mentors and updated curriculum,
                            Technology World is ready to advance your career.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link className="btn btn-primary rounded">
                                Get Started
                            </Link>
                            <Link
                                to="/courses"
                                className="btn btn-primary btn-outline px-8 rounded"
                            >
                                Courses
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img
                            src={sideBanner}
                            alt=""
                            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                        />
                    </div>
                </div>
            </div>
            <div className="py-8">
                <div className="text-center pb-6">
                    <h2 className="text-2xl font-bold text-[#2e5c83] capitalize pb-3">
                        special service
                    </h2>
                    <p className="w-10/12 md:w-10/12 lg:w-6/12 mx-auto">
                        Not just classes, Technology world is always ready for
                        any need of students, anytime. So along with premium
                        courses you get some bonus benefits, which only we
                        provide.
                    </p>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="pt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <div className="card card-compact shadow-xl border-2 border-[#d6e6ee]">
                        <figure>
                            <img src={support} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Lifetime support</h2>
                            <p>
                                When a student gets admission, our relationship
                                with him becomes Lifetime, that is, we ensure
                                Lifetime Support to the trainees after the
                                course. Students can chat live with the online
                                team at any time, or come directly to the
                                institution for support.
                            </p>
                        </div>
                    </div>
                    <div className="card card-compact shadow-xl border-2 border-[#d6e6ee]">
                        <figure>
                            <img src={join} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Career placement support
                            </h2>
                            <p>
                                The Career Placement Department works to get the
                                CV to the right place according to the students'
                                qualifications. From here you will get various
                                seminars on post-course grooming and career
                                guidelines. Which will put you far ahead of
                                anyone else in the career race.
                            </p>
                        </div>
                    </div>
                    <div className="card card-compact shadow-xl border-2 border-[#d6e6ee] md:col-span-2 lg:col-span-1">
                        <figure>
                            <img src={video} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Class video</h2>
                            <p>
                                Many times students do not understand some
                                topics in the class, for them there is the
                                advantage of class videos. So now the students
                                can take the class safely. You can solve any
                                problem yourself by watching the video in any
                                difficulty.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                    >
                        <img
                            src={seminar}
                            alt=""
                            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                        />
                    </div>
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1500"
                        className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
                    >
                        <h2 className="text-4xl font-bold leading-none sm:text-4xl text-[#2e5c83]">
                            Participate in free seminars
                        </h2>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">
                            Can't decide which course to take for freelancing?
                            Join our free seminar. In these subject wise
                            seminars you will know about the possibilities of
                            each course. Moreover, by talking to the expert
                            counselor present in the seminar, you can easily
                            decide to choose the appropriate course.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link className="btn btn-primary btn-outline rounded">
                                Time schedule of all seminars
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <EnrollRuning />
            <Testimonial />
        </div>
    );
};

export default Home;
