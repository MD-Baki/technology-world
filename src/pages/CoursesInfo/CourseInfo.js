import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CourseInfo = ({ courses }) => {
    // console.log(courses);
    const { id, course_name, course_photo, rating } = courses;
    return (
        <div className="card shadow-xl border-2 border-[#d6e6ee] p-3 text-[#2e5c83]">
            <figure><img src={course_photo} alt="" className='md:h-[150px] xl:h-[200px] 2xl:h-[240px] w-full rounded-md' /></figure>
            <div className="pt-4">
                <h2 className="card-title text-lg pb-1">{course_name}</h2>
                <div className="flex items-center">
                    <div className="flex text-yellow-400">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                    </div>
                    <p className='text-[15px] font-bold pl-2'>{rating} Ratings</p>
                </div>
                <div className="card-actions mt-4">
                    <Link to={`/course/${id}`} className="btn btn-block btn-outline border-2 border-[#2e5c83] hover:bg-[#2e5c83] text-[#2e5c83]">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;