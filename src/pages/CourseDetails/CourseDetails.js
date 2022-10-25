import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaAngleDoubleRight, FaCheckSquare, FaStar, FaStarHalfAlt } from "react-icons/fa";

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { course_name, course_photo, details, duration, rating, project, options, course_fee } = courseDetails;
    return (
        <div className='py-12'>
            <div className="text-[#2e5c83] text-center pb-8">
                <h2 className='uppercase font-bold text-2xl'>{course_name}</h2>
            </div>
            <div className="card  shadow-xl border-2 border-[#d6e6ee] p-6 text-[#2e5c83]">
                <div className="grid xl:grid-cols-2 gap-6 xl:items-center">
                    <img src={course_photo} alt="" className='rounded-lg w-full' />
                    <div className="course-Overview">
                        <div className="flex items-center mb-4">
                            <FaAngleDoubleRight />
                            <h4 className='font-bold text-xl pl-2'> Course Overview</h4>
                        </div>
                        <p className='text-[#476075] pb-4'>{details}</p>
                        <button className='btn bg-[#2e5c83] hover:bg-[#2e5c83] border-0'>Price: {course_fee} Taka Only</button>
                    </div>
                </div>
                <div className='font-bold pt-4'>
                    <div className="flex items-center justify-center border-2 border-yellow-400 rounded-md py-3">
                        <div className="flex text-amber-500">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                        </div>
                        <p className='text-[15px] pl-2'>{rating} Ratings</p>
                    </div>
                    <div className='text-center grid grid-cols-2 gap-4 mt-3 text-white'>
                        <div className='bg-amber-500 rounded-md py-3'>
                            <p>{project}</p>
                            <p>Project</p>
                        </div>
                        <div className='bg-orange-600 rounded-md py-3'>
                            <p>{duration}</p>
                            <p>Course Duration</p>
                        </div>
                    </div>
                </div>
                <div className="details bg-[#e8edf0] rounded-lg my-5 p-5">
                    <div className="flex items-center mb-3">
                        <FaAngleDoubleRight />
                        <h4 className='font-bold text-xl pl-2'>What is in the Course?</h4>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-4 items-start">
                        {
                            options.map(data => (
                                <div key={data} className="flex items-center">
                                    <FaCheckSquare className='mr-3' /><p>{data}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="card-footer">
                    <Link className='btn btn-block bg-[#2e5c83] hover:bg-[#2e5c83] border-0'>Get Premium Access</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;