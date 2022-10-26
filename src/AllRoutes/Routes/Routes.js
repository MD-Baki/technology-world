import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CheckOut from "../../pages/CheckOut/CheckOut";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import Login from "../../pages/signIn/Login/Login";
import Register from "../../pages/signIn/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('https://technology-world-server.vercel.app/courses')
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://technology-world-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])