import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Division from "../../Pages/Divisions/Division/Division";
import Home from "../../Pages/Home/Home/Home";
import Hotel from "../../Pages/Hotels/Hotel/Hotel";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Register/Register/Register";
import Spots from "../../Pages/Spots/Spots";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/spots')
            },
            {
                path: '/division/:id',
                element: <Division></Division>,
                loader: ({params}) => fetch(`http://localhost:5000/division/${params.id}`)
            },
            {
                path: '/spots/:id',
                element: <PrivateRoute><Spots></Spots></PrivateRoute> ,
                loader: ({params}) => fetch(`http://localhost:5000/spots/${params.id}`)
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