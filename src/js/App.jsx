import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./views/Profile.jsx";
import Login from "./views/Login.jsx";
import UserContext from "./contexts/Context.jsx";



const App = () => {
    return (
        <UserContext>
            <BrowserRouter>

                <Routes>

                    <Route path="/" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </UserContext>
    );
};
export default App;