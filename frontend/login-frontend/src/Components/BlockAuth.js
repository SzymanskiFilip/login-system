import {Navigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/Context";

function BlockAuth({children}){

    const {authenticated, setAuthenticated} = useContext(AuthContext);

    return authenticated === false ? children : <Navigate to="/private"/>
}

export default BlockAuth;