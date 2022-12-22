import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CourseInfo from "../CoursesInfo/CourseInfo";
import { FaAngleDoubleRight } from "react-icons/fa";
import Loading from "../../Components/Loading";

const Courses = () => {
    const allCourses = useLoaderData();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    if (loading) return <Loading />;

    return (
        <div className="py-12">
            <div className=" flex items-center justify-center md:justify-start text-[#2e5c83] pb-4">
                <FaAngleDoubleRight className="text-2xl mr-2"></FaAngleDoubleRight>
                <h2 className="uppercase font-bold text-2xl">Courses</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allCourses.map((courses) => (
                    <CourseInfo key={courses.id} courses={courses}></CourseInfo>
                ))}
            </div>
        </div>
    );
};

export default Courses;
