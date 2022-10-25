import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Course from "../../pages/Course/Course";
import Courses from "../../pages/Courses/Courses";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                element: <Course></Course>
            }
        ]
    }
])