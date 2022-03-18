import {Navigate} from "react-router-dom";
import {useContext} from "react";

function RequireAuth({children}){

    //TODO: GLOBALNE CZY JEST AUTH
    let auth = false;
    return auth === true ? children : <Navigate to="/login" replace/>
}

export default RequireAuth;