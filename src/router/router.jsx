import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../page/Home/Home";
import Register from "../page/Register/Register";
import SignIn from "../page/Register/SignIn";
import JobDeteils from "../page/JobDeteils";
import PrivetRoute from "../Components/PrivetRoute/PrivetRoute";
import JobApply from "../page/JobApply/JobApply";
import MyApplication from "../page/MyApplication";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h1>page not found</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/jobs/:id',
                element: <PrivetRoute><JobDeteils></JobDeteils></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:4000/jobs/${params.id}`)
            },
            {
                path:'/JobApply/:id',
                element: <PrivetRoute><JobApply></JobApply></PrivetRoute>,
            },
            {
                path: '/myApplycation',
                element:<PrivetRoute>
                    <MyApplication></MyApplication>
                </PrivetRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            }
        ]
    },
]);

export default router