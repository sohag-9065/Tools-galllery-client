import Main from "../layout/Main";
import AllReview from "../pages/AllReview/AllReview";
import Blog from "../pages/Blog/Blog";
import AddAProduct from "../pages/Dashboard/AddAProduct";
import AddAReview from "../pages/Dashboard/AddAReview";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageOrders from "../pages/Dashboard/ManageOrders/ManageOrders";
import MyOrders from "../pages/Dashboard/MyOrders/MyOrders";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import MyPortfolio from "../pages/MyPortfolio/MyPortfolio";
import ErrorPage from "../pages/shared/ErrorPage";
import ToolPurchase from "../pages/ToolPurchase/ToolPurchase";
import ManageProducts from '../pages/Dashboard/ManageProducts/ManageProducts'
import PrivateRoute from "./PrivateRoute";
import MakeAdmin from "../pages/Dashboard/MakeAdmin/MakeAdmin";
import AboutMe from "../pages/MyPortfolio/AboutMe";
import Education from "../pages/MyPortfolio/Education";
import Project from "../pages/MyPortfolio/Project";
import Technology from "../pages/MyPortfolio/Technology";

const { createBrowserRouter } = require("react-router-dom");


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/all-reviews',
                element: <AllReview/>
            },
            {
                path: '/my-portfolio',
                element: <MyPortfolio/>,
                children: [
                    {
                        path: '',
                        element: <AboutMe/>
                    },
                    {
                        path: 'about-me',
                        element: <AboutMe/>
                    },
                    {
                        path: 'education',
                        element: <Education/>
                    },
                    {
                        path: 'project',
                        element: <Project/>
                    },
                    {
                        path: 'technology',
                        element: <Technology/>
                    }
                    
                ]
            },
            {
                path: '/tool-purchase/:toolId',
                element: <PrivateRoute><ToolPurchase/></PrivateRoute>
            },
            {
                path: '/dashboard',
                element:<PrivateRoute><Dashboard/></PrivateRoute> ,
                children: [
                    {
                        path: '',
                        element: <MyProfile/>
                    },
                    {
                        path: 'manage-products',
                        element: <ManageProducts/>
                    },
                    {
                        path: 'my-orders',
                        element: <MyOrders/>
                    },
                    {
                        path: 'review',
                        element: <AddAReview/>
                    },
                    {
                        path: 'all-order',
                        element: <ManageOrders/>
                    },
                    {
                        path: 'add-a-product',
                        element: <AddAProduct/>
                    },
                    {
                        path: 'make-admin',
                        element: <MakeAdmin/>
                    },
                    {
                        path: 'profile',
                        element: <MyProfile/>
                    },
                    
                ]
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/sign-up',
                element: <SignUp/>
            }

        ]
        
    }
]);

