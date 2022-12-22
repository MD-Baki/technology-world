import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Terms from "../../outhers/Terms/Terms";
import Blog from "../../pages/Blog/Blog";
import CheckOut from "../../pages/CheckOut/CheckOut";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import Login from "../../pages/signIn/Login/Login";
import Register from "../../pages/signIn/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () =>
                    fetch("https://technology-world-server.vercel.app/courses"),
            },
            {
                path: "/home",
                element: <Home></Home>,
                loader: () =>
                    fetch("https://technology-world-server.vercel.app/courses"),
            },
            {
                path: "/courses",
                element: <Courses></Courses>,
                loader: () =>
                    fetch("https://technology-world-server.vercel.app/courses"),
            },
            {
                path: "/course/:id",
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) =>
                    fetch(
                        `https://technology-world-server.vercel.app/course/${params.id}`
                    ),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/terms",
                element: <Terms></Terms>,
            },
            {
                path: "/checkout/:id",
                element: (
                    <PrivateRoute>
                        <CheckOut></CheckOut>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://technology-world-server.vercel.app/checkout/${params.id}`
                    ),
            },
            {
                path: "/faq",
                element: <FAQ></FAQ>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
        ],
    },
    { path: "*", element: <NotFound></NotFound> },
]);
