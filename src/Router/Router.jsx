import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ContractUs from "../Pages/ContractUs/ContractUs";
import ServicesDetails from "../Components/Services/ServicesDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Home/Register/Register";
import PrivetRoute from "../Components/PrivetRoute/PrivetRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import OurPackage from "../Components/PrivetRoute/OurPackage";
import OurGallery from "../Components/PrivetRoute/OurGallery";
import OurTeam from "../Components/PrivetRoute/OurTeam";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/contract',
                element:<ContractUs></ContractUs>
            },
            {
                path: '/details/:id',
                element: <PrivetRoute><ServicesDetails></ServicesDetails></PrivetRoute>,
                // loader : ()=> fetch('/services.json')
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/package',
                element: <PrivetRoute><OurPackage></OurPackage></PrivetRoute>,
                loader: () => fetch('/ourPackage.json')
            },
            {
                path: '/gallery',
                element:<PrivetRoute><OurGallery></OurGallery></PrivetRoute>
            },
            {
                path: '/team',
                element: <PrivetRoute><OurTeam></OurTeam></PrivetRoute>
            }
        ]
    }
])
export default router;