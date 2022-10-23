import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Division from "../../Pages/Divisions/Division/Division";
import Hotel from "../../Pages/Hotels/Hotel/Hotel";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/division/:id',
                element: <Division></Division>
            },
            {
                path: '/hotel/:id',
                element: <Hotel></Hotel>
            }
        ]  
    }
])