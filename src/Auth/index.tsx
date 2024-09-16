import { Route } from "react-router-dom";

import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

export const useAuthRoutes = () => {
    return (
        <>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
        </>
    )   
}; 
