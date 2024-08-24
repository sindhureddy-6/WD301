import { createBrowserRouter, Navigate } from "react-router-dom";

import Signin from "../pages/signin"
import Signup from "../pages/signup"
import Logout from "../pages/logout";
import AccountLayout from "../layouts/account"
import ProtectedRoutes from "./ProtectedRoutes"
import Projects from "../pages/projects"
import Members from "../pages/members"
import Notfound from "../pages/Notfound";

const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/account/projects" replace /> },
    {
        path: "/signin",
        element: <Signin />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/logout",
        element: <Logout />
    },
    {
        path: "account",
        element: (
            <ProtectedRoutes>
                <AccountLayout />
            </ProtectedRoutes>
        ),
        children: [
            { index: true, element: <Navigate to="/account/projects" replace /> },
            {
                path: "projects",
                element: (<Projects />)
            },
            {
                path: "members",
                element: (<Members />)
            },
        ],
    },
    {
        path: "/notfound",
        element: <Notfound />
    },
    
]);
export default router;