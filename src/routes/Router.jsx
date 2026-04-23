import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout"
import Homepage from "../pages/homepage/Homepage"
import ErrorPage from "../pages/errorpage/ErrorPage";
import FriendsDetails from "../pages/friendsDetails/FriendsDetails";
import Timeline from "../pages/timeline/Timeline";
import Stat from "../pages/stat/Stat";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        index: true,
        Component: Homepage
      },
      {
        path:"/friendsDetails/:id",
        Component: FriendsDetails,
        loader: ()=> fetch('/friends.json'),
        hydrateFallbackElement: <div>Loading...</div>,
      },
      {
        path:"/timeline",
        Component:Timeline
      },
       {
        path:"/stat",
        Component:Stat
      }
    ],
    errorElement: <ErrorPage/>
  }
]);