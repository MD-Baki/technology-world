import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Courses from "../../pages/Courses/Courses";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/course/:id',
                element: ''
            },
        ]
    }
])