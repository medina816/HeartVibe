import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Club from "../../components/club/Club";
import AllEventsPage from "../../pages/AllEventsPage/AllEventsPage";
import NewsCard from "../../components/Card/newsCard/NewsCard";
import NewsInfo from "../../pages/NewsInfo/NewsInfo";
import AllNews from "../../pages/AllNews/AllNews";
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
            {path: 'all-News', element: <AllNews/>},
            {path:"/news/:id", element:<NewsInfo />},
            {path: '/category/:categoryId', element: <CategoryPage/>},
        ]
    },

])