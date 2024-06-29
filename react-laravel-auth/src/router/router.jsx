import { createBrowserRouter } from "react-router-dom";
import Auth from './../components/layout/Auth.jsx'
import Login from './../components/auth/Login.jsx'
import Register from './../components/auth/Register.jsx'
import Home from './../components/layout/Home.jsx'
import Dashboard from "../components/Dashboard/Dashboard.jsx";

const  router =  createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />,
            children: [ 
                {
                    path: '/dashboard',
                    element: <Dashboard/>
                }
            ],
        },
        {
            path: '/auth',
            element: <Auth/>,
            children: [
                {path: 'login',
                element: <Login/>,
               },
               {path: 'register',
                element: <Register/>,
               },
            ]
        },


    ]);

export default router;