import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Club from "../../components/club/Club";
import AllEventsPage from "../../pages/AllEventsPage/AllEventsPage";
import CategoryPage from "../../pages/CategoryPage/CategoryPage";

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { path: "", element: <Home/> },
            { path: "about", element: <About/> },
            {path: 'club', element: <Club/>}, 
            {path: '/all-events', element: <AllEventsPage/>},
            {path: '/category/:categoryId', element: <CategoryPage/>}
        ]
    },

])