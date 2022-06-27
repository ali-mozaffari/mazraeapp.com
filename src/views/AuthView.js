import { Route, Routes } from "react-router-dom";
import Auth from "../pages/auth/auth";

const AuthView = () => {
    return ( 
        <Routes>
            <Route path="sendcode" element={<Auth />} />
        </Routes>
     );
}
 
export default AuthView;