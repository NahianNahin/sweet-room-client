import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AddListing from "../Pages/AddListing/AddListing";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";

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
            }
        ]
    }
])

export default router;