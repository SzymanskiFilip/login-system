import {Navigate, useNavigate} from "react-router-dom";


function RequireNoAuth({children}){

    const navigate = useNavigate();

    let auth = false;
    return auth === true ? <Navigate to="/private" replace/> : children;
}

export default RequireNoAuth;