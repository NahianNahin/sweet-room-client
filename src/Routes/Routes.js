import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AddListing from "../Pages/AddListing/AddListing";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/login";
import Signup from "../Pages/login/Signup";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/AddListing',
                element: <AddListing></AddListing>
            },
            {
                path: '/Signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])

export default router;