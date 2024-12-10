import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../page/Home/Home";
import Register from "../page/Register/Register";
import SignIn from "../page/Register/SignIn";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<h1>page not found</h1>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<SignIn></SignIn>
            }
        ]
    },
]);

export default router