import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");


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
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
        
    }
]);

