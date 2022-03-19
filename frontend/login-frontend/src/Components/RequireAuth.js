import {Navigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/Context";

function RequireAuth({children}){
    const {authenticated, setAuthenticated} = useContext(AuthContext);
    return authenticated === true ? children : <Navigate to="/login" replace/>
}

export default RequireAuth;