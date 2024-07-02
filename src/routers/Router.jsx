import React from 'react';
import Favorite from '../pages/Favorite';
import LandPage from '../pages/LandPage';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Signup from '../pages/Signup';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Router() {
    const router = createBrowserRouter([
        { path: "/", element: <Signup /> },
        { path: "/favorite", element: <Favorite /> },
        { path: "/login", element: <Login /> },
        { path: "/profile", element: <Profile /> },
        { path: "/home", element: <LandPage /> },

    ]);
    return (
    <RouterProvider router={router}/>
        
    )
}
