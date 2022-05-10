import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/LoginPage";
import CreateAccount from "../pages/CreateAccount/CreateAccountPage";
import Feed from "../pages/Feed/FeedPage";
import Post from "../pages/Post/PostPage";

export default function RouteList() {

    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<Login />} />
                <Route path="cadastro" element={<CreateAccount />} />
                <Route path="feed" element={<Feed />} />
                <Route path="post" element={<Post />} />

            </Routes>
        </BrowserRouter>
    )
}