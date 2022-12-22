// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import './LeftSideNav.css';

// const LeftSideNav = () => {

//     const [courses, setCourses] = useState([]);

//     useEffect(() => {
//         fetch('https://technology-world-server.vercel.app/courses')
//             .then(res => res.json())
//             .then(data => setCourses(data));
//     }, [])

//     return (
//         <div className='pb-10 side-nav h-full'>
//             <h2 className='uppercase text-[#2e5c83] font-bold text-xl text-center border-b-2 py-8 mt'>All Courses</h2>
//             {
//                 courses.map(course => <p key={course.id}>
//                     <NavLink
//                         to={`/course/${course.id}`}
//                         className={({ isActive }) => isActive ? 'active' : undefined}
//                     >{course.course_name}</NavLink>
//                 </p>)
//             }
//         </div>
//     );
// };

// export default LeftSideNav;
