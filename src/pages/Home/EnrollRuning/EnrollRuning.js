import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseInfo from "../../CoursesInfo/CourseInfo";

const EnrollRuning = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <div className="text-center pb-8">
                <h2 className="text-4xl font-bold leading-none sm:text-4xl text-[#2e5c83] capitalize">
                    Admission is on
                </h2>
                <p className="text-lg ">
                    We can be online at your convenience.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allCourses.map((courses) => (
                    <CourseInfo key={courses.id} courses={courses}></CourseInfo>
                ))}
            </div>
        </div>
    );
};

export default EnrollRuning;
