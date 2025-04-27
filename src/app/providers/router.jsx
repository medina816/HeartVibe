import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Club from "../../components/club/Club";
import AllEventsPage from "../../pages/AllEventsPage/AllEventsPage";
import NewsInfo from "../../pages/NewsInfo/NewsInfo";
import AllNews from "../../pages/AllNews/AllNews";
import CategoryPage from "../../pages/CategoryPage/CategoryPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import LeaveFeedBack from "../../components/LeaveFeedBack/LeaveFeedBack";
import EventInfo from "../../pages/EventInfo/EventInfo.jsx";
import SighIn from "../../components/SignIn/SighIn.jsx";
import SignUp from "../../components/SignUp/SignUp.jsx";
import Code from "../../components/Code/Code.jsx";
export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { path: "", element: <Home/> },
            { path: "about", element: <About/> },
            {path: 'club', element: <Club/>}, 
            {path: '/all-events', element: <AllEventsPage/>},
            {path: 'event', element: <EventInfo/>},
            {path:"/event/:id", element:<EventInfo />},
            {path: 'news', element: <NewsInfo/>},
            {path: 'all-News', element: <AllNews/>},
            {path: '/category/:categoryId', element: <CategoryPage/>},
            {path:"/news/:id", element:<NewsInfo />},
            {path:"*", element:<NotFoundPage />},
            {path: "FB", element: <LeaveFeedBack/>},
            {path: 'sighIn', element: <SighIn/>},
            {path: 'signUp', element: <SignUp/>},
            {path: '/verify', element: <Code/>}
        ]
    },

])