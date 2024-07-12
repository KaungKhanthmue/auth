import { createBrowserRouter } from "react-router-dom";
import Auth from './../components/layout/Auth.jsx';
import Login from './../components/auth/Login.jsx';
import Register from './../components/auth/Register.jsx';
import Home from './../components/layout/Home.jsx';
import XX from './../components/layout/XX.jsx';
import Dashboard from "../components/Dashboard/Dashboard.jsx";
import Main from "../components/Ui/Main.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: 'main',
                element: <Main />
            }
        ],
    },
    {
        path: 'auth',
        element: <Auth />,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
        ]
    },
    {
        path: 'xx',
        element: <XX />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            }
        ],
    },
]);

export default router;
